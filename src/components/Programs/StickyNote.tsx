import { RndWindow } from "../Window/RndWindow";

export const StickyNote = ({ children }: { children: React.ReactNode }) => {
  console.log(window.innerWidth);
  return (
    <RndWindow
      isOpen={true}
      defaultX={window.innerWidth - 200}
      defaultY={0}
      defaultHeight={window.innerHeight < 200 ? 0 : 200}
      defaultWidth={window.innerWidth < 200 ? window.innerWidth - 20 : 200}
      minWidth={window.innerWidth < 150 ? 0 : 150}
      minHeight={window.innerHeight < 150 ? 0 : 150}
      lockAspectRatio
    >
      <div className="z-10 h-full cursor-auto bg-[#fff1ab]">
        <header className="handleDrag relative top-0 bg-[#ffec80] p-2"></header>
        <div className="h-full p-2">{children}</div>
      </div>
    </RndWindow>
  );
};
