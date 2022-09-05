import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
    @PrimaryGeneratedColumn() id:string;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;

    @Column()
    user: string;

    @Column()
    password: string;
  
    @Column({ default: true })
    isActive: boolean;

    @Column()
    perfil: string;
}
