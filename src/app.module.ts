import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { ProvidersModule } from './providers/providers.module';
import { ManagersModule } from './managers/managers.module';
import { LocationsModule } from './locations/locations.module';
import { RegionsModule } from './regions/regions.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
  ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: (process.env.host || 'localhost'),
    port: +(process.env.port || 5432),
    username: 'postgres',
    password: "PassWord", 
    database: process.env.database,
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
  }),
  EmployeesModule,
  ProductsModule,
  ProvidersModule,
  ManagersModule,
  LocationsModule,
  RegionsModule,
  AuthModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
