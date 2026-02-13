import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductCollectionService } from './product-collection.service';
import { CreateProductCollectionDto } from './dto/create-product-collection.dto';
import { UpdateProductCollectionDto } from './dto/update-product-collection.dto';

@Controller('product-collections')
export class ProductCollectionController {
    constructor(private readonly productCollectionService: ProductCollectionService) {}

    @Post()
    async create(@Body() createProductCollectionDto: CreateProductCollectionDto) {
        const productCollection = await this.productCollectionService.create(createProductCollectionDto);
        return {
            message: 'Product collection created successfully',
            data: productCollection,
        };
    }

    @Get()
    findAll() {
        return this.productCollectionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productCollectionService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductCollectionDto: UpdateProductCollectionDto) {
        return this.productCollectionService.update(id, updateProductCollectionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productCollectionService.remove(id);
    }
}
