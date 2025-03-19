import { IsEmail, IsObject, IsString, MaxLength, IsOptional } from "class-validator";
import { Employee } from "../entities/employee.entity";
import { Location } from "../../locations/entities/location.entity";

export class CreateEmployeeDto extends Employee {
    @IsString()
    @MaxLength(30)
    declare employeeName: string;

    @IsString()
    @MaxLength(70)
    declare employeeLastName: string;

    @IsString()
    @MaxLength(10)
    declare employeePhone: string;

    @IsString()
    @IsEmail()
    declare employeeEmail: string;

    @IsOptional()
    @IsObject()
    declare location: Location;
}