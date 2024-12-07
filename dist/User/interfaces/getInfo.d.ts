export default interface iUserGetInfoResponse {
    user: User;
}
interface User {
    name: string;
    age: string;
    subscriber: string;
    realname: string;
    bootstrap: string;
    playcount: string;
    artist_count: string;
    playlists: string;
    track_count: string;
    album_count: string;
    image: Image[];
    registered: Registered;
    country: string;
    gender: string;
    url: string;
    type: string;
}
interface Image {
    size: string;
    "#text": string;
}
interface Registered {
    unixtime: string;
    "#text": number;
}
export {};
