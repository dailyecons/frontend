import { For, Show, createSignal, onMount } from 'solid-js';
import Post from './Post';
import { getPosts, getPostsFromAdmin } from './getPosts';

export interface Props {
  fromAdmin?: boolean;
}

export default function Posts(props: Props) {
  const [loadedPosts, setLoadedPosts] = createSignal<Post[]>([], { equals: false });
  const fetchPosts = props.fromAdmin === true ? getPostsFromAdmin : getPosts;

  async function loadMorePosts() {
    const currentPosts = loadedPosts();

    if (currentPosts.length === 0) {
      const newPosts = await fetchPosts(-1);

      if (typeof newPosts !== 'undefined')
        setLoadedPosts(newPosts);
    } else {
      const newPosts = await fetchPosts(currentPosts[currentPosts.length - 1]!.id);

      if (typeof newPosts !== 'undefined') {
        currentPosts.push(...newPosts);
        setLoadedPosts(currentPosts);
      }
    }
  }

  onMount(loadMorePosts);

  return (
    <div class='min-h-screen'>
      <div class='grid grid-cols-1 gap-12 mt-12'>
        <Show when={loadedPosts().length !== 0} fallback={<p class='text-primary'>Loading posts...</p>}>
          <For each={loadedPosts()}>{Post}</For>
        </Show>
        <button class='btn btn-primary' onMouseDown={loadMorePosts}>Load more posts...</button>
      </div>
    </div>
  );
}
