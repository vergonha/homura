import { Homura } from "../homura";
import type { Period } from "../helpers/interfaces/period";
import type iUserGetFriendsResponse from "./interfaces/getFriends";
import type iUserGetInfoResponse from "./interfaces/getInfo";
import type iUserGetRecentTracksResponse from "./interfaces/getRecentTracks";
import type iUserGetTopAlbumsResponse from "./interfaces/getTopAlbums";
import type iUserGetTopTracksResponse from "./interfaces/getTopTracks";

export default class User extends Homura {
  constructor(key: string) {
    super(key);
  }

  async getFriends(user: string, recenttracks?: string, limit?: string) {
    return await this._fetch<iUserGetFriendsResponse>({
      method: "user.getFriends",
      user: user,
      ...(recenttracks ? { recenttracks: recenttracks } : null),
      ...(limit ? { limit: limit } : null),
    });
  }

  async getInfo(user: string) {
    return await this._fetch<iUserGetInfoResponse>({
      method: "user.getInfo",
      user: user,
    });
  }

  async getRecentTracks(
    user: string,
    limit?: string,
    page?: string,
    from?: string,
    to?: string,
    extended?: string,
  ) {
    return await this._fetch<iUserGetRecentTracksResponse>({
      method: "user.getRecentTracks",
      user: user,
      ...(limit ? { limit: limit } : null),
      ...(page ? { page: page } : null),
      ...(from ? { from: from } : null),
      ...(to ? { to: to } : null),
      ...(extended ? { extended: extended } : null),
    });
  }

  async getTopAlbums(
    user: string,
    period?: Period,
    limit?: string,
    page?: string,
  ) {
    return await this._fetch<iUserGetTopAlbumsResponse>({
      method: "user.getTopAlbums",
      user: user,
      ...(period ? { period: period } : null),
      ...(limit ? { limit: limit } : null),
      ...(page ? { page: page } : null),
    });
  }

  async getTopTracks(
    user: string,
    period?: Period,
    limit?: string,
    page?: string,
  ) {
    return await this._fetch<iUserGetTopTracksResponse>({
      method: "user.getTopTracks",
      user: user,
      ...(period ? { period: period } : null),
      ...(limit ? { limit: limit } : null),
      ...(page ? { page: page } : null),
    });
  }
}
