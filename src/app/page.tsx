import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center">
      <div className="h-48 w-screen"></div>
      <h1 className="mx-auto text-7xl font-extrabold">
        Hello. My name is Tyler.
      </h1>
      <div className="mt-12 flex justify-center">
        <Image
          src="/Tyler.jpg"
          alt="An image of Tyler Faust."
          width={256}
          height={256}
          className="rounded-full"
        />
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href="https://www.linkedin.com/in/tylerfaust"
          target="_blank"
          className="mr-2 transition-transform ease-in hover:scale-110"
        >
          <FaLinkedin size={36} color="#0077B5" />
        </a>
        <a
          href="https://github.com/tylermfaust"
          target="_blank"
          className="transition-transform ease-in hover:scale-110"
        >
          <FaGithub size={36} color="#1f2328" />
        </a>
      </div>
    </main>
  );
}
