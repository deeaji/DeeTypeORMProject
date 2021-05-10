import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({ name: "todo" })
export class Todo {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar", length: 200 })
  title: string;

  @Column({ type: "varchar", length: 200 })
  message: string;

  @ManyToOne(type => User, user => user.todo)
  user: Promise<User>;

}
