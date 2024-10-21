import { poppins } from "@/app/theme/fonts";
import Image from "next/image";

export default function AnnouncementCard(
	{ imageUrl, title, content, time }: { imageUrl: string, title: string, content: string, time: string }
) {
	return(
		<div className="flex flex-col lg:mx-24">
			<div className={`${poppins} flex flex-row items-center gap-4`}>
				<Image className="lg:w-20 lg:h-20 md:w-11 md:h-11 sm:w-10 w-9 sm:h-10 h-9 rounded-full object-cover object-center" src={imageUrl} alt="user photo" width={0} height={0} sizes="100vw" />
				<div className="flex flex-col">
					<h1 className={`${poppins} font-extrabold text-xl`}>{title}</h1>
					<div className="p-1"></div>
					<p className="text-neutral-400">{time}</p>
				</div>  
			</div>
			<div className="w-full bg-neutral-400 h-0.5 my-4"></div>
			<p className="lg:text-l">{content}</p>
			<div className="w-full bg-neutral-400 h-0.5 my-4"></div>
			<button className="self-end">
				<Image src="/icon-bookmark.svg" width={24} height={24} alt="bookmark"/>
			</button>	
		</div>
	)
}
