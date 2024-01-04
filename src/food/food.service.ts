import { Injectable, HttpException } from '@nestjs/common';
import { FOODS } from './foods.mock';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Ifood } from './interfaces/food.interface';
import { FoodDto } from './food.dto';

@Injectable()//FoodService
export class FoodService {
   constructor(@InjectModel('Food') private readonly foodModel: Model<Ifood>) {

   }

   public async getFoods(): Promise<FoodDto[]> {
      const foods = await this.foodModel.find().exec();
      if (!foods || !foods[0]) {
         throw new HttpException("not found", 404);
      }
      return foods;
   }

   public async postFood(NewFood: FoodDto) {
      const food = await this.foodModel.findOne({ NewFood }).exec();
      return food.save();
   }

   public async getFoodById(id: number): Promise<FoodDto> {
      const foods = await this.foodModel.findOne({ id }).exec();
      if (!foods) {
         throw new HttpException("not found", 404);
      }
      return foods;
   }

   public async deleteFoodById(id: number): Promise<FoodDto> {
      const foodToDelete = await this.foodModel.findOne({ id }).exec();

      if (!foodToDelete) {
         throw new HttpException("not found", 404);
      }

      const deletionResult = await this.foodModel.deleteOne({ id }).exec();

      if (deletionResult.deletedCount === 0) {
         throw new HttpException("Deletion failed", 500);
      }

      return foodToDelete;
   }

   public async putFoodById(id: number, propertyName: string, propertyValue: string): Promise<FoodDto> {
      const foods = await this.foodModel.findOneAndUpdate({ id },
         {
            [propertyName]: propertyValue,
         },
      ).exec();
      if (!foods) {
         throw new HttpException("not found", 404);
      }
      return foods;
   }
}
