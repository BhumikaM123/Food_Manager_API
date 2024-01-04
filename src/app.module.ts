import { Module } from '@nestjs/common';


import { FoodModule } from './food/food.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/food_manager'),
    FoodModule,
  ],
})
export class AppModule { }
