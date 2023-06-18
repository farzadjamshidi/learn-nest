import { Module } from '@nestjs/common';
import { DummyModule } from './dummy/dummy.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [DummyModule, CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
