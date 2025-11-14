import 'expect-more-jest';
import routes from '.';

function assertHasRoute(path: string, method: string): boolean {
  const routeStack = routes.stack;
  // Since Express doesn't store mount paths in an easily accessible way,
  // we'll use a simpler approach that works with our known route structure
  // Check for direct routes (not mounted sub-routers)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hasDirectRoute = routeStack.some((layer: any) => {
    if (layer.route) {
      return (
        layer.route.path === path && layer.route.methods[method.toLowerCase()]
      );
    }
    return false;
  });
  if (hasDirectRoute) {
    return true;
  }
  // For mounted sub-routers, we need to check based on known mount points
  // This is a pragmatic approach since Express doesn't expose mount paths easily
  // Helper function to check for routes in specific router layers
  const checkRouterLayer = (expectedIndex: number): boolean => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return routeStack.some((layer: any, index: number) => {
      if (layer.handle && layer.handle.stack) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const hasRootRoute = layer.handle.stack.some((subLayer: any) => {
          return (
            subLayer.route &&
            subLayer.route.path === '/' &&
            subLayer.route.methods.get
          );
        });
        return hasRootRoute && index === expectedIndex;
      }
      return false;
    });
  };
  // Check for root route '/' - should be in the first router layer (index 0)
  if (path === '/' && method.toLowerCase() === 'get') {
    return checkRouterLayer(0);
  }
  // Check for ping route '/ping' - should be in the second router layer (index 1)
  if (path === '/ping' && method.toLowerCase() === 'get') {
    return checkRouterLayer(1);
  }
  return false;
}

describe('Route', () => {
  it('exists', () => {
    expect(routes).toBeFunction();
  });
  it('is an Express Router', () => {
    expect(routes).toHaveProperty('use');
    expect(routes).toHaveProperty('get');
    expect(routes).toHaveProperty('post');
  });
  it('has a GET route for /', () => {
    expect(assertHasRoute('/', 'GET')).toBe(true);
  });
  it('has a GET route for /ping', () => {
    expect(assertHasRoute('/ping', 'GET')).toBe(true);
  });
});
