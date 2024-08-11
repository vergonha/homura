import type iLastFMError from "./helpers/errors/iError";
export declare class Homura {
    private readonly _URL;
    private readonly _ApiKey;
    constructor(key: string);
    protected _fetch<T>(_parameters: Record<string, string>): Promise<iLastFMError | T>;
    private generateParameters;
}
export { default as Artist } from "./Artist/Artist";
export { default as Album } from "./Album/Album";
export { default as User } from "./User/User";
