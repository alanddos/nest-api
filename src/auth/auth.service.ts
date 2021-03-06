import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
      private readonly usersService: UsersService,
      private readonly jwtService: JwtService
      ) {}

  async validateUser(login: string, pass: string): Promise<any> {
    console.log('Validando pelo metodo local',pass)
    const user = await this.usersService.findOne(login);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(login: any) {
    console.log('dados de login',login)
    const user = await this.usersService.findOne(login);
    if (user){
      const payload = { username: user.name, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    if (!user) {
      throw new UnauthorizedException();
    }
  }
}