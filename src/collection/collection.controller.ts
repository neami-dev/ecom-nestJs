import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Controller('collections')
export class CollectionController {
    constructor(private readonly collectionService: CollectionService) {}

    @Post()
    async create(@Body() createCollectionDto: CreateCollectionDto) {
        const collection = await this.collectionService.create(createCollectionDto);
        return {
            message: 'Collection created successfully',
            data: collection,
        };
    }

    @Get()
    async findAll() {
        const collections = await this.collectionService.findAll();
        return {
            message: 'All collections fetched successfully',
            data: collections,
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const collection = await this.collectionService.findOne(id);
        return {
            message: `Collection with id ${id} fetched successfully`,
            data: collection,
        };
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateCollectionDto: UpdateCollectionDto) {
        const collection = await this.collectionService.update(id, updateCollectionDto);
        return {
            message: `Collection with id ${id} updated successfully`,
            data: collection,
        };
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const collection = await this.collectionService.remove(id);
        return {
            message: `Collection with id ${id} deleted successfully`,
            data: collection,
        };
    }
}
