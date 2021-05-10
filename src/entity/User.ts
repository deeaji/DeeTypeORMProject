import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Todo } from "./Todo";

@Entity({ name: "users" })
export class User {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar", length: 200 })
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany(type => Todo, todo => todo.user)
  todo: Promise<Todo[]>;

  @Column({ type: "int" })
  role: number;

}
