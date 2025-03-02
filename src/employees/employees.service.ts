import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class EmployeesService {
  private employees: CreateEmployeeDto[] = [
  {
    id: uuid(),
    name: 'Jonny',
    lastName: 'Doe',
    phoneNumber: '123456789'
  },
  {
    id: uuid(),
    name: 'Jane',
    lastName: 'Meley',
    phoneNumber: '987654321'
  }
]
  create(createEmployeeDto: CreateEmployeeDto) {
  createEmployeeDto.id = uuid();
  this.employees.push(createEmployeeDto);
  return createEmployeeDto;
  }

  findAll() {
    return this.employees;
  }

  findOne(id: string) {
    const employee = this.employees.find(employee => employee.id === id);
    if (!employee) throw new NotFoundException();
    return employee;
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    let employeeTolUpdate = this.findOne(id);
    employeeTolUpdate = {
        ...employeeTolUpdate,
        ...updateEmployeeDto,
    }
    this.employees = this.employees.map((employee) => {
        if (employee.id === id) {
            employee = employeeTolUpdate
        }
        return employee
    })
    return employeeTolUpdate;
}

  remove(id: string) {
    this.findOne(id);
    this.employees = this.employees.filter(employee => employee.id !== id);
    return this.employees;
  }
}
