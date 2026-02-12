import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';

@Controller('sizes')
export class SizeController {
    constructor(private readonly sizeService: SizeService) { }

    @Post()
    async create(@Body() createSizeDto: CreateSizeDto) {
        const size = await this.sizeService.create(createSizeDto);
        return {
            message: "Size created successfully",
            data: size
        };
    }

    @Get()
    async findAll() {
        const sizes = await this.sizeService.findAll();
        return {
            message: "All sizes fetched successfully",
            data: sizes
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const size = await this.sizeService.findOne(id);
        return {
            message: `Size with id ${id} fetched successfully`,
            data: size
        };
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
        const size = await this.sizeService.update(id, updateSizeDto);
        return {
            message: `Size with id ${id} updated successfully`,
            data: size
        };
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const size = await this.sizeService.remove(id);
        return {
            message: `Size with id ${id} deleted successfully`,
            data: size
        };
    }
}
