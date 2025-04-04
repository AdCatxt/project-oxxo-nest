import { IsOptional, IsString, IsUUID, MaxLength, IsNumber, IsObject } from 'class-validator';
import { Product } from '../entities/product.entity';
import { Provider } from 'src/providers/entities/provider.entity';

export class CreateProductDto {
    @IsString()
    @IsUUID('4')
    @IsOptional()
    productId: string;
    @IsString()
    @MaxLength(40)
    productName: string;
    @IsNumber()
    price: number;
    @IsNumber()
    countSeal: number;
    @IsObject()
    @IsOptional()
    provider: Provider;
}

