import { Injectable } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Size } from './entities/size.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SizeService {
    constructor(@InjectRepository(Size) private readonly sizeRepository: Repository<Size>) { }

    async create(createSizeDto: CreateSizeDto) {
        const size = this.sizeRepository.create(createSizeDto);
        await this.sizeRepository.save(size);
        return size;
    }

    async findAll() {
        return this.sizeRepository.find();
    }

    async findOne(id: string) {
        return this.sizeRepository.findOneBy({ id });
    }

    async update(id: string, updateSizeDto: UpdateSizeDto) {
        await this.sizeRepository.update(id, updateSizeDto);
        return this.sizeRepository.findOneBy({ id });
    }

    async remove(id: string) {
        const size = await this.sizeRepository.findOneBy({ id });
        await this.sizeRepository.delete(id);
        return size;
    }
}
