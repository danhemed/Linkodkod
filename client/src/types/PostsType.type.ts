import type { JSX } from 'react/jsx-runtime';
import type { PostType } from './Post.type';

export type PostsType = {
  map(arg0: (post: any) => JSX.Element): import("react").ReactNode;
  posts: PostType[]
}