export default interface iUserGetFriendsResponse {
  friends: Friends;
}

interface Friends {
  "@attr": Attr;
  user: User[];
}

interface Attr {
  user: string;
  totalPages: string;
  page: string;
  perPage: string;
  total: string;
}

interface User {
  name: string;
  url: string;
  country: string;
  playlists: string;
  playcount: string;
  image: Image[];
  registered: Registered;
  realname: string;
  subscriber: string;
  bootstrap: string;
  type: string;
}

interface Image {
  size: string;
  "#text": string;
}

interface Registered {
  unixtime: string;
  "#text": string;
}
