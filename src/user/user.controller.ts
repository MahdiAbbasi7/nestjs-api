import { Controller, Get, UseGuards} from '@nestjs/common';
import { GetUser } from '../auth/decorators';
import { JwtGuard } from 'src/auth/guard';
import { User } from '@prisma/client';


@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    @Get('me')
    getMe(@GetUser() user: User, @GetUser('email') email:string){
        // and also we can get the email address of user.
        return user
    }

}
