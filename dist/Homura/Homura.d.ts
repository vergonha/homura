import iLastFMError from "../helpers/errors/iError";
export default class Homura {
    private readonly _URL;
    private readonly _ApiKey;
    constructor(key: string);
    protected _fetch<T>(_parameters: Record<string, string>): Promise<iLastFMError | T>;
    private generateParameters;
}
