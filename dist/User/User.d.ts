import { Homura } from "../index";
import type { Period } from "../helpers/interfaces/period";
import type iUserGetFriendsResponse from "./interfaces/getFriends";
import type iUserGetInfoResponse from "./interfaces/getInfo";
import type iUserGetRecentTracksResponse from "./interfaces/getRecentTracks";
import type iUserGetTopAlbumsResponse from "./interfaces/getTopAlbums";
import type iUserGetTopTracksResponse from "./interfaces/getTopTracks";
export default class User extends Homura {
    constructor(key: string);
    getFriends(user: string, recenttracks?: string, limit?: string): Promise<import("../helpers/errors/iError").default | iUserGetFriendsResponse>;
    getInfo(user: string): Promise<import("../helpers/errors/iError").default | iUserGetInfoResponse>;
    getRecentTracks(user: string, limit?: string, page?: string, from?: string, to?: string, extended?: string): Promise<import("../helpers/errors/iError").default | iUserGetRecentTracksResponse>;
    getTopAlbums(user: string, period?: Period, limit?: string, page?: string): Promise<import("../helpers/errors/iError").default | iUserGetTopAlbumsResponse>;
    getTopTracks(user: string, period?: Period, limit?: string, page?: string): Promise<import("../helpers/errors/iError").default | iUserGetTopTracksResponse>;
}
