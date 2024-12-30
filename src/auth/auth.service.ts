import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable()
export class AuthService{
    constructor(private prisma:PrismaService){}
    signin(dto: AuthDto){
        return { msg: 'signin' };
    }

    signup(dto: AuthDto){
        return { msg: 'signup' };
    }
}