import 'reflect-metadata';
import nock from 'nock';
import { DIContainer } from './di';

beforeAll(() => {
  nock.disableNetConnect();
  nock.enableNetConnect('localhost');
});

afterAll(async () => {
  nock.enableNetConnect();
  nock.cleanAll();
  await DIContainer.unload();
});
