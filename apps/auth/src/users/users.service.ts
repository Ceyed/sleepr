import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly UsersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.UsersRepository.create(createUserDto);
  }
}
