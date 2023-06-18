import { Module } from '@nestjs/common';
import { DummyModule } from './dummy/dummy.module';
import { CoreModule } from './core/core.module';

const appModules = [DummyModule];

@Module({
  imports: [...appModules, CoreModule],
})
export class AppModule {}
