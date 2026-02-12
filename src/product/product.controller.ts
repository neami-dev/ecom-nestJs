import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productService.create(createProductDto);
    return {
      message: "Product created successfully",
      data: product
    };
  }

  @Get()
  async findAll() {
    const products = await this.productService.findAll();
    return {
      message: "All products fetched successfully",
      data: products
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productService.findOne(+id);
    return {
      message: `Product with id ${id} fetched successfully`,
      data: product
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const product = await this.productService.update(+id, updateProductDto);
    return {
      message: `Product with id ${id} updated successfully`,
      data: product
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const product = await this.productService.remove(+id);
    return {
      message: `Product with id ${id} deleted successfully`,
      data: product
    };
  }
}
