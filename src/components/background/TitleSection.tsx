import { LineSection } from '@/components/background/LineSection'


type ITitleProps = {
  title: string;
  text: string;
  classN?: string;
  color?: string;
};

const TitleSection = (props: ITitleProps) => (
  <div className='titleSection'>
    <h2 className={`${props.classN} ${props.color}`}>{props.title}</h2>
    <p>{props.text}</p>
    <LineSection />
  </div>
);

export { TitleSection };
