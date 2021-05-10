import { getRepository } from "typeorm";
import { User } from "./entity/User";
import { Todo } from "./entity/Todo";
// import tester from "aji-test-publish";
const myPkg = require('aji-test-publish');


export const Bootstrap = async () => {
  const userRepo = getRepository(User);
  const user = userRepo.create({ firstName: "dupe", lastName: "aji", age: 44 })
  await userRepo.save(user).catch((err) => {
    console.log('xxxx222', err)
  });


  const todoRepo = getRepository(Todo);
  const todo = new Todo;
  todo.title = "3rd Test Title";
  todo.message = "3rd test message";
  todo.user = Promise.resolve(user);
  await todoRepo.save(todo).catch((err) => {
    console.log('xxxx222', err)
  });


}

export const FindData = async () => {
  const userRepo = getRepository(User);
  const user = await userRepo.findOne({ where: { firstName: "dupe" } })
    // const users = await userRepo.findOneOrFail({ where: { firstName: "dupe" } })
    // const users = await userRepo.find()
    // const users = await userRepo.find({ where: { firstName: "dupe" } })
    .catch((err) => {
      console.log('findxxx', err)
    });
  if (user)
    console.log('find users', await user.todo);


}

export const testAPI = async () => {
  try {
    const user = await myPkg.sum(55, 20)
    if (user)
      console.log('find users', user);
  }
  catch (err) {
    console.log('findxxx', err)
  };
}
