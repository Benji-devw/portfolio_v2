import { IButtonProps } from "@/types/types";

const MainButton = ({classN, children}: IButtonProps) => (
    <div className={classN}>
      {children}
    </div>
  );
export { MainButton };
