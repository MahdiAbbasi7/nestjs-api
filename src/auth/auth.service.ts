import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";


@Injectable()
export class AuthService{
    constructor(private prisma:PrismaService){}
    signin(dto: AuthDto){
        return { msg: 'signin' };
    }

    async signup(dto: AuthDto){
        const hash = await argon.hash(dto.password)

        const user = await this.prisma.user.create({
            data: {
                email:dto.email,
                hash: hash
            },
            select:{
                id:true,
                email:true,
                firstName:true,
                lastName:true,
            }
        });
    
        return user;
    }
}