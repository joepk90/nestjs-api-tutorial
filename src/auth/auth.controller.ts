import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {

    // dependancy injection: inject the AuthService module
    constructor(private AuthService: AuthService) {
    }


    // POST /auth/signup/
    @Post('signup')
    // dto = Data Transfer Object
    signup(@Body() dto: AuthDto) {
        return this.AuthService.signup(dto);
    }

    // POST /auth/signin/
    @Post('signin')
    signin() {
        return this.AuthService.signin();
    }

}