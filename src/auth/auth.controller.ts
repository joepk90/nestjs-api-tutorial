import { Controller, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    // dependancy injection: inject the AuthService module
    constructor(private AuthService: AuthService) {
    }

    // POST /auth/signup/
    @Post('signup')
    signup(@Req() req: Request) {
        console.log(req.body);
        return this.AuthService.signup();
    }

    // POST /auth/signin/
    @Post('signin')
    signin() {
        return this.AuthService.signin();
    }

}