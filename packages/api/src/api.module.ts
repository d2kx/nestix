import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigurableModuleClass } from './api.module-definition';
import { CompanyApiService } from './api.service';

@Module({
  imports: [HttpModule],
  providers: [CompanyApiService],
  exports: [CompanyApiService],
})
export class CompanyApiModule extends ConfigurableModuleClass {}
