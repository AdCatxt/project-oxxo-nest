import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Manager } from 'src/managers/entities/manager.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
    @InjectRepository(Manager)
    private managerRepository: Repository<Manager>,
  ){}

  create(createLocationDto: CreateLocationDto) {
    return this.locationRepository.save(createLocationDto);
  }

  findAll() {
    return this.locationRepository.find();
  }

  findOne(id: number) {
    const location = this.locationRepository.findOneBy({
      locationId: id,
    });
    if(!location) throw new NotFoundException();
    return location;
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    // 1. Eliminar la relación location del manager
    await this.managerRepository
      .createQueryBuilder()
      .update()
      .set({ location: undefined }) 
      .where("locationId = :id", { id })
      .execute();
  
    // 2. Buscar y actualizar la locación
    const location = await this.locationRepository.preload({
      locationId: id,
      ...updateLocationDto,
    });
  
    if (!location) throw new BadRequestException("No se encuentra la locación");
  
    const savedLocation = await this.locationRepository.save(location);
  
    // 3. Actualizar la relación en Manager
    const manager = await this.managerRepository.preload({
      managerId: updateLocationDto.manager,
      location: savedLocation,
    });
  
    if (!manager) throw new BadRequestException("No se encuentra el manager");
  
    await this.managerRepository.save(manager);
  
    return savedLocation;
  }
  

  remove(id: number) {
    return this.locationRepository.delete({
      locationId: id,
    });
  }
}