import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async findOne(login: any): Promise<User | undefined> {
    console.log('Pesquisando', login)
    return await this.userRepository.findOne({ user: login.user, password: login.password });    
  }
}