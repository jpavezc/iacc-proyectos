import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './entity/user.entity';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { ConfigModule } from '@nestjs/config';
import { BackupController } from './controller/backup.controller';
import { BackupService } from './service/backup.service';
import { BitacoraEntity } from './entity/bitacora.entity';
import { BitacoraController } from './controller/bitacora.controller';
import { BitacoraService } from './service/bitacora.service';


@Module({
  imports:
    [ConfigModule.forRoot(
      {envFilePath: 'C:/Users/juapa/OneDrive/Documentos/IACC/INTEGRACION DE SOFTWARE/tarea_1/iacc-tarea1/config'},
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: +process.env.PORT,
      username: process.env.DB_USER,
      password: process.env.PGPASS,
      database: process.env.DB_NAME,
      synchronize: true,
      autoLoadEntities: true

    }),
    TypeOrmModule.forFeature([
      UserEntity,
      BitacoraEntity
    ]),
    HttpModule
  ],
  controllers: [AppController, UserController, BackupController, BitacoraController],
  providers: [AppService, UserService, BackupService, BitacoraService],
})
export class AppModule {}