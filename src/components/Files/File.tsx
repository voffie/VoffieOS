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
      className="h-min p-1 hover:bg-fileHover focus-within:bg-fileFocus w-fit"
      onDoubleClick={data.click ? data.click : undefined}
    >
      <button className={`relative ${data.tooltip ? "hover-text" : ""}`}>
        {data.tooltip && (
          <span className="tooltip-file-text">{data.tooltip}</span>
        )}
        <figure className="flex flex-col -mb-1 place-items-center">
          <picture className="h-12 w-12">
            <img
              className="absolute aspect-[1] max-h-12 min-h-12 max-w-12 min-w-12 object-contain pointer-events-none"
              src={data.icon}
            />
          </picture>
          <picture className="absolute">
            <img src="files/icon/shortcut.webp" />
          </picture>
          <figcaption className="my-1 py-1 break-words text-xs pointer-events-none">
            {data.name}
          </figcaption>
        </figure>
      </button>
    </li>
  );
};
