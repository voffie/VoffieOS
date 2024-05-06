import Image from "next/image";
import ShortcutImg from "@/../public/files/icon/shortcut.webp";

type FileProps = {
  data: {
    name: string;
    icon: string;
    tooltip?: string;
    click?: () => void;
  };
};

export const File = ({ data }: FileProps) => {
  return (
    <li
      className="h-min w-fit justify-self-center p-1 focus-within:bg-fileFocus hover:bg-fileHover"
      onClick={data.click ? data.click : undefined}
    >
      <button
        className="tooltip-file relative"
        title={data.tooltip ? data.tooltip : undefined}
      >
        <figure className="-mb-1 flex flex-col place-items-center">
          <picture className="h-12 w-12">
            <Image
              className="pointer-events-none absolute aspect-[1] size-12 object-contain"
              src={data.icon}
              height="48"
              width="48"
              alt="File icon"
              loading="lazy"
            />
          </picture>
          <picture className="absolute">
            <Image src={ShortcutImg} alt="Shortcut icon" loading="lazy" />
          </picture>
          <figcaption className="pointer-events-none my-1 break-words py-1 text-xs text-white">
            {data.name}
          </figcaption>
        </figure>
      </button>
    </li>
  );
};
