import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Generic Api')
    .setDescription('API')
    .setVersion('1.0')
    .addTag('generic-api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/documentation', app, document);

  app.use(bodyParser.json());
  await app.listen(3000);
}
bootstrap();
