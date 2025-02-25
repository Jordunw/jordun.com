import { GITHUB, LINKEDIN, EMAIL } from "@/app/constants";
import Image from "next/image";
import { ReactNode } from "react";

interface ButtonProps {
  to: string;
  children: ReactNode;
}

const FooterButton: React.FC<ButtonProps> = ({ to, children }) => {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className="px-1.5">
      <button className="w-12 h-12 p-2 rounded-md bg-background hover:bg-primary border flex items-center justify-center">
        {children}
      </button>
    </a>
  );
};

const GithubButton = ({ w = 24, h = 24 }) => {
  return (
    <FooterButton to={GITHUB}>
      {<Image src="/github-mark-white.svg" alt="GitHub" width={w} height={h} />}
    </FooterButton>
  );
};

const LinkedInButton = ({ w = 24, h = 24 }) => {
  return (
    <FooterButton to={LINKEDIN}>
      {
        <Image
          src="/linkedin-mark.svg"
          alt="LinkedIn"
          width={w}
          height={h}
          className="filter invert"
        />
      }
    </FooterButton>
  );
};

const EmailButton = ({ w = 24, h = 24 }) => {
  return (
    <FooterButton to={"mailto:" + EMAIL}>
      {
        <Image
          src="/email-mark.svg"
          alt="Email"
          width={w}
          height={h}
          className="filter invert"
        />
      }
    </FooterButton>
  );
};

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-4">
      <div className="flex justify-end md:lg:space-x-4 space-x-1">
        <EmailButton w={28} h={28} />
        <LinkedInButton w={22} h={22} />
        <GithubButton />
      </div>
    </footer>
  );
};

export default Footer;
