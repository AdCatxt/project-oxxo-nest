import { IsEmail, IsIn, IsOptional, IsString, MinLength } from "class-validator";
import { User } from "../entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto extends User {
    @ApiProperty({
        default: 'user@email.com'
    })
    @IsEmail()
    declare userEmail: string;

    @ApiProperty({
        default: 'password'
    })
    @IsString()
    @MinLength(8)
    declare userPassword: string;

    @ApiProperty({
        default: ['Employee']
    })
    @IsOptional()
    @IsIn(['Employee', 'Manager', 'Admin'])
    declare userRoles: string[];
}
