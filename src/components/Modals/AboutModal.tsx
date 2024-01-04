import { BaseModal } from "./BaseModal";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="About me"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p>
        I got introduced to computers at an early age and have been interested
        in them as far as I can remember. At first, it was only video games, but
        as time passed I started to enjoy the more technical parts behind what
        makes video games and computers work. This was especially true during my
        last few years of education where I learned about coding, tools that
        help developers with their work, and a few programming languages.
      </p>
    </BaseModal>
  );
};
