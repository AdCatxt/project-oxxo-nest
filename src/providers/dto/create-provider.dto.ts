import { IsEmail, IsString, MaxLength, IsOptional } from 'class-validator';
import { Provider } from '../entities/provider.entity';

export class CreateProviderDto extends Provider {
    @IsString()
    @MaxLength(100)
    declare providerName: string;
    @IsEmail()
    @IsString()
    declare providerEmail: string;
    @IsString()
    @MaxLength(15)
    @IsOptional()
    declare providerPhone: string;
}
