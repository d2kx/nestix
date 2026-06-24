import { Module, Global } from '@nestjs/common';
import { ConfigurableModuleClass } from './logger.module-definition';
import { NestixLoggerService } from './logger.service';

@Global()
@Module({
  providers: [NestixLoggerService],
  exports: [NestixLoggerService],
})
export class NestixLoggerModule extends ConfigurableModuleClass {}
