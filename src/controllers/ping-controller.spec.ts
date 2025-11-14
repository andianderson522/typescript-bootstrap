import { getPing } from './ping-controller';
import { type Request, Response } from 'express';

describe('ping route', () => {
  let spyResponse: Response;
  let mockNext: jest.Mock;
  let statusSpy: jest.SpyInstance;
  let jsonSpy: jest.SpyInstance;
  beforeEach(() => {
    // Create a Response object with spied methods
    spyResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    // Get references to the spy methods for assertions
    statusSpy = spyResponse.status as jest.Mock;
    jsonSpy = spyResponse.json as jest.Mock;
    mockNext = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('works as expected', async () => {
    const expected = {
      status: 'running',
    };
    await getPing({} as Request, spyResponse);
    expect(statusSpy).toHaveBeenCalledWith(200);
    expect(jsonSpy).toHaveBeenCalledWith(expected);
    expect(mockNext).not.toHaveBeenCalled();
  });
});
