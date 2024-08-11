export default interface iAlbumSearchResponse {
  results: Results;
}

interface Results {
  "opensearch:Query": OpensearchQuery;
  "opensearch:totalResults": string;
  "opensearch:startIndex": string;
  "opensearch:itemsPerPage": string;
  albummatches: Albummatches;
  "@attr": Attr;
}

interface OpensearchQuery {
  "#text": string;
  role: string;
  searchTerms: string;
  startPage: string;
}

interface Albummatches {
  album: Album[];
}

interface Album {
  name: string;
  artist: string;
  url: string;
  image: Image[];
  streamable: string;
  mbid: string;
}

interface Image {
  "#text": string;
  size: string;
}

interface Attr {
  for: string;
}
