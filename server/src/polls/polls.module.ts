import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsController } from './polls.contoller';
import { PollsService } from './polls.service';
import { redisModule } from 'src/modules.config';
import { PollsRepository } from './polls.repository';

@Module({
  imports: [ConfigModule, redisModule],
  controllers: [PollsController],
  providers: [PollsService, PollsRepository],
})
export class PollsModule {}