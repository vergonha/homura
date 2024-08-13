import type iLastFMError from "./helpers/errors/iError";

export class Homura {
  private readonly _URL: string;
  private readonly _ApiKey: string;

  constructor(key: string) {
    this._URL = "https://ws.audioscrobbler.com/2.0/?";
    this._ApiKey = key;
  }

  protected async _fetch<T>(_parameters: Record<string, string>) {
    _parameters.format = "json";
    _parameters.authocorrect = "1";
    _parameters.api_key = this._ApiKey;

    const parameters = this.generateParameters(_parameters);
    const response = await fetch(this._URL + parameters, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if ("error" in data) return data as iLastFMError;

    return data as T;
  }

  private generateParameters(parameters: Record<string, string>): string {
    return new URLSearchParams(parameters).toString();
  }
}

export { default as Artist } from "./Artist/Artist";
export { default as Album } from "./Album/Album";
export { default as User } from "./User/User";
