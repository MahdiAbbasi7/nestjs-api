import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signin(dto: AuthDto): Promise<{
        email: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        hash: string;
        firstName: string | null;
        lastName: string | null;
    }>;
    signup(dto: AuthDto): Promise<{
        email: string;
        id: number;
        firstName: string;
        lastName: string;
    }>;
}
