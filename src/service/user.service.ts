import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<UserEntity> {
    console.log(id);
    return this.userRepository.findOneBy({ id });
  }

  async save(user):Promise<UserEntity[]>{
    console.log("🚀 ~ file: user.service.ts ~ line 27 ~ UserService ~ save ~ user", user)
    return this.userRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    console.log("🚀 ~ file: user.service.ts ~ line 23 ~ UserService ~ remove ~ id", id)
    await this.userRepository.delete(id);
  }

  async update(id, user){
    console.log("🚀 ~ file: user.service.ts ~ line 33 ~ UserService ~ update ~ id, user", id, user)
    return this.userRepository.update(id, user);
  }


}
