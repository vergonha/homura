export default interface iAlbumGetAlbumResponse {
    album: Album;
}
interface Album {
    artist: string;
    mbid: string;
    tags: Tags;
    playcount: string;
    image: Image[];
    tracks: Tracks;
    url: string;
    name: string;
    listeners: string;
    wiki: Wiki;
}
interface Tags {
    tag: Tag[];
}
interface Tag {
    url: string;
    name: string;
}
interface Image {
    size: string;
    "#text": string;
}
interface Tracks {
    track: Track[];
}
interface Track {
    streamable: Streamable;
    duration: number;
    url: string;
    name: string;
    "@attr": Attr;
    artist: Artist;
}
interface Streamable {
    fulltrack: string;
    "#text": string;
}
interface Attr {
    rank: number;
}
interface Artist {
    url: string;
    name: string;
    mbid: string;
}
interface Wiki {
    published: string;
    summary: string;
    content: string;
}
export {};
