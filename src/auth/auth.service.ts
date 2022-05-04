import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {

    signup() {
        // return { msg: 'Signed Up' }; // nestjs will handle returned data type for you.
        return 'Signed Up'
    }

    signin() {
        return 'Signed In'
    }

}