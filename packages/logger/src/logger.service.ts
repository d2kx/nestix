import { Injectable, Inject } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN, LoggerModuleOptions } from './logger.module-definition';

@Injectable()
export class NestixLoggerService {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: LoggerModuleOptions
  ) {}

  log(message: string) {
    console.log(`[${this.options.prefix}] ${message}`);
  }
}
