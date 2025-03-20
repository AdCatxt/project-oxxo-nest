import { applyDecorators } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";

export const ApiAuth = (() => {
    return applyDecorators(
        ApiResponse({
          status: 401,
          description: 'Used invalid token'
        }),
        ApiResponse({
          status: 403,
          description: 'Inapropied role'
        }),
        ApiResponse({
          status: 500,
          description: 'Server error'
        })
    )
})