import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Collection } from './entities/collection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CollectionService {
    constructor(
        @InjectRepository(Collection)
        private readonly collectionRepository: Repository<Collection>,
    ) {}

    async create(createCollectionDto: CreateCollectionDto) {
        const existingCollection = await this.collectionRepository.findOneBy({
            slug: createCollectionDto.slug,
        });

        if (existingCollection) {
            throw new BadRequestException('Collection with this slug already exists');
        }

        const collection = this.collectionRepository.create(createCollectionDto);
        await this.collectionRepository.save(collection);
        return collection;
    }

    async findAll() {
        return this.collectionRepository.find();
    }

    async findOne(id: string) {
        return this.collectionRepository.findOneBy({ id });
    }

    async update(id: string, updateCollectionDto: UpdateCollectionDto) {
        await this.collectionRepository.update(id, updateCollectionDto);
        return this.collectionRepository.findOneBy({ id });
    }

    async remove(id: string) {
        const collection = await this.collectionRepository.findOneBy({ id });
        await this.collectionRepository.delete(id);
        return collection;
    }
}
