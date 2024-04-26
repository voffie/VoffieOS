import { Browser } from "@/components/Programs/Browser";
import Image from "next/image"
import selfie from "../../../public/images/selfie.webp"

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const About = ({ isOpen, handleClose }: Props) => {
  return (
    <Browser
      title="~/server/about-me.html"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <section className="flex h-full flex-col items-center p-2">
        <Image
          src={selfie}
          alt="Selfie of VoffieDev"
          className="my-2 h-40 w-28"
          loading="lazy"
        />
        <section>
          <p className="text-white">
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
    </Browser>
  );
};
