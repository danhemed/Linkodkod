import type { JSX } from 'react/jsx-runtime';

export type post = {
    id: string,
    description: string,
    likes: number,
    name_user: string,
    date: string
};

export type postType = {
    post: post
}

export type postsType = {
  map(arg0: (post: any) => JSX.Element): import("react").ReactNode;
  posts: postType[]
}