import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Bitacora')
export class BitacoraEntity {
    @PrimaryGeneratedColumn() id:string;

    @Column()
    fecha: Date;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    ambienteAfectado: string;

    @Column()
    inputSoftware: string;

    @Column()
    inputUsuario: string;

    @Column()
    inputEquipo: string;

    @Column()
    inputCargo: string;

}
