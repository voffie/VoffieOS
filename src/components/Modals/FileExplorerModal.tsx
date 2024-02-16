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
      <div className="w-full h-full z-10">
        <section className="window h-full">
          <header className="border-b border-[rgb(43,43,43)] bg-[rgb(43,43,43)] flex relative top-0 h-fit p-2 items-center handleDrag">
            <nav className="flex w-1/3">
              <button
                className="w-4 h-4 mr-5 rounded-[50%] bg-[#FF5D5B] flex items-center justify-center"
                onClick={() => handleClose()}
              />
              <button className="w-4 h-4 mr-5 rounded-[50%] bg-[#FFBB39] flex items-center justify-center cursor-default" />
              <button className="w-4 h-4 mr-5 rounded-[50%] bg-[#00CD4E] flex items-center justify-center cursor-default" />
            </nav>
            <p className="w-1/3">{title}</p>
            <div className="w-1/3" />
          </header>
          <div className="h-[calc(100%-40px)] overflow-y-auto">
            <section className="py-1 overflow-auto h-[calc(100%-24px)] grid px-1">
              <FileGrid files={projects} />
            </section>
            <footer className="flex items-center bg-[rgb(51,51,51)] text-xs font-extralight px-1 w-full h-6">
              {projects.length} items
            </footer>
          </div>
        </section>
      </div>
    </RndWindow>
  );
};
