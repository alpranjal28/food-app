import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    //property to keep footer at bootom even when page is empty

    <footer className="relative text-center border-t p-8 text-gray-500 mt-16">
      <div className="flex justify-center items-center gap-8 p-4">
        <div className="flex flex-row justify-center items-center gap-1">
          <Link href={"https://www.linkedin.com/in/pranjal-altherius-lakra/"}>
            <Image
              alt={"linkedin"}
              width={20}
              height={20}
              src={"/linkedin.png"}
            ></Image>
          </Link>
          <h3>LinkedIn</h3>
        </div>
        <div className="flex flex-row justify-center items-center gap-1">
          <Link href="https://github.com/alpranjal28">
            <Image
              alt={"github"}
              width={20}
              height={20}
              src={"/github-mark.png"}
            ></Image>
          </Link>
          <h3>GitHub</h3>
        </div>
      </div>

      <div className="">&copy;2024 All rights reserved</div>
    </footer>
  );
};
export default Footer;
