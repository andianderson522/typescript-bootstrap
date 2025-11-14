import 'reflect-metadata';
import express from 'express';
import type { ILogObj, Logger } from 'tslog';
import { inject, injectable } from 'inversify';
import routes from './routes';
import { DIContainer } from '../di';
import { DI_TYPES } from '../di/di-types';
import { Server } from 'http';

@injectable()
class LocalServer {
  private server!: Server;
  private host: string;
  private app: express.Application;
  private port: number;
  private log: Logger<ILogObj>;
  private isRunning = false;

  constructor(
    @inject(DI_TYPES.APPLICATION_HOST) host: string,
    @inject(DI_TYPES.APPLICATION_PORT) port: number,
    @inject(DI_TYPES.LOGGER) logger: Logger<ILogObj>
  ) {
    this.host = host;
    this.port = port;
    this.log = logger;
    this.app = express();
    this.app.disable('x-powered-by');
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/', routes);
  }

  async start(): Promise<void> {
    this.log.info('Starting server');
    this.log.info('Loading DI-Container');
    await DIContainer.load();
    this.log.info('Loading DI-Container Finished');
    this.server = this.app.listen(this.port, this.host, () => {
      this.log.info(`Listening on ${this.host}:${this.port}`);
    });
    this.isRunning = true;
  }

  async stop(): Promise<void> {
    this.log.info('Stopping server');
    await DIContainer.unload();
    if (this.server) {
      await this.server.close(() => {
        this.log.info('Server stopped');
      });
    }
    this.isRunning = false;
  }

  setPort(port: number): void {
    this.port = port;
  }

  getPort(): number {
    return this.port;
  }

  isStarted(): boolean {
    return this.isRunning;
  }

  isStopped(): boolean {
    return !this.isRunning;
  }
}

export default LocalServer;
