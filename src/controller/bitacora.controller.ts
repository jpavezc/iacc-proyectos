import { Body, Controller, Get, Post } from '@nestjs/common';
import { bitacoraDto } from 'src/dto/bitacora.dto';
import { BitacoraService } from './../service/bitacora.service';


@Controller('bitacora')
export class BitacoraController {

  constructor(private bitacoraService: BitacoraService) { }

  @Get('findAll')
  findAll(): any {
    return this.bitacoraService.findAll();
  }

  @Post('save')
  save(@Body() createBitacoraDto : bitacoraDto): any {
    console.log("🚀 ~ file: user.controller.ts ~ line 17 ~ UserController ~ save ~ createUserDto", createBitacoraDto)
    return this.bitacoraService.save(createBitacoraDto);
  }

}
