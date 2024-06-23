import { formatMsLong } from '@bit-js/ms';

export default interface Post {
  title: string;
  description: string;
  date: string;
  author: string;

  readTimeApproximation: number;

  bannerImageLink: string;
  avatarLink: string;

  views: number;
}

export default function Post(props: Post) {
  return (
    <div class='card md:card-side max-w-lg md:max-w-none md:h-72 rounded-none border border-[#B3B3B3]'>

      <figure class='max-h-72 md:max-h-none'>
        <img src={props.bannerImageLink} alt='Banner' class='w-full md:w-72 md:h-full' />
      </figure>

      <div class='card-body text-primary font-lora tracking-wider md:w-[30rem]'>
        <div class='avatar mb-4'>
          <div class='w-10 h-10 rounded-full'>
            <img src={props.avatarLink} alt='Author avatar' />
          </div>

          <p class='ml-4 text-sm'>
            {props.author} <br />
            {props.date} - {formatMsLong(props.readTimeApproximation)} read
          </p>
        </div>

        <h2 class='card-title text-1.5xl font-medium'>{props.title}</h2>
        <p class='text-light mt-4'>{props.description}</p>
      </div>
    </div>
  );
}
