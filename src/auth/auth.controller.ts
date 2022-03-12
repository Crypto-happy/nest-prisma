import { Controller,Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupInput } from './dto/signup.input';
import { Token } from './models/token.model';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/signup")
  signUp(@Body() input:SignupInput ): Promise<Token> {
    return this.authService.createUser(input);
  }

  @Post("/login")
  logIn(@Request() req ): Promise<Token>{
      return this.authService.login(req.body.email, req.body.password)
  }

  @Post("/refreshtoken")
  refreshToken(@Body() input:{token:string} ){
      return this.authService.refreshToken(input.token)
  }

}
