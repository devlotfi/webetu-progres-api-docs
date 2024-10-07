import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { EnvDefinition } from './shared/env-definition';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<EnvDefinition>);

  app.enableCors({
    origin: [configService.getOrThrow<string>('WEB_CLIENT_URL')],
  });

  const config = new DocumentBuilder()
    .setTitle('Webetu Progres API')
    .setDescription(
      'An unofficial api docs for the api used by the webetu progres app',
    )
    .addApiKey(
      {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
      'jwt-token',
    )
    .setVersion('1.0')
    .addServer(
      '/proxy/https://progres.mesrs.dz',
      'The proxied requests to bypass CORS',
    )
    .addServer('https://progres.mesrs.dz', 'The original API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.getOrThrow<number>('PORT'));
}
bootstrap();
