import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface LoggerModuleOptions {
  prefix: string;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<LoggerModuleOptions>()
    .setClassMethodName('forRoot')
    .build();
