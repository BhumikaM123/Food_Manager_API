import { Injectable, HttpException } from '@nestjs/common';
import { FOODS } from './foods.mock';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Ifood } from './interfaces/car.interface';
import { FoodDto } from './food.dto';

@Injectable()//FoodService
export class FoodService {
   private foods = FOODS;
   public async getFoods() {
      return this.foods;
   } 

   public postFood(food) {
      return this.foods.push(food);
   }

   public getFoodById(id: number): Promise<any> {
      const foodId = Number(id);
      return new Promise((resolve) => {
         const index = this.foods.findIndex((food) => food.id == foodId);
         if (!index) {
            throw new HttpException("food not found", 404);
         }

         return resolve(this.foods[index]);
      }
      );

   }

   public deleteFoodById(id: number): Promise<any> {
      const foodId = Number(id);
      return new Promise((resolve) => {
         const index = this.foods.findIndex((food) => food.id == foodId);
         if (index === -1) {
            throw new HttpException("Not Found", 404);
         }
         this.foods.splice(index, 1);
         return resolve(this.foods[index]);
      });
   }

   public putFoodById(id: number, propertyName: string, propertyValue: string): Promise<any> {
      const foodId = Number(id);
      return new Promise((resolve) => {
         const index = this.foods.findIndex((food) => food.id == foodId);
         if (index === -1) {
            throw new HttpException("Not Found", 404);
         }
         this.foods[index][propertyName] = propertyValue;
         return resolve(this.foods[index]);
      });
   }
}
