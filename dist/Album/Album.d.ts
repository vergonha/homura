import { Homura } from "../index";
import type iAlbumGetAlbumResponse from "./interfaces/getInfo";
import type iAlbumGetTagsResponse from "./interfaces/getTags";
import type iAlbumGetTopTagsResponse from "./interfaces/getTopTags";
import type iAlbumSearchResponse from "./interfaces/search";
export default class Album extends Homura {
    constructor(key: string);
    getInfo(artist: string, album: string, lang?: string): Promise<import("../helpers/errors/iError").default | iAlbumGetAlbumResponse>;
    getTags(artist: string, album: string, username: string): Promise<import("../helpers/errors/iError").default | iAlbumGetTagsResponse>;
    getTopTags(artist: string, album: string): Promise<import("../helpers/errors/iError").default | iAlbumGetTopTagsResponse>;
    search(album: string, limit?: string, page?: string): Promise<import("../helpers/errors/iError").default | iAlbumSearchResponse>;
}
