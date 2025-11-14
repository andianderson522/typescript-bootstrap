import 'reflect-metadata';
import { CustomLogger } from '.';

describe('Providers Module', () => {
  it('has a logger', () => {
    expect(CustomLogger).toBeDefined();
  });
});
