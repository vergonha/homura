import { Homura } from "../index";
import type iAlbumGetAlbumResponse from "./interfaces/getInfo";
import type iAlbumGetTagsResponse from "./interfaces/getTags";
import type iAlbumGetTopTagsResponse from "./interfaces/getTopTags";
import type iAlbumSearchResponse from "./interfaces/search";

export default class Album extends Homura {
  constructor(key: string) {
    super(key);
  }

  async getInfo(artist: string, album: string, lang?: string) {
    return await this._fetch<iAlbumGetAlbumResponse>({
      artist: artist,
      album: album,
      method: "album.getInfo",
      ...(lang ? { lang: lang } : {}),
    });
  }

  async getTags(artist: string, album: string, username: string) {
    return await this._fetch<iAlbumGetTagsResponse>({
      artist: artist,
      album: album,
      username: username,
      method: "album.getTags",
    });
  }

  async getTopTags(artist: string, album: string) {
    return await this._fetch<iAlbumGetTopTagsResponse>({
      artist: artist,
      album: album,
      method: "album.getTopTags",
    });
  }

  async search(album: string, limit?: string, page?: string) {
    return await this._fetch<iAlbumSearchResponse>({
      format: "json",
      album: album,
      method: "album.search",
      ...(limit ? { limit: limit } : null),
      ...(page ? { page: page } : null),
    });
  }
}
