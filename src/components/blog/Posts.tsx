import Post from './Post';

const posts: Post[] = [
  {
    title: 'Inflation Impact: Strategies for Individuals and Businesses',
    description: 'In today\'s economic landscape, inflation remains a key concern for individuals and businesses alike. The rise in prices of goods...',
    date: 'Jun 10 2024',
    author: 'Ha Anh Rose',

    readTimeApproximation: 60 * 1000,
    bannerImageLink: 'https://static.wixstatic.com/media/e7c205_fddd088559394a15b51d7038d2a06e8a~mv2.png/v1/fill/w_740,h_576,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e7c205_fddd088559394a15b51d7038d2a06e8a~mv2.png',
    avatarLink: 'https://graph.facebook.com/720195298371068/picture',

    views: 1
  },

  {
    title: 'Unpacking Economic Growth: Trends and Forecasts',
    description: 'Economic growth is a topic that captivates the minds of many, from policymakers to everyday individuals. Understanding the trends and...',
    date: 'Jun 10 2024',
    author: 'Ha Anh Rose',

    readTimeApproximation: 60 * 2 * 1000,
    bannerImageLink: 'https://static.wixstatic.com/media/e7c205_0ad11a908b824652af8e37c0b585f7c6~mv2.png/v1/fill/w_740,h_576,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e7c205_0ad11a908b824652af8e37c0b585f7c6~mv2.png',
    avatarLink: 'https://graph.facebook.com/720195298371068/picture',

    views: 1
  }
];

export default function Posts() {
  return (
    <div class='grid grid-cols-1 gap-12 mt-12'>{posts.map((post) => <Post {...post} />)}</div>
  );
}
