export default interface iArtistGetTopAlbumsResponse {
    topalbums: Topalbums;
}
interface Topalbums {
    album: Album[];
    "@attr": Attr;
}
interface Album {
    name: string;
    playcount: number;
    mbid?: string;
    url: string;
    artist: Artist;
    image: Image[];
}
interface Artist {
    name: string;
    mbid: string;
    url: string;
}
interface Image {
    "#text": string;
    size: string;
}
interface Attr {
    artist: string;
    page: string;
    perPage: string;
    totalPages: string;
    total: string;
}
export {};
