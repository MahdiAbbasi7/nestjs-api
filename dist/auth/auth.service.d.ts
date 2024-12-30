import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signin(dto: AuthDto): {
        msg: string;
    };
    signup(dto: AuthDto): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
    }>;
}
