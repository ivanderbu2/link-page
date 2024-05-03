import Image from "next/image";
import { branches, title, subtitle, avatarTitle } from "./lib/config";

export default function Home() {
  let i = 0;
  let tree = branches.map((branch) => {
    i++;
    return <a href={branch.href} key={i} target="_blank" className="flex relative justify-center items-center py-4 px-10 mt-2 w-full h-auto leading-6 text-center align-middle whitespace-normal break-words bg-gray-400 hover:bg-gray-500 appearance-none cursor-pointer">
    <div className="p-0 m-0 w-full h-full font-medium text-center text-black align-baseline border-0 border-solid">
      <p className="relative p-0 m-0 w-full text-sm leading-normal align-baseline border-0 border-solid sm:text-base">
        {branch.label}
      </p>
    </div>
  </a>
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col items-center p-0 m-0 font-medium leading-6 text-black align-baseline border-0 border-solid">
          <div className="p-0 mx-0 mt-0 mb-4 leading-6 align-baseline border-0 border-solid">
            <Image
              src="/avatar.png"
              width={96}
              height={96}
              alt={avatarTitle}
              className="block object-contain rounded-full p-0 m-0 w-24 max-w-full h-24 text-black align-middle border-0 border-solid filter-none"
            />
          </div>
          <div className="flex items-center p-0 my-0 mx-3 max-w-full leading-6 align-baseline border-0 border-solid">
            <h1 className="p-0 m-0 max-w-full text-xl font-bold leading-normal align-baseline border-0 border-solid truncate">
              { title }
            </h1>
          </div>
          <div className="py-0 px-10 mx-0 mt-1 mb-0 leading-6 align-baseline border-0 border-solid">
            <h2 className="p-0 m-0 text-sm leading-normal text-center align-baseline border-0 border-solid text-stone-500 sm:text-base">
              {subtitle}
            </h2>
          </div>

          <div className="mt-12">
            {tree}
          </div>

          <div className="absolute bottom-0">
            <a href="https://github.com/ivanderbu2/linktree" target="_blank">
            Create your link page
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
