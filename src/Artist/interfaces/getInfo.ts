export default interface iArtistGetInfoResponse {
  artist: Artist;
}

interface Artist {
  name: string;
  url: string;
  image: Image[];
  streamable: string;
  ontour: string;
  stats: Stats;
  similar: Similar;
  tags: Tags;
  bio: Bio;
}

interface Image {
  "#text": string;
  size: string;
}

interface Stats {
  listeners: string;
  playcount: string;
}

interface Similar {
  artist: Artist2[];
}

interface Artist2 {
  name: string;
  url: string;
  image: Image2[];
}

interface Image2 {
  "#text": string;
  size: string;
}

interface Tags {
  tag: Tag[];
}

interface Tag {
  name: string;
  url: string;
}

interface Bio {
  links: Links;
  published: string;
  summary: string;
  content: string;
}

interface Links {
  link: Link;
}

interface Link {
  "#text": string;
  rel: string;
  href: string;
}
