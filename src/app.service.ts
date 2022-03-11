import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'You can go to graphql to use playground!';
  }

  // getHelloName(name: string): string {
  //   return `Hello ${name}!`;
  // }
}
