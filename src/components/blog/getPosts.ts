import { getAdminToken } from "../../utils/getToken";

// @ts-expect-error Return undefined if result is not ok
export function extractPosts(res: Response): Promise<Post[]> | undefined {
  if (res.ok) return res.json();
}

// Always return undefined
export function handleFetchError() { };

export function getPosts(startID: number) {
  return fetch(`https://dailyecons.onrender.com/api/post/get?startID=${startID}&limit=10`)
    .then(extractPosts)
    .catch(handleFetchError);
}

export function getPostsFromAdmin(startID: number) {
  // Don't fetch more
  if (startID !== -1) return;
  const token = getAdminToken();

  return fetch('https://dailyecons.onrender.com/api/admin/posts', {
    headers: { Authorization: token },
  })
    .then(extractPosts)
    .catch(handleFetchError);
}

export type PostFetcher = typeof getPosts;
