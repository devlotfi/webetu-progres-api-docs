import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { ProxyModule } from './proxy/proxy.module';

@Module({
  imports: [ConfigModule.forRoot(), ApiModule, ProxyModule],
})
export class AppModule {}
