import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodDto } from './food.dto';
import { query } from 'express';


@Controller('food')
export class FoodController {
    constructor(private FoodService: FoodService) { }


    @Get()
    public getFoods() {
        return this.FoodService.getFoods();
    }
    @Post()
    public postFood(@Body() food: FoodDto) {
        return this.FoodService.postFood(food);
    }

    @Get(':id')
    public async getFoodById(@Param('id') id: number) {
        return this.FoodService.getFoodById(id);
    }

    @Delete(':id')
    public async deleteFoodById(@Param('id') id: number) {
        return this.FoodService.deleteFoodById(id);
    }

    @Put(':id')
    public async putFoodById(@Param('id') id: number, @Query() query) {
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.FoodService.putFoodById(id, propertyName, propertyValue);
    }
}