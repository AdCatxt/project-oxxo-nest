import { IsOptional, IsString, IsUUID, MaxLength, IsNumber, IsObject } from 'class-validator';
import { Product } from '../entities/product.entity';
import { Provider } from 'src/providers/entities/provider.entity';

export class CreateProductDto extends Product {
    @IsString()
    @IsUUID('4')
    @IsOptional()
    declare productId: string;
    @IsString()
    @MaxLength(40)
    declare productName: string;
    @IsNumber()
    declare price: number;
    @IsNumber()
    declare countSeal: number;
    @IsObject()
    @IsOptional()
    declare provider: Provider;
}

