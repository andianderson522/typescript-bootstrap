import { getRoot } from './root-controller';
import { Request, Response } from 'express';

describe('root route', () => {
  let mockRequest: Request;
  let spyResponse: Response;
  let mockNext: jest.Mock;
  let statusSpy: jest.SpyInstance;
  let sendSpy: jest.SpyInstance;

  beforeEach(() => {
    mockRequest = {} as Request;
    // Create a Response object with spied methods
    spyResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    } as unknown as Response;
    // Get references to the spy methods for assertions
    statusSpy = spyResponse.status as jest.Mock;
    sendSpy = spyResponse.send as jest.Mock;
    mockNext = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('works as expected', async () => {
    await getRoot(mockRequest, spyResponse);
    expect(statusSpy).toHaveBeenCalledWith(200);
    expect(sendSpy).toHaveBeenCalledWith(
      'Welcome to the Typescript bootstrap project.'
    );
    expect(mockNext).not.toHaveBeenCalled();
  });
});
