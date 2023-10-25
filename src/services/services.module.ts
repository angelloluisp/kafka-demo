import { Module } from '@nestjs/common';
import { KafkaServiceService } from './kafka-service/kafka-service.service';

@Module({
  imports: [],
  exports: [KafkaServiceService],
  providers: [KafkaServiceService],
})
export class ServicesModule {}
