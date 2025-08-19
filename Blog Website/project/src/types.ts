export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  coverImage: string;
  category: string;
  tags?: string[];
  commentCount: number;
  comments?: Comment[];
}

export interface Comment {
  id: number;
  name: string;
  email: string;
  content: string;
  date: string;
  avatar: string;
}