import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from "./dto";

@Injectable({})
export class AuthService {

    constructor(private prismaService: PrismaService) { }

    signup(dto: AuthDto) {
        // return { msg: 'Signed Up' }; // nestjs will handle returned data type for you.
        return 'Signed Up'
    }

    signin() {
        return 'Signed In'
    }

}