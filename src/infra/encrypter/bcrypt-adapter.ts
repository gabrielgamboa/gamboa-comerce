import bcrypt from 'bcrypt';
import { Encrypter } from "../../application/ports/encrypter";

export class BcryptAdapter implements Encrypter {
    private _salt: number;

    constructor(salt: number) {
        this._salt = salt
    }

    encrypt(password: string): Promise<string> {
        return bcrypt.hash(password, this._salt)
    }
}