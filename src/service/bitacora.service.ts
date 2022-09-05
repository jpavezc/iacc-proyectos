import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BitacoraEntity } from './../entity/bitacora.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BitacoraService{

    constructor(
        @InjectRepository(BitacoraEntity)
        private bitacoraRepository: Repository<BitacoraEntity>,
    ) {}

    findAll(): Promise<BitacoraEntity[]> {
        return this.bitacoraRepository.find();
      }

    async save(bitacora):Promise<BitacoraEntity[]>{
        console.log("🚀 ~ file: user.service.ts ~ line 27 ~ UserService ~ save ~ user", bitacora)
        return this.bitacoraRepository.save(bitacora);
      }



}
