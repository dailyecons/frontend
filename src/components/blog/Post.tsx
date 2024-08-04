import { formatMsShort } from '@bit-js/ms';
import getDescription from '../../utils/getDescription';

export default interface Post {
  id: number;

  title: string;
  content: string;
  date: string;
  author: string;

  readTimeApproximation: number;

  bannerLink: string;
  avatarLink: string;

  views: number;
}

export default function Post(props: Post) {
  return (
    <div class='card md:card-side max-w-lg md:max-w-none md:h-72 rounded-none border border-[#B3B3B3]'>
      <figure class='max-h-72 md:max-h-none'>
        <img src={props.bannerLink} alt='Banner' class='w-full md:w-72 md:h-full' />
      </figure>

      <div class='card-body text-primary font-lora tracking-wider md:w-[30rem]'>
        <div class='avatar mb-4'>
          <div class='w-10 h-10 rounded-full'>
            <img src={props.avatarLink} alt='Author avatar' />
          </div>

          <p class='ml-4 text-sm'>
            {props.author} <br />
            {props.date} - {formatMsShort(props.readTimeApproximation)}
          </p>
        </div>

        <a class='card-title text-1.5xl font-medium cursor-pointer' href={`./blog/${props.id}`}>{props.title}</a>
        <p class='text-light mt-4'>{getDescription(props.content)}</p>
      </div>
    </div>
  );
}
