import { MigrationInterface, QueryRunner, TableColumn, TableCheck } from "typeorm";

export class addRoleColumnToUsers1620527552717 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const usersTable = await queryRunner.getTable("users")
    const roleColumn = new TableColumn({ name: "role", type: "int" })
    await queryRunner.addColumn(usersTable, roleColumn)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const usersTable = await queryRunner.getTable("users")
    await queryRunner.dropColumn(usersTable, "role")
  }

}
