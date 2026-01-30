import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Repository } from 'typeorm';
import { Gender } from './entities/gender.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GenderService {
  constructor(@InjectRepository(Gender) private readonly genderRepository: Repository<Gender>) { }

  async create(createGenderDto: CreateGenderDto) {
    const existingGender = await this.ifExistsGender(createGenderDto.slug);
    if (existingGender) {
      throw new BadRequestException('Gender with this slug already exists');
    }

    const gender = this.genderRepository.create(createGenderDto);
    await this.genderRepository.save(gender);
    return gender;

  }

  findAll() {
    return `This action returns all gender`;
  }
  async ifExistsGender(slug: string): Promise<boolean> {
    const gender = await this.genderRepository.findOne({ where: { slug } });
    return gender ? true : false;
  }

  findOne(id: number) {
    return `This action returns a #${id} gender`;
  }

  update(id: number, updateGenderDto: UpdateGenderDto) {
    return `This action updates a #${id} gender`;
  }

  remove(id: number) {
    return `This action removes a #${id} gender`;
  }
}
