export default interface iAlbumGetTopTagsResponse {
    toptags: Toptags;
}
interface Toptags {
    tag: Tag[];
    "@attr": Attr;
}
interface Tag {
    count: number;
    name: string;
    url: string;
}
interface Attr {
    artist: string;
    track: string;
}
export {};
