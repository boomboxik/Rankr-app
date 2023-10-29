import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsController } from './polls.contoller';
import { PollsService } from './polls.service';
import { RedisModule } from 'nestjs-redis';
import { redisModule } from 'src/modules.config';

@Module({
  imports: [ConfigModule, redisModule],
  controllers: [PollsController],
  providers: [],
})
export class PollsModule {}