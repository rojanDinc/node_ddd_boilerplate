import { ConnectionOptions } from "typeorm";

export const AppConfig = {
  port: 3000
}

// Add new database connection object if adding a new database
export const PostgresConfig:ConnectionOptions = {
  type: "postgres",
  url: process.env.POSTGRES_URL,
  synchronize: true,
  entities: []
};

export const SqliteConfig: ConnectionOptions = {
  type: 'sqlite',
  database: ':memory:',
  synchronize: true,
  entities: []
}