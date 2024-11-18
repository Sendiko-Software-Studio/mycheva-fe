
export default function PostEvent() {
	return(
		<div className="flex flex-col lg:mx-24 md:mx-16 sm:mx-0 gap-8">
			<h1 className="font-bold text-4xl">Tambahkan Jadwal Baru</h1>
			<form method="post" className="flex flex-col gap-8">
				<div className="flex flex-row gap-16">
					<div className="flex flex-col w-full">
						<h1 className="font-semibold">Judul</h1>
						<input type="text" className="border-2 border-l-neutral-300 text-lg p-4 rounded-md w-full" placeholder="Judul Pertemuan" />
					</div>
					<div className="flex flex-col w-full">
						<h1 className="font-semibold">Lokasi/Link</h1>
						<input type="text" className="border-2 border-l-neutral-300 text-lg p-4 rounded-md w-full" placeholder="Lokasi Pertemuan"/>
					</div>
				</div>
				<div className="flex flex-row gap-16">
					<div className="flex flex-col w-full">
						<h1 className="font-semibold">Tanggal</h1>
						<input type="date" className="border-2 border-l-neutral-300 text-lg p-4 rounded-md w-full" placeholder="DD/MM/YYYY"/>
					</div>
					<div className="flex flex-col w-full">
						<h1 className="font-semibold">Jam</h1>
						<input type="time" className="border-2 border-l-neutral-300 text-lg p-4 rounded-md w-full" placeholder="10.00" />
					</div>
				</div>
				<div className="flex flex-row gap-16">
					<div className="flex flex-col w-full">
						<h1 className="font-semibold">Deskripsi</h1>
						<input type="text" className="border-2 border-l-neutral-300 text-lg p-4 rounded-md w-full" placeholder="Tentang Pertemuan"/>
					</div>
					<div className="flex flex-col w-full">
						<h1 className="font-semibold">Pertemuan</h1>
						<select className="border-2 border-l-neutral-300 text-lg p-4 rounded-md w-full" >
							<option value="online">Online</option>
							<option value="onsite">Onsite</option>
						</select>
					</div>
				</div>
				<button className="text-lg py-2 px-4 bg-primary-500 hover:bg-primary-700 shadow-md w-full text-white rounded">Tambahkan</button>
			</form>
		</div>		
	)
}