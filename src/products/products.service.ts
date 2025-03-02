import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}
  private products: CreateProductDto[] = [
    {
      productId: uuid(),
      productName: 'Sabritas Limón',
      price: 20,
      countSeal: 30,
      provider: uuid()
    },
    {
      productId: uuid(),
      productName: 'Seven',
      price: 20,
      countSeal: 100,
      provider: uuid() 
    },
    {
      productId: uuid(),
      productName: 'Coca Cola',
      price: 20,
      countSeal: 100,
      provider: uuid()
    }
  ]
  create (createProductDto: CreateProductDto) {
    const product = this.productRepository.save(createProductDto);
return product;
}

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    const product = this.productRepository.findOneBy({
      productId: id 
    })
    if (!product) throw new NotFoundException(); 
    return product;
  }

  findByProvider(id: string) {
    const productFound = this.products.filter((product) => product.provider === id);
    if (!productFound) throw new NotFoundException();
    return productFound;
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
