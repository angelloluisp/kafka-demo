import { Controller, Get } from '@nestjs/common';
import { Consumer, Kafka, Producer } from 'kafkajs';
import { KafkaServiceService } from '../../services/kafka-service/kafka-service.service';

@Controller('kafkademo')
export class KafkaControllerController {
  constructor(private kafkaServiceService: KafkaServiceService) {}

  @Get('sendmessage')
  async send() {
    console.log('hola');
    await this.kafkaServiceService.datasend('mi_tema', 'mesaje a mi kafka');
  }

  async subscribe(): Promise<void> {
    console.log('');
  }
}
