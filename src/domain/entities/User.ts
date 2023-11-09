import { Base } from "./Base";

export interface User extends Base {
    name: string;
    email: string;
    password: string;
}