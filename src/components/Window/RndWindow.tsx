import { ReactNode } from "react";
import { Rnd } from "react-rnd";

type RndProps = {
  children: ReactNode;
  defaultWidth: number;
  defaultHeight: number;
  defaultX: "center" | number;
  defaultY: "center" | number;
  minWidth?: number;
  minHeight?: number;
  lockAspectRatio?: boolean;
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
}: RndProps) => {
  return (
    <Rnd
      default={{
        x:
          defaultX === "center"
            ? Math.floor(window.innerWidth / 2 - defaultWidth / 2)
            : defaultX,
        y:
          defaultY === "center"
            ? Math.floor(window.innerHeight / 2 - defaultHeight / 2)
            : defaultY,
        width: defaultWidth,
        height: defaultHeight,
      }}
      minWidth={minWidth ? minWidth : 0}
      minHeight={minHeight ? minHeight : 0}
      lockAspectRatio={lockAspectRatio}
      bounds="window"
      dragHandleClassName="handleDrag"
    >
      {children}
    </Rnd>
  );
};
