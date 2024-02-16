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
    <RndWindow
      isOpen={isOpen}
      defaultHeight={window.innerHeight < 525 ? 0 : 525}
      defaultWidth={window.innerWidth < 500 ? window.innerWidth - 20 : 500}
      minWidth={window.innerWidth < 350 ? 0 : 350}
      minHeight={window.innerHeight < 525 ? 0 : 525}
      lockAspectRatio
    >
      <div className="h-full cursor-auto z-10">
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
                <p className="ml-2 py-1">{title}</p>
              </div>
            </aside>
          </header>
          <div>{children}</div>
        </section>
      </div>
    </RndWindow>
  );
};
