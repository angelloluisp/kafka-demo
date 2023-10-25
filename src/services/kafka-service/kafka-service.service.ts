import { Injectable } from '@nestjs/common';
import { Consumer, Kafka, Producer } from 'kafkajs';

@Injectable()
export class KafkaServiceService {
  private kafka: Kafka;
  private producer: Producer;
  private consumer: Consumer;

  constructor() {
    this.kafka = new Kafka({
      clientId: 'my-nest-app',
      brokers: ['104.131.2.243:9092'],
    });
    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: 'my-group' });
  }

  async datasend(topic: string, message: string) {
    await this.producer.connect();
    await this.producer.send({
      topic,
      messages: [{ value: message }],
    });
  }

  async consumeMessages() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: 'mi_tema' }); // Reemplaza con el nombre de tu topic

    await this.consumer.run({
      eachMessage: async ({ message }) => {
        console.log({
          value: message.value.toString(),
        });
      },
    });
  }
}
