import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface ApiModuleOptions {
  baseUrl: string;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<ApiModuleOptions>().build();
