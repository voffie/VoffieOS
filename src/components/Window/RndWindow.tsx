import type { ReactNode } from "react";
import { Rnd } from "react-rnd";

type RndProps = {
  children: ReactNode;
  defaultX?: number;
  defaultY?: number;
  defaultWidth: number;
  defaultHeight: number;
  minWidth?: number;
  minHeight?: number;
  lockAspectRatio?: boolean;
  isOpen: boolean;
};

export const RndWindow = ({
  children,
  defaultX,
  defaultY,
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
        x: defaultX ? defaultX : 0,
        y: defaultY ? defaultY : 0,
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
