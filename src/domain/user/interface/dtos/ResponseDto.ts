import { UserDto } from "./UserDto";

export interface ResponseDto{
    success: boolean,
    message: string,
    data?: UserDto
}