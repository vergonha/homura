import { Homura } from "../homura";
import type iArtistGetInfoResponse from "./interfaces/getInfo";
import type iArtistGetSimilarResponse from "./interfaces/getSimilar";
import type iArtistGetTopAlbumsResponse from "./interfaces/getTopAlbums";
export default class Artist extends Homura {
    constructor(key: string);
    getInfo(artist: string, lang?: string): Promise<import("../helpers/errors/iError").default | iArtistGetInfoResponse>;
    getSimilar(artist: string, limit?: string): Promise<import("../helpers/errors/iError").default | iArtistGetSimilarResponse>;
    getTopAlbums(artist: string, limit?: string, page?: string): Promise<import("../helpers/errors/iError").default | iArtistGetTopAlbumsResponse>;
}
