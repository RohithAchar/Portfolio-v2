import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="projects" className="bg-white/85 footer-gradient mt-8">
      <div className="border-b border-accent/15" />
      <a
        className="text-xs text-center text-accent group"
        href="https://youtu.be/xvFZjo5PgG0?si=O3BRAjGf9-_3Mkcv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
          <div className="flex justify-center">
            {" "}
            Click here to escape the matrix.
            <span>
              <FaHeart color="red" />
            </span>
          </div>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
