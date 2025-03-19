import { IsEmail, IsNumber, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Manager } from "../entities/manager.entity";
import { Location } from "../../locations/entities/location.entity";

export class CreateManagerDto extends Manager {
    @IsString()
    @MaxLength(100)
    declare managerFullName: string;
    @IsString()
    @IsEmail()
    declare managerEmail: string;
    @IsNumber()
    declare managerSalary: number;
    @IsString()
    @MaxLength(15)
    declare managerPhone: string;
    @IsObject()
    @IsOptional()
    declare location: Location;
}
