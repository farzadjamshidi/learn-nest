import { Module } from '@nestjs/common';
import { DummyModule } from './dummy/dummy.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

const appModules = [AuthModule, DummyModule];

@Module({
  imports: [...appModules, CoreModule],
})
export class AppModule {}
