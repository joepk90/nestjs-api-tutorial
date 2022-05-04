import { Controller, Post } from "@nestjs/common";
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    // dependancy injection: inject the AuthService module
    constructor(private AuthService: AuthService) {
    }

    // POST /auth/signup/
    @Post('signup')
    signup() {
        // return { msg: 'Signed Up' }; // nestjs will handle returned data type for you.
        return 'Signed Up'
    }

    // POST /auth/signin/
    @Post('signin')
    signin() {
        return 'Signed In'
    }

}