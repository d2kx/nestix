import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigurableModuleClass } from './api.module-definition';
import { NestixApiService } from './api.service';

@Module({
  imports: [HttpModule],
  providers: [NestixApiService],
  exports: [NestixApiService],
})
export class NestixApiModule extends ConfigurableModuleClass {}
