import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { EmailAddress } from 'graphql-scalars/mocks';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  getUserProfile(@Request() req): Promise<User> {
    req.user.password = null;
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Post('/updateuser')
  updateUser(@Body() newUserData: UpdateUserInput, @Request() req) {
    return this.usersService.updateUser(req.user.id, newUserData);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/changePassword')
  changePassword(@Body() changePassword: ChangePasswordInput, @Request() req) {
    return this.usersService.changePassword(req.user.id, req.user.password, changePassword);
  }


}
