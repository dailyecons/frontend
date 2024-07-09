// @ts-expect-error Return undefined if result is not ok
function extractPosts(res: Response): Promise<Post[]> | undefined {
  if (res.ok) return res.json();
}

// Always return undefined
function handleFetchError() { };

export default function getPosts(startID: number) {
  return fetch(`https://dailyecons.onrender.com/api/post/get?startID=${startID}&limit=10`)
    .then(extractPosts)
    .catch(handleFetchError);
}
