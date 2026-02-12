import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColorService } from './color.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';

@Controller('colors')
export class ColorController {
  constructor(private readonly colorService: ColorService) { }

  @Post()
  async create(@Body() createColorDto: CreateColorDto) {
    const color = await this.colorService.create(createColorDto);
    return {
      message: 'Color created successfully',
      data: color,
    }
  }

  @Get()
  async findAll() {
    const colors = await this.colorService.findAll();
    return {
      message: "All colors fetched successfully",
      data: colors
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const color = await this.colorService.findOne(+id);
    return {
      message: `Color with id ${id} fetched successfully`,
      data: color
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateColorDto: UpdateColorDto) {
    const color = await this.colorService.update(+id, updateColorDto);
    return {
      message: `Color with id ${id} updated successfully`,
      data: color
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const color = await this.colorService.remove(+id);
    return {
      message: `Color with id ${id} deleted successfully`,
      data: color
    };
  }
}
