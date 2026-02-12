import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductVariantService } from './product-variant.service';
import { CreateProductVariantDto } from './dto/create-product-variant.dto';
import { UpdateProductVariantDto } from './dto/update-product-variant.dto';

@Controller('product-variants')
export class ProductVariantController {
    constructor(private readonly productVariantService: ProductVariantService) { }

    @Post()
    async create(@Body() createProductVariantDto: CreateProductVariantDto) {
        const productVariant = await this.productVariantService.create(createProductVariantDto);
        return {
            message: "Product variant created successfully",
            data: productVariant
        };
    }

    @Get()
    findAll() {
        return this.productVariantService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productVariantService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductVariantDto: UpdateProductVariantDto) {
        return this.productVariantService.update(+id, updateProductVariantDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productVariantService.remove(+id);
    }
}
