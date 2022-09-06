import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  classN?: string;
  color?: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`wrapper ${props.classN}`} style={{backgroundColor: props.color}}>{props.children}</div>
  // <div className={`${props.classN} ${props.color}`}>{props.children}</div>
);

export { Background };
