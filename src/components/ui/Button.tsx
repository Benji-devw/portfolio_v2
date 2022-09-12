import { ReactElement } from "react";

type IButtonProps = {
  xl?: boolean;
  children: ReactElement;
  classN: string;
};

const MainButton = (props: IButtonProps) => (
    <div className={props.classN}>
      {props.children}
    </div>
  );


export { MainButton };
