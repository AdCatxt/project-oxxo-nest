import { IsEmail, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
    @ApiProperty({
        default: 'user@email.com'
    })
    @IsString()
    @IsEmail()
    userEmail: string;

    @ApiProperty({
        default: 'password'
    })
    @IsString()
    userPassword: string;
}