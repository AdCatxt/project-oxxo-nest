import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  create (createProductDto: CreateProductDto) {
    const product = this.productRepository.save(createProductDto);
return product;
}

  findAll() {
    return this.productRepository.find()
  }

  findOne(id: string) {
    const product = this.productRepository.findOneBy({
      productId: id 
    })
    if (!product) throw new NotFoundException(); 
    return product;
  }

  findByProvider(id: string) {
    this.productRepository.findBy({
      provider: {
        providerId: id
      }
    })
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const roductToUpdate = await this.productRepository.preload({
      productId: id,
      ...updateProductDto
    });
    if (!roductToUpdate) throw new NotFoundException();
    this.productRepository.save(roductToUpdate);
    return roductToUpdate;
  }

  remove(id: string) {
    this.findOne(id);
    this.productRepository.delete({
      productId: id
    });
    return {
      message: `Product with id ${id} deleted`
    }
  }
}
