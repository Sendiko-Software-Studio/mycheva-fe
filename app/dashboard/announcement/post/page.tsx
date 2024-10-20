"use client"
import React, { useState } from "react";
import Cookies from "js-cookie";
import axiosInstance from "@/app/lib/axios";

export default function PostAnnouncement() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [message, setMessage] = useState("");

	const handlePost = async (event: React.FormEvent) => {
		event.preventDefault();
		setError(null);
		if (title != "" && content != "") {
			try {
				setLoading(!loading);
				const token = Cookies.get('token');
				const userId = Cookies.get('userId');
				var decodedId = '';
				if (userId != null) {
					decodedId = atob(userId);
				}
				axiosInstance.post(
					"announcement",
					{
						"userId": decodedId,
						"title": title,
						"content": content
					}, 
					{
						headers: {
							Authorization: `Bearer ${token}`
						}
					}
				).then((res) => {
					if (res.status == 201) {
						console.log("res status: " + res.status);
						setLoading(false);
						setMessage("Announcement successfully posted!");
					}
				});
			} catch (error: any) {
				console.log(error);
				setError(error.message)
			} finally {
				setLoading(!loading)
			}
		} 
	}	

	return (
		<div className="lg:mx-24 md:mx-16 sm:mx-0 flex flex-col gap-8">
			{loading && <p className={`transition-opacity duration-300 ease-in-out ${loading ? 'opacity-100' : 'opacity-0'} text-neutral-50 bg-primary-500 p-2 w-full rounded-lg`}>Loading...</p>}
			{error && <p className={`transition-opacity duration-300 ease-in-out ${error ? 'opacity-100' : 'opacity-0'} text-neutral-50 bg-error p-2 rounded-lg w-full`}>{error}</p>}
			{message && <p className={`transition-opacity duration-300 ease-in-out ${message ? 'opacity-100' : 'opacity-0'} text-neutral-50 bg-green p-2 rounded-lg w-full`}>{message}</p>}
			<h1 className="font-bold text-4xl">Tambah Pengumuman</h1>
				<form onSubmit={handlePost} method="post" className="w-full">
					<div className="flex flex-col gap-2 mb-4">
						<label htmlFor="title">Judul</label>
							<input 
								type="text"
								name="title"
								id="title"
								className="border-2 border-l-neutral-300 text-lg w-1/2 p-4 rounded-md"
								placeholder="Judul pengumuman"
								onChange={(value) => setTitle(value.target.value)}
								/>
					</div>
					<div className="flex flex-col gap-2 mb-4">
								<label htmlFor="content">Konten</label>
								<input 
								type="text" 
								name="content" 
								id="content" 
								className="border-2 border-l-neutral-300 text-lg w-full p-4 rounded-md" 
								placeholder="Konten pengumuman"
								onChange={(value) => setContent(value.target.value)}
								multiple
								/>
					</div>
					<button className="text-lg py-2 px-4 bg-primary-500 shadow-md w-full text-white rounded">Tambahkan</button>
				</form>
		</div>
	);
}