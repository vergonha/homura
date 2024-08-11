export default interface iUserGetTopTracksResponse {
    toptracks: Toptracks;
}
interface Toptracks {
    track: Track[];
    "@attr": Attr2;
}
interface Track {
    streamable: Streamable;
    mbid: string;
    name: string;
    image: Image[];
    artist: Artist;
    url: string;
    duration: string;
    "@attr": Attr;
    playcount: string;
}
interface Streamable {
    fulltrack: string;
    "#text": string;
}
interface Image {
    size: string;
    "#text": string;
}
interface Artist {
    url: string;
    name: string;
    mbid: string;
}
interface Attr {
    rank: string;
}
interface Attr2 {
    user: string;
    totalPages: string;
    page: string;
    perPage: string;
    total: string;
}
export {};
