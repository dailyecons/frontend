import { For, Show, createSignal } from 'solid-js';
import Post from './Post';
import getPosts from './getPosts';

export interface Props {
  list: Post[] | undefined | void;
}

export default function Posts(props: Props) {
  const [loadedPosts, setLoadedPosts] = createSignal<Post[]>(props.list ?? [], { equals: false });

  async function loadMorePosts() {
    const currentPosts = loadedPosts();

    if (currentPosts.length === 0) {
      const newPosts = await getPosts(-1);

      if (typeof newPosts !== 'undefined')
        setLoadedPosts(newPosts);
    } else {
      const newPosts = await getPosts(currentPosts[currentPosts.length - 1]!.id);

      if (typeof newPosts !== 'undefined') {
        currentPosts.push(...newPosts);
        setLoadedPosts(currentPosts);
      }
    }
  }

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
