export interface User {
    userId: number;
    email: string;
    nick: string;
    photo?: string;
    roles?: string[];
}