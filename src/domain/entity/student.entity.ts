import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 127})
  name: string;

  constructor(name?: string) {
    this.name = name;
  }
}