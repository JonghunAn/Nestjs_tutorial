import { CatsService } from './cats.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
  Bind,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interface/cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private CatsService: CatsService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createCateDto: CreateCatDto) {
    this.CatsService.create(createCateDto);
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Cat[]> {
    return this.CatsService.findAll();
  }

  @Post()
  saveUser(@Body() payload): string {
    return Object.assign({
      statusCode: 201,
      data: payload,
      statusMsg: 'created successfully',
    });
  }

  //   @Post('create')
  //   async create(@Body() createCatDto: CreateCatDto) {
  //     return createCatDto;
  //   }
  //   1;
  @Get(':id')
  @Bind(Param())
  findOne(params) {
    return params.id;
  }

  @Put()
  @HttpCode(201)
  async updateCats(@Body('id') id, @Body('name') name) {
    console.log(id, name);
    return { id, name };
  }

  @Post()
  @HttpCode(204)
  createCats(@Body('name') name) {
    return name;
  }
}
