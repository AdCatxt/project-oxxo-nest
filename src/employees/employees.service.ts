import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>
  ){}
  async create(createEmployeeDto: CreateEmployeeDto) {
  const employee = await this.employeeRepository.save(createEmployeeDto)
  return employee
  }

  findAll() {
    return this.employeeRepository.find();
  }

  findOne(id: string) {
    const employee = this.employeeRepository.findOneBy({
      employeeId: id
    });
    return employee;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    const employeeToUpdate = await this.employeeRepository.findOne({ where: { employeeId: id } });
      if (!employeeToUpdate) {
      throw new Error(`Employee with ID ${id} not found`);
    }
      const updatedEmployee = this.employeeRepository.merge(employeeToUpdate, updateEmployeeDto);
      return await this.employeeRepository.save(updatedEmployee);
  }

  remove(id: string) {
    this.employeeRepository.delete({
      employeeId: id
    });
    return `Employee with id ${id} has been deleted`;
  }
}
