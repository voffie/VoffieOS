import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RndWindow } from "../Window/RndWindow";
import { FaArrowLeft, FaArrowRight, FaRotateRight } from "react-icons/fa6";

type BrowserProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

export const BrowserModal = ({
  title,
  children,
  isOpen,
  handleClose,
}: BrowserProps) => {
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
        <div className="flex min-h-full text-center sm:p-0">
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
                defaultHeight={window.innerHeight < 525 ? 0 : 525}
                defaultWidth={window.innerWidth < 500 ? 0 : 500}
                minWidth={350}
                minHeight={525}
                lockAspectRatio
              >
                <div className="w-full h-full absolute cursor-auto z-10">
                  <section className="window h-full overflow-y-auto">
                    <header className="border-b border-[rgb(43,43,43)] bg-[rgb(43,43,43)] flex relative top-0 h-fit p-2 handleDrag flex-col">
                      <nav className="flex">
                        <button
                          className="w-4 h-4 mr-5 rounded-[50%] bg-[#FF5D5B] flex items-center justify-center"
                          onClick={() => handleClose()}
                        />
                        <button className="w-4 h-4 mr-5 rounded-[50%] bg-[#FFBB39] flex items-center justify-center cursor-default" />
                        <button className="w-4 h-4 mr-5 rounded-[50%] bg-[#00CD4E] flex items-center justify-center cursor-default" />
                      </nav>
                      <aside className="flex items-center py-2">
                        <div className="flex items-center gap-4 mr-4 w-fit">
                          <FaArrowLeft />
                          <FaArrowRight />
                          <FaRotateRight />
                        </div>
                        <div className="rounded-md bg-[rgb(33,33,33)] w-full mr-4 text-start">
                          <h1 className="ml-2 py-1">{title}</h1>
                        </div>
                      </aside>
                    </header>
                    <div>{children}</div>
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
