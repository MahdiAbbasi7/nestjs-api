import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
