import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { userDto } from 'src/dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) { }

  @Get('findAll')
  findAll(): any {
    return this.userService.findAll();
  }

  @Post('save')
  save(@Body() createUserDto : userDto): any {
    console.log("🚀 ~ file: user.controller.ts ~ line 17 ~ UserController ~ save ~ createUserDto", createUserDto)
    return this.userService.save(createUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: userDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Get(':id')
  findOne(@Param() params): any {
    console.log(params.id);
    return this.userService.findOne(params.id);
  }



}
