import {
    Controller,
    HttpCode,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(200) 
    async login(@Request() req) {
        const token = await this.authService.login(req.user);
        return {
            message: 'Login success',
            user: req.user,
            token: token,
        };
    }


    //   @Post('register')
    //   async register(
    //     @Body() registerBody: RegisterRequestDto,
    //   ): Promise<RegisterResponseDTO | BadRequestException> {
    //     return await this.authService.register(registerBody);
    //   }
}