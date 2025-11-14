import { Request, Response } from 'express';

export async function getPing(_request: Request, response: Response) {
  response.status(200).json({
    // TODO: pull status from Processor
    status: 'running',
  });
}
