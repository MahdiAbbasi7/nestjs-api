import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signin(dto: AuthDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        firstName: string | null;
        lastName: string | null;
    }>;
    signup(dto: AuthDto): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
    }>;
}
