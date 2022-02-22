export class UserToken {
    constructor(private _accessToken:string) {}

    get accessToken(): string {
        return this._accessToken;
    }
}
