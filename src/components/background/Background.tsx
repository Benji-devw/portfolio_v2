import { IBackgroundProps } from '@/types/types';

const Background = (props: IBackgroundProps) => (
  <div className={`${props.classN} ${props.color}`}>{props.children}</div>
);
export { Background };
