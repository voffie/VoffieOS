import { ReactNode, useEffect, useState } from "react";
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
  const [initialPosition, setInitialPosition] = useState({
    x: Math.floor(window.innerWidth / 2 - defaultWidth / 2),
    y: Math.floor(window.innerHeight / 2 - defaultHeight / 2),
  });

  useEffect(() => {
    setInitialPosition({
      x:
        defaultX === "center"
          ? Math.floor(window.innerWidth / 2 - defaultWidth / 2)
          : defaultX,
      y:
        defaultY === "center"
          ? Math.floor(window.innerHeight / 2 - defaultHeight / 2)
          : defaultY,
    });
  }, [defaultX, defaultY, defaultWidth, defaultHeight]);

  return (
    <Rnd
      default={{
        x: initialPosition.x,
        y: initialPosition.y,
        width: defaultWidth,
        height: defaultHeight,
      }}
      minWidth={minWidth ? minWidth : 0}
      minHeight={minHeight ? minHeight : 0}
      lockAspectRatio={lockAspectRatio}
      bounds="window"
      dragHandleClassName="handleDrag"
      disableDragging={window.innerWidth <= 1300 ? true : false}
      maxWidth={window.innerWidth}
      maxHeight={window.innerHeight}
    >
      {children}
    </Rnd>
  );
};
