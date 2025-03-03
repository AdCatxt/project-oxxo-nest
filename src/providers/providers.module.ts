import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([])],
  controllers: [ProvidersController],
  providers: [ProvidersService],
})
export class ProvidersModule {}
