import { applyDecorators, UseGuards } from "@nestjs/common";
import { AuthGuard } from "../guards/auth.guard";
import { ROLES } from "../constants/roles.constants";
import { Roles } from "./roles.decorator";
import { RolesGuard } from "../guards/roles.guard"; 

export const Auth = (...roles: ROLES[]) => {
    roles.push(ROLES.ADMIN);
    return applyDecorators(
        Roles(roles),
        UseGuards(AuthGuard, RolesGuard),
    )
}