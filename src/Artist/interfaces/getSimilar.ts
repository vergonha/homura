export default interface iArtistGetSimilarResponse {
  similarartists: Similarartists;
}

interface Similarartists {
  artist: Artist[];
  "@attr": Attr;
}

interface Artist {
  name: string;
  mbid: string;
  match: string;
  url: string;
  image: Image[];
  streamable: string;
}

interface Image {
  "#text": string;
  size: string;
}

interface Attr {
  artist: string;
}
