import { Module, Global } from '@nestjs/common';
import { ConfigurableModuleClass } from './logger.module-definition';
import { CompanyLoggerService } from './logger.service';

@Global()
@Module({
  providers: [CompanyLoggerService],
  exports: [CompanyLoggerService],
})
export class CompanyLoggerModule extends ConfigurableModuleClass {}
