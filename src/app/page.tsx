import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center">
      <div className="h-72 w-screen"></div>
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
    </main>
  );
}
