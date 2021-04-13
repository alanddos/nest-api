import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  user: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column()
  isActive: boolean;
}