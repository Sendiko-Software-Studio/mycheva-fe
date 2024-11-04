import formatTimestamp from "@/app/lib/timeFormatter";
import {poppins} from "@/app/theme/fonts";
import Image from "next/image";

export default function AnnouncementCard(
  {username, imageUrl, title, content, time}: { username: string, imageUrl: string, title: string, content: string, time: string }
) {
  return (
    <div className="flex flex-col lg:mx-24 shadow-md p-8 rounded-lg">
      <div className={`${poppins} flex flex-row items-center gap-4`}>
        <Image
          className="lg:w-16 lg:h-16 md:w-11 md:h-11 sm:w-10 w-9 sm:h-10 h-9 rounded-full object-cover object-center"
          src={imageUrl} alt="user photo" width={0} height={0} sizes="100vw"/>
        <div className="flex flex-col">
          <h1 className={`${poppins} font-extrabold text-xl`}>{username}</h1>
          <div className="p-1"></div>
          <p className="text-neutral-400">{formatTimestamp(time)}</p>
        </div>
      </div>
      <div className="flex flex-col w-full bg-neutral-400 h-0.5 my-4"></div>
        <h1 className={`${poppins} font-semibold text-lg my-2`}>{title}</h1>
        <p className="lg:text-l">{content}</p>
      <div className="w-full bg-neutral-400 h-0.5 my-4"></div>
      <button className="self-end">
        <Image src="/icon-bookmark.svg" width={24} height={24} alt="bookmark"/>
      </button>
    </div>
  )
}
