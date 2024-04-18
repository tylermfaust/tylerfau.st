import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center">
      <div className="h-48 w-screen"></div>
      <h1 className="mx-auto text-7xl font-extrabold">
        Hello. My name is{" "}
        <span className="underline decoration-[#d0eaff]">Tyler</span>.
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
      <div className="mx-auto flex max-w-prose flex-col content-center justify-center text-center text-lg">
        <p className="mt-12">
          I manage procurement and corporate partner financial integrations
          at&nbsp;
          <a
            href="https://www.vetcove.com/"
            className="font-bold decoration-[#d0eaff] hover:underline"
          >
            Vetcove
          </a>
          , an eCommerce platform dedicated to improving the veterinary hospital
          experience.
        </p>
        <p className="mt-6">
          Previously, I was an operations manager at&nbsp;
          <a
            href="https://orchard.com/"
            className="font-bold decoration-[#d0eaff] hover:underline"
          >
            Orchard
          </a>
          , where I worked closely with the Orchard Title team to deliver a
          best-in-class experience to our customers.
        </p>
        <p className="mt-6">
          I graduated from the University of Texas at Austin with an MA in
          Global Policy Studies and a specialization in human rights. Before
          grad school, I spent several years as a barista and shift supervisor
          at Starbucks, interned at the Texas State Capitol, and worked in real
          estate and public affairs.
        </p>
      </div>
    </main>
  );
}
