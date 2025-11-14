import { Request, Response } from 'express';

export async function getRoot(_request: Request, response: Response) {
  response
    .status(200)
    .send('Welcome to the Condé Nast Typescript bootstrap project.');
}
