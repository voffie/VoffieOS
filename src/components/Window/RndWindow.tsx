import { ReactNode } from "react";
import { Rnd } from "react-rnd";

type RndProps = {
  children: ReactNode;
  defaultWidth: number;
  defaultHeight: number;
  minWidth?: number;
  minHeight?: number;
  lockAspectRatio?: boolean;
  isOpen: boolean;
};

export const RndWindow = ({
  children,
  defaultHeight,
  defaultWidth,
  minWidth,
  minHeight,
  lockAspectRatio,
  isOpen,
}: RndProps) => {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: defaultWidth,
        height: defaultHeight,
      }}
      minWidth={minWidth ? minWidth : 0}
      minHeight={minHeight ? minHeight : 0}
      lockAspectRatio={lockAspectRatio}
      bounds="window"
      dragHandleClassName="handleDrag"
      disableDragging={window.innerWidth <= 1300 ? true : false}
      enableResizing={window.innerWidth > 1300 ? true : false}
      maxWidth={window.innerWidth}
      maxHeight={window.innerHeight}
      style={{ display: isOpen ? "" : "none" }}
    >
      {children}
    </Rnd>
  );
};
