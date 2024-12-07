export default interface iUserGetTopAlbumsResponse {
  topalbums: Topalbums;
}

interface Topalbums {
  album: Album[];
  "@attr": Attr2;
}

interface Album {
  artist: Artist;
  image: Image[];
  mbid: string;
  url: string;
  playcount: string;
  "@attr": Attr;
  name: string;
}

interface Artist {
  url: string;
  name: string;
  mbid: string;
}

interface Image {
  size: string;
  "#text": string;
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
