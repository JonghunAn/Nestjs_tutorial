import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { UsersController } from './users/users.controller';
import { CatsService } from './cats/cats.service';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule],
})
export class AppModule {}
