import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatModule } from './cat/cat.module';

@Module({
  controllers: [AppController],
  providers: [],
  imports: [CatModule],
})
export class AppModule {}
