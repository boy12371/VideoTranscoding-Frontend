import { Original } from "./original.model";

export interface User {
    userId: number;
    email: string;
    nick: string;
    photo?: string;
    roles?: string[];
    listOriginal: Array<Original>;
}