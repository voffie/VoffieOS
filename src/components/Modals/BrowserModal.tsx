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
      <div className="z-10 h-full cursor-auto text-white">
        <section className="window h-full overflow-y-auto">
          <header className="handleDrag relative top-0 flex h-fit flex-col border-b border-[rgb(43,43,43)] bg-[rgb(43,43,43)] p-2">
            <nav className="flex">
              <button
                className="mr-5 flex h-4 w-4 items-center justify-center rounded-[50%] bg-[#FF5D5B]"
                onClick={() => handleClose()}
              />
              <button className="mr-5 flex h-4 w-4 cursor-default items-center justify-center rounded-[50%] bg-[#FFBB39]" />
              <button className="mr-5 flex h-4 w-4 cursor-default items-center justify-center rounded-[50%] bg-[#00CD4E]" />
            </nav>
            <aside className="flex items-center py-2">
              <div className="mr-4 flex w-fit items-center gap-4">
                <FaArrowLeft />
                <FaArrowRight />
                <FaRotateRight />
              </div>
              <div className="mr-4 w-full rounded-md bg-[rgb(33,33,33)] text-start">
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
