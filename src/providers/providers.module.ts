import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { EXPIRES_IN, JWT_KEY } from '../auth/constants/jwt.constants';
import { Provider } from './entities/provider.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Provider]), JwtModule.register({
    secret: JWT_KEY,
          signOptions: {
            expiresIn: EXPIRES_IN,
          },
        })],
  controllers: [ProvidersController],
  providers: [ProvidersService],
})
export class ProvidersModule {}
