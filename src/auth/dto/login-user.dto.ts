import { IsEmail, IsString } from "class-validator";

export class LoginUserDto{
    @IsString()
    @IsEmail()
    userEmail: string;
    @IsString()
    userPassword: string;
}