import { FileGrid } from "../Files/FileGrid";
import { RndWindow } from "../Window/RndWindow";

type FileExplorerProps = {
  title: string;
  projects: {
    name: string;
    icon: string;
    tooltip?: string;
    click: () => void;
  }[];
  isOpen: boolean;
  handleClose: () => void;
};

export const FileExplorerModal = ({
  title,
  projects,
  isOpen,
  handleClose,
}: FileExplorerProps) => {
  return (
    <RndWindow
      defaultHeight={window.innerHeight < 560 ? 0 : 560}
      defaultWidth={window.innerWidth < 1200 ? window.innerWidth - 20 : 1200}
      minWidth={window.innerWidth < 350 ? 0 : 350}
      minHeight={window.innerHeight < 250 ? 0 : 250}
      lockAspectRatio
      isOpen={isOpen}
    >
      <div className="z-10 h-full w-full text-white">
        <section className="window h-full">
          <header className="handleDrag relative top-0 flex h-fit items-center border-b border-[rgb(43,43,43)] bg-[rgb(43,43,43)] p-2">
            <nav className="flex w-1/3">
              <button
                className="mr-5 flex h-4 w-4 items-center justify-center rounded-[50%] bg-[#FF5D5B]"
                onClick={() => handleClose()}
              />
              <button className="mr-5 flex h-4 w-4 cursor-default items-center justify-center rounded-[50%] bg-[#FFBB39]" />
              <button className="mr-5 flex h-4 w-4 cursor-default items-center justify-center rounded-[50%] bg-[#00CD4E]" />
            </nav>
            <p className="w-1/3 text-center">{title}</p>
            <div className="w-1/3" />
          </header>
          <div className="h-[calc(100%-40px)] overflow-y-auto">
            <section className="grid h-[calc(100%-24px)] overflow-auto px-1 py-1">
              <FileGrid files={projects} />
            </section>
            <footer className="flex h-6 w-full items-center bg-[rgb(51,51,51)] px-1 text-xs font-extralight">
              {projects.length} items
            </footer>
          </div>
        </section>
      </div>
    </RndWindow>
  );
};
