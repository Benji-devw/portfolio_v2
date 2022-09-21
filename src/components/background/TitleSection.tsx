import { LineSection } from '@/components/background/LineSection'
import { ITitleProps } from '@/types/types';

const TitleSection = (props: ITitleProps) => (
  <div id={props.id} className='titleSection'>
    <h2 className={`${props.classN} ${props.color}`}>{props.title}</h2>
    <p>{props.text}</p>
    <LineSection />
  </div>
);

export { TitleSection };
