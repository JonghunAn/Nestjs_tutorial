import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { UsersController } from './users/users.controller';
import { CatsService } from './cats/cats.service';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [BoardsModule],
})
export class AppModule {}
