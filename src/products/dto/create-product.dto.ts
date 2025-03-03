import { IsOptional, IsString, IsUUID, MaxLength, IsNumber } from 'class-validator';
import { Product } from '../entities/product.entity';
import { Provider } from 'src/providers/entities/provider.entity';

export class CreateProductDto extends Product {
    @IsUUID( '4')
    @IsOptional()
    declare productId: string;
    @IsString()
    @MaxLength(40)
    declare productName: string;
    @IsNumber()
    declare price: number;
    @IsNumber()
    declare countSeal: number;
    @IsString()
    @IsUUID('4')
    @IsOptional()
    declare provider: Provider;
}

