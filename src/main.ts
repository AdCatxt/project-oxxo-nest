import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors: {
      origin: process.env.allowedOrigin,
      credentials: true
    }
  });

  app.use(cookieParser());
  const config = new DocumentBuilder()
  .setTitle('Oxxo API')
  .setDescription('Oxxo for API management')
  .setVersion('0.9')
  .addBearerAuth()
  .build();
const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }))
  await app.listen(4000);
}
bootstrap();