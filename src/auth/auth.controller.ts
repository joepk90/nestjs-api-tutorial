import { Controller } from "@nestjs/common";
import { AuthService } from './auth.service';

@Controller({})
export class AuthController {

    // dependancy injection: inject the AuthService module
    constructor(private AuthService: AuthService) {

    }
}