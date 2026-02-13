import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductImageService } from './product-image.service';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';

@Controller('product-images')
export class ProductImageController {
    constructor(private readonly productImageService: ProductImageService) {}

    @Post()
    async create(@Body() createProductImageDto: CreateProductImageDto) {
        const productImage = await this.productImageService.create(createProductImageDto);
        return {
            message: 'Product image created successfully',
            data: productImage,
        };
    }

    @Get()
    findAll() {
        return this.productImageService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productImageService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductImageDto: UpdateProductImageDto) {
        return this.productImageService.update(id, updateProductImageDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productImageService.remove(id);
    }
}
