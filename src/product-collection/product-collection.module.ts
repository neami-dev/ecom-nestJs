import { Module } from '@nestjs/common';
import { ProductCollectionService } from './product-collection.service';
import { ProductCollectionController } from './product-collection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCollection } from './entities/product-collection.entity';
import { Product } from 'src/product/entities/product.entity';
import { Collection } from 'src/collection/entities/collection.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProductCollection, Product, Collection])],
    controllers: [ProductCollectionController],
    providers: [ProductCollectionService],
})
export class ProductCollectionModule {}
