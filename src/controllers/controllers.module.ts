import { Module } from '@nestjs/common';
import { KafkaControllerController } from './kafka-controller/kafka-controller.controller';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [KafkaControllerController],
})
export class ControllersModule {}
