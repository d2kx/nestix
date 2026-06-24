import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { MODULE_OPTIONS_TOKEN, ApiModuleOptions } from './api.module-definition';

@Injectable()
export class CompanyApiService {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: ApiModuleOptions,
    private readonly httpService: HttpService
  ) {}

  async getData(endpoint: string): Promise<any> {
    const url = `${this.options.baseUrl}/${endpoint}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
}
