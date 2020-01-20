export interface Episodes {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: Enclosure;
  categories: any[];
}

export interface FeedReturn {
  status: string;
  items: Episodes[];
  feed: Feed;
}

export interface Feed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

interface Enclosure {
  link: string;
  type: string;
  length: number;
  duration: number;
  rating: Rating;
}

interface Rating {
  scheme: string;
  value: string;
}
