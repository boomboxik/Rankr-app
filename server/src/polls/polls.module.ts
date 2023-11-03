import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsController } from './polls.contoller';
import { PollsService } from './polls.service';
import { jwtModule, redisModule } from 'src/modules.config';
import { PollsRepository } from './polls.repository';
import { PollsGateway } from './polls.gateway';

@Module({
  imports: [ConfigModule, redisModule, jwtModule],
  controllers: [PollsController],
  providers: [PollsService, PollsRepository, PollsGateway],
})
export class PollsModule {}