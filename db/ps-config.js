const dotenv = require('dotenv').config();

module.exports = {
  development: {
    database: process.env.DEVELOPMENT_DB_NAME,
    dialect: 'postgres',
    host: process.env.DEVELOPMENT_DB_HOST,
    migrationStorage: process.env.DB_MIGRATION_STORAGE,
    migrationStorageTableName: process.env.DB_MIGRATION_STORAGE_TABLE,
    password: process.env.DEVELOPMENT_DB_PASSWORD,
    port: process.env.DEVELOPMENT_DB_PORT,
    seederStorage: process.env.DB_SEEDER_STORAGE,
    seederStorageTableName: process.env.DB_SEEDER_STORAGE_TABLE,
    username: process.env.DEVELOPMENT_DB_USER,
  },
  test: {
    database: process.env.TESTING_DB_NAME,
    dialect: 'postgres',
    host: process.env.TESTING_DB_HOST,
    migrationStorage: process.env.DB_MIGRATION_STORAGE,
    migrationStorageTableName: process.env.DB_MIGRATION_STORAGE_TABLE,
    password: process.env.TESTING_DB_PASSWORD,
    port: process.env.TESTING_DB_PORT,
    seederStorage: process.env.DB_SEEDER_STORAGE,
    seederStorageTableName: process.env.DB_SEEDER_STORAGE_TABLE,
    username: process.env.TESTING_DB_USER,
  },
  production: {
    database: process.env.PRODUCTION_DB_NAME,
    dialect: 'postgres',
    host: process.env.PRODUCTION_DB_HOST,
    migrationStorage: process.env.DB_MIGRATION_STORAGE,
    migrationStorageTableName: process.env.DB_MIGRATION_STORAGE_TABLE,
    password: process.env.PRODUCTION_DB_PASSWORD,
    port: process.env.PRODUCTION_DB_PORT,
    seederStorage: process.env.DB_SEEDER_STORAGE,
    seederStorageTableName: process.env.DB_SEEDER_STORAGE_TABLE,
    username: process.env.PRODUCTION_DB_USER,
  },
};