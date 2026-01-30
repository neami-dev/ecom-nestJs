import {
    BadRequestException,
    ValidationPipe,
} from '@nestjs/common';

export const CustomValidationPipe = new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    exceptionFactory: (errors) => {
        const formattedErrors = {};

        errors.forEach((error) => {
            const constraints = Object.values(error.constraints ?? {});
            formattedErrors[error.property] = constraints[0];
        });

        return new BadRequestException({
            message: 'Validation failed',
            errors: formattedErrors,
        });
    },
});
