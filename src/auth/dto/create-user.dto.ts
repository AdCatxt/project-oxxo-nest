import { IsEmail, IsIn, IsOptional, IsString, MinLength } from "class-validator";
import { User } from "../entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: 'user@email.com'
    })
    @IsEmail()
    userEmail: string;

    @ApiProperty({
        default: 'password'
    })
    @IsString()
    @MinLength(8)
    userPassword: string;

    @ApiProperty({
        default: ['Employee']
    })
    @IsOptional()
    @IsIn(['Employee', 'Manager', 'Admin'])
    userRoles: string[];
}
