export type BlogType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  tag: string;
};

export type PortfolioType = {
  id: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
};
