import { IsEmail, IsNumber, IsObject, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateManagerDto {
    @IsString()
    @MaxLength(100)
    managerFullName: string;
    @IsString()
    @IsEmail()
    managerEmail: string;
    @IsNumber()
    managerSalary: number;
    @IsString()
    @MaxLength(15)
    managerPhone: string;
    @IsObject()
    @IsOptional()
    location: Location;
}
