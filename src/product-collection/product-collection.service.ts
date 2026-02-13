import { Injectable } from '@nestjs/common';
import { CreateProductCollectionDto } from './dto/create-product-collection.dto';
import { UpdateProductCollectionDto } from './dto/update-product-collection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCollection } from './entities/product-collection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCollectionService {
    constructor(
        @InjectRepository(ProductCollection)
        private readonly productCollectionRepository: Repository<ProductCollection>,
    ) {}

    async create(createProductCollectionDto: CreateProductCollectionDto) {
        const productCollection = this.productCollectionRepository.create(createProductCollectionDto);
        await this.productCollectionRepository.save(productCollection);
        return productCollection;
    }

    findAll() {
        return `This action returns all product collections`;
    }

    findOne(id: string) {
        return `This action returns a #${id} product collection`;
    }

    update(id: string, updateProductCollectionDto: UpdateProductCollectionDto) {
        return `This action updates a #${id} product collection`;
    }

    remove(id: string) {
        return `This action removes a #${id} product collection`;
    }
}
