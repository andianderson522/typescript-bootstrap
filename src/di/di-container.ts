import 'reflect-metadata';
import { Container } from 'inversify';
import type { ILogObj, Logger } from 'tslog';
import { DI_TYPES } from './di-types';
import { CustomLogger } from '../providers';
import LocalServer from '../app';
import bindConstants from './di-constants';
import bindEnvironmentals from './di-environmental-bind';

// eslint-disable-next-line @typescript-eslint/naming-convention
const DIContainer = new Container({ autobind: true });

bindConstants(DIContainer);
bindEnvironmentals(DIContainer);

// Static Bindings Here
DIContainer.bind<Logger<ILogObj>>(DI_TYPES.LOGGER)
  .to(CustomLogger)
  .inSingletonScope();
DIContainer.bind<LocalServer>(DI_TYPES.APPLICATION)
  .to(LocalServer)
  .inRequestScope();

export = DIContainer;
