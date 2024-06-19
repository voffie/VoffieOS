import { StickyNote } from "@/components/Programs/StickyNote";

export const WelcomeNote = () => {
  return (
    <StickyNote>
      <div className="h-full w-full">
        <textarea
          className="h-full w-full bg-transparent text-black"
          defaultValue="Click any of the files on the desktop or the taskbar to view it's contents! Also feel free to edit me :D"
          spellCheck={false}
        />
      </div>
    </StickyNote>
  );
};
