import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuid } from 'uuid';


@Injectable()
export class ProductsService {
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
  create(createProductDto: CreateProductDto) {
    if (!createProductDto.productId) createProductDto.productId = uuid();
    createProductDto.productId = uuid();
this.products.push(createProductDto);
return createProductDto;
}

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const productFound = this.products.find(product => product.productId === id);
    if (!productFound) throw new NotFoundException();
    return productFound;
  }

  findByProvider(id: string) {
    const productFound = this.products.filter((product) => product.provider === id);
    if (!productFound) throw new NotFoundException();
    return productFound;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    let product = this.findOne(id);
    this.products = this.products.map((product) => {
      if(product.productId === id) return{
        ...product,
        ...updateProductDto
      }
      return product;
    })
    return { 
      ...product, 
      ...updateProductDto 
    };
  }

  remove(id: string) {
    const { productId } = this.findOne(id)
    this.products = this.products.filter((product) => product.productId !== productId);
    return this.products;
  }
}
