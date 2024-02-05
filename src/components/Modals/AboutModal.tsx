import { BrowserModal } from "./BrowserModal";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BrowserModal
      title="~/server/about-me.html"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <section className="flex flex-col items-center p-2 h-full">
        <img
          src="images/selfie.JPG"
          className="h-40 w-28 my-2"
        />
        <section>
          <p>
            Hey, my name is Viktor Söderborg also known as Voffie online. I'm a
            Swedish web- & software developer and I got introduced to computers
            at an early age and have been interested in them as far as I can
            remember. At first, it was only video games, but as time passed I
            started to enjoy the more technical parts behind what makes video
            games and computers work. This was especially true during my last
            few years of education where I learned about coding, tools that help
            developers with their work, and a few programming languages.
          </p>
        </section>
      </section>
    </BrowserModal>
  );
};
