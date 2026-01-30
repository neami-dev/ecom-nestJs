import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenderService } from './gender.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';

@Controller('genders')
export class GenderController {
  constructor(private readonly genderService: GenderService) { }

  @Post()
  async create(@Body() createGenderDto: CreateGenderDto) {
    const gender = await this.genderService.create(createGenderDto);
    return {
      message: "Gender created successfully",
      data: gender
    };
  }

  @Get()
  findAll() {
    return this.genderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    return this.genderService.update(+id, updateGenderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genderService.remove(+id);
  }
}
