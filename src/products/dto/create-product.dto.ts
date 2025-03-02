import { IsOptional, IsString, IsUUID, MaxLength, IsNumber, IS_INT } from 'class-validator';

export class CreateProductDto {
    @IsUUID( '4')
    @IsOptional()
    productId: string;
    @IsString()
    @MaxLength(40)
    productName: string;
    @IsNumber()
    price: number;
    @IsNumber()
    countSeal: number;
    @IsString()
    @IsUUID('4')
    @IsOptional()
    provider: string;
}

