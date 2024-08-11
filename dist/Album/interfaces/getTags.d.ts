export default interface iAlbumGetTagsResponse {
    tags: Tags;
}
interface Tags {
    tag: Tag[];
    "@attr": Attr;
}
interface Tag {
    name: string;
    url: string;
}
interface Attr {
    artist: string;
    track: string;
}
export {};
