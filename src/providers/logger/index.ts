import { Logger, ILogObj } from 'tslog';
import { decorate, inject, injectable } from 'inversify';
import { DI_TYPES } from '../../di/di-types';

decorate(injectable(), Logger);

@injectable()
class CustomLogger extends Logger<ILogObj> {
  constructor(
    @inject(DI_TYPES.LOG_LEVEL) level: number,
    @inject(DI_TYPES.ENVIRONMENT) environment: string,
    @inject(DI_TYPES.LOG_TYPE) type: 'json' | 'pretty' | 'hidden' | undefined
  ) {
    super({
      type: type,
      name: `typescript-bootstrap-${environment}`,
      minLevel: level,
    });
  }
}

export default CustomLogger;
