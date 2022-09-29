import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsString, Max, Min, min } from "class-validator";

export class CreateReportDTO{
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    make:string;

    @IsNotEmpty()
    @IsString()
    model:string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1930)
    @Max(2050)
    year:number;

    @IsNotEmpty()
    @IsString()
    @IsLongitude()
    longitude:number;

    @IsNotEmpty()
    @IsString()
    @IsLatitude()
    latitude:number;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(50)
    mileage:number;
}