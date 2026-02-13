import { Injectable } from '@nestjs/common';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductImage } from './entities/product-image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductImageService {
    constructor(
        @InjectRepository(ProductImage)
        private readonly productImageRepository: Repository<ProductImage>,
    ) {}

    async create(createProductImageDto: CreateProductImageDto) {
        const productImage = this.productImageRepository.create(createProductImageDto);
        await this.productImageRepository.save(productImage);
        return productImage;
    }

    findAll() {
        return `This action returns all product images`;
    }

    findOne(id: string) {
        return `This action returns a #${id} product image`;
    }

    update(id: string, updateProductImageDto: UpdateProductImageDto) {
        return `This action updates a #${id} product image`;
    }

    remove(id: string) {
        return `This action removes a #${id} product image`;
    }
}
