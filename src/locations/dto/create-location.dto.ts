import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsObject, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { Region } from "src/regions/entities/region.entity";

export class CreateLocationDto {
    
    @ApiProperty({
        default: "OCXO de la Esquina"
    })
    @IsString()
    @MaxLength(40)
    locationName: string;

    @ApiProperty({
        default: "Avenida x, S/N , 10938"
    })
    @IsString()
    @MaxLength(160)
    locationAddress: string;

    @ApiProperty({
        default: [50,53]
    })
    @IsArray()
    @ArrayNotEmpty()
    locationLatLng: number[];
    
    @IsObject()
    @IsOptional()
    region: Region;

    @IsUUID()
    @IsOptional()
    manager: string;
}