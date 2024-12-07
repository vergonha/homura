export default interface iUserGetRecentTracksResponse {
  recenttracks: Recenttracks;
}

interface Recenttracks {
  track: Track[];
  "@attr": Attr;
}

interface Track {
  artist: Artist;
  streamable: string;
  image: Image[];
  mbid: string;
  album: Album;
  name: string;
  url: string;
  date: Date;
}

interface Artist {
  mbid: string;
  "#text": string;
}

interface Image {
  size: string;
  "#text": string;
}

interface Album {
  mbid: string;
  "#text": string;
}

interface Date {
  uts: string;
  "#text": string;
}

interface Attr {
  user: string;
  totalPages: string;
  page: string;
  perPage: string;
  total: string;
}
