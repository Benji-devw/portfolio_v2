import { ReactNode, ReactElement } from 'react';

export type ILayoutProps = {
  children?: ReactNode | undefined;
};

// UI
export type IBackgroundProps = {
  children: ReactNode;
  classN?:  string;
  color?:   string;
};
export type ITitleProps = {
  id:       string
  title:    string;
  text:     string;
  classN?:  string;
  color?:   string;
};
export type IButtonProps = {
  xl?:      boolean;
  children: ReactElement;
  classN:   string;
};

export interface IModalProps {
  children: ReactNode;
}





// COMPONENTS
export type IHeroProps = {
  lastName:   string;
  firstName:  string;
  post?:      string;
};

export type ISkillsProps = {
  skill:      ReactNode | any;
}

export interface IFormPost {  
  name?:    string;
  email?:   string;
  message?: string;
}
