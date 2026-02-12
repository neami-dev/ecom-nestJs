import { Module } from '@nestjs/common';
import { ProductVariantService } from './product-variant.service';
import { ProductVariantController } from './product-variant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductVariant } from './entities/product-variant.entity';
import { Product } from 'src/product/entities/product.entity';
import { Color } from 'src/color/entities/color.entity';
import { Size } from 'src/size/entities/size.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProductVariant, Product, Color, Size])],
    controllers: [ProductVariantController],
    providers: [ProductVariantService],
})
export class ProductVariantModule { }
