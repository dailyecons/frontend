import { adminFetch, normalFetch } from "../../utils/fetch";
import type Post from "./Post";

// @ts-expect-error Return undefined if result is not ok
export function extractPosts(res: Response) {
  if (res.ok) return res.json();
}

export async function getPosts(startId: number): Promise<Post[] | undefined> {
  return normalFetch(`/post/get?startID=${startId}&limit=10`).then(extractPosts).catch(console.log);
}

export async function getPost(id: string): Promise<Post | undefined> {
  return normalFetch(`/post/get/${id}`).then(extractPosts).catch(console.log);
}

export async function getPostsFromAdmin(startID: number): Promise<Post[] | undefined> {
  // Don't fetch more
  if (startID !== -1) return;

  // Why tf does this return 404 
  return adminFetch('/admin/posts')
    .then(extractPosts)
    .catch(console.log);
}

export type PostFetcher = typeof getPosts;
