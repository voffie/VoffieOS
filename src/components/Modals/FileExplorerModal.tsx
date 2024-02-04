import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
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
    <Transition.Root
      show={isOpen}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex min-h-full py-10 px-4 text-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div>
              <RndWindow
                defaultX="center"
                defaultY="center"
                defaultHeight={560}
                defaultWidth={1200}
                minWidth={350}
                minHeight={250}
                lockAspectRatio
              >
                <div className="w-full h-full absolute cursor-auto z-10">
                  <section className="file-explorer h-full">
                    <header className="border-b border-[rgb(43,43,43)] bg-[rgb(43,43,43)] flex relative top-0 h-fit p-2 items-center handleDrag">
                      <nav className="flex w-1/3">
                        <button
                          className="w-4 h-4 rounded-[50%] mr-[20px] bg-[#FF5D5B] flex items-center justify-center"
                          onClick={() => handleClose()}
                        />
                        <button className="w-4 h-4 rounded-[50%] mr-[20px] bg-[#FFBB39] flex items-center justify-center cursor-default" />
                        <button className="w-4 h-4 rounded-[50%] mr-[20px] bg-[#00CD4E] flex items-center justify-center cursor-default" />
                      </nav>
                      <Dialog.Title
                        as="p"
                        className="w-1/3"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="w-1/3" />
                    </header>
                    <div className="h-[calc(100%-40px)]">
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
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
