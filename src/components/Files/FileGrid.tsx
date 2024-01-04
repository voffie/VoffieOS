import { File } from "./File";

type GridProps = {
  files: {
    name: string;
    icon: string;
    tooltip?: string;
    click: () => void;
  }[];
};

export const FileGrid = ({ files }: GridProps) => {
  return (
    <ol className="file-grid ml-2">
      {files.map((file, index) => (
        <File
          key={index}
          data={file}
        />
      ))}
    </ol>
  );
};
