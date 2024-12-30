import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
