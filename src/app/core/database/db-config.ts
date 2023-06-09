import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import entities from './entities';
import config from '../../../config';

const dbConfig: TypeOrmModuleOptions = {
  entities,
  type: 'postgres',
  host: config.get('db.host'),
  port: config.get('db.port'),
  username: config.get('db.username'),
  password: config.get('db.password'),
  database: config.get('db.name'),
  synchronize: false,
  migrationsRun: true,
  migrations: ['dist/migrations/**/*.js'],
};

export { dbConfig };
