import { Homura } from "../index";
import type iArtistGetInfoResponse from "./interfaces/getInfo";
import type iArtistGetSimilarResponse from "./interfaces/getSimilar";
import type iArtistGetTopAlbumsResponse from "./interfaces/getTopAlbums";

export default class Artist extends Homura {
  constructor(key: string) {
    super(key);
  }

  async getInfo(artist: string, lang?: string) {
    return this._fetch<iArtistGetInfoResponse>({
      method: "artist.getInfo",
      format: "json",
      artist: artist,
      ...(lang ? { lang: lang } : null),
    });
  }

  async getSimilar(artist: string, limit?: string) {
    return this._fetch<iArtistGetSimilarResponse>({
      method: "artist.getSimilar",
      artist: artist,
      ...(limit ? { limit: limit } : null),
    });
  }

  async getTopAlbums(artist: string, limit?: string, page?: string) {
    return await this._fetch<iArtistGetTopAlbumsResponse>({
      method: "artist.getTopAlbums",
      format: "json",
      artist: artist,
      ...(limit ? { limit: limit } : null),
      ...(page ? { page: page } : null),
    });
  }
}
