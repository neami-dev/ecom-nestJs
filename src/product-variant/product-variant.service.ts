import { Injectable } from '@nestjs/common';
import { CreateProductVariantDto } from './dto/create-product-variant.dto';
import { UpdateProductVariantDto } from './dto/update-product-variant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductVariant } from './entities/product-variant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductVariantService {
    constructor(@InjectRepository(ProductVariant) private readonly productVariantRepository: Repository<ProductVariant>) { }

    async create(createProductVariantDto: CreateProductVariantDto) {
        const productVariant = this.productVariantRepository.create(createProductVariantDto);
        await this.productVariantRepository.save(productVariant);
        return productVariant;
    }

    findAll() {
        return `This action returns all product variants`;
    }

    findOne(id: number) {
        return `This action returns a #${id} product variant`;
    }

    update(id: number, updateProductVariantDto: UpdateProductVariantDto) {
        return `This action updates a #${id} product variant`;
    }

    remove(id: number) {
        return `This action removes a #${id} product variant`;
    }
}
