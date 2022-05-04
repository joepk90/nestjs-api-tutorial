import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from "./dto";
import * as argon from 'argon2';

@Injectable({})
export class AuthService {

    constructor(private prismaService: PrismaService) { }

    signup(dto: AuthDto) {
        // return { msg: 'Signed Up' }; // nestjs will handle returned data type for you.

        // TODO
        // generate the password hash
        // save the new user in the db
        // return saved user
        return 'Signed Up'
    }

    signin() {
        return 'Signed In'
    }

}