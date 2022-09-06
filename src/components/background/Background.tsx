import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  classN?: string;
  color?: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`${props.classN} ${props.color}`}>{props.children}</div>
);

export { Background };
