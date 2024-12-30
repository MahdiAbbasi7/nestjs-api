import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";


@Injectable()
export class AuthService{
    constructor(private prisma:PrismaService){}
    async signin(dto: AuthDto){
        // find the user
        // if user is exists throw an error
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        })
        if (!user){
            throw new ForbiddenException('Credential incorrect.');
        };
        
        // compare the password
        // if exists throw an error
        const pwMatches = await argon.verify(
            user.hash,
            dto.password,
        );
        if (!pwMatches){
            throw new ForbiddenException('Credential incorrect.');
        }

        // send back the user
        delete user.hash;
        return user

    }

    async signup(dto: AuthDto){
        const hash = await argon.hash(dto.password)
        
        try{
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

        } catch(error) {
            if (error instanceof PrismaClientKnownRequestError){
                if (error.code === 'P2002'){
                    throw new ForbiddenException(
                        'Credential taken.'
                    );
                }
            }
            throw error;
        }
        
    }
}
