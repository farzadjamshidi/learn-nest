import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './database/db-config';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig)],
})
export class CoreModule {}
