import { ArrayNotEmpty, IsArray, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Location } from "../entities/location.entity";
import { Region } from "src/regions/entities/region.entity";

export class CreateLocationDto extends Location {
    @IsString()
    @MaxLength(35)
    declare locationName: string;
    @IsString()
    @MaxLength(160)
    declare locationAdress: string;
    @IsArray()
    @ArrayNotEmpty()
    declare locationLating: number[];
    @IsObject()
    @IsOptional()
    declare region: Region;
}