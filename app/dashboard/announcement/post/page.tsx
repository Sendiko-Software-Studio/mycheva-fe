"use client"
import { useState } from "react";

export default function PostAnnouncement() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="container lg:mx-24 md:mx-16 sm:mx-0 flex flex-col gap-8">
            <h1 className="font-bold text-4xl">Tambah Pengumuman</h1>
            <div className="flex flex-col gap-2">
                <label htmlFor="title">Judul</label>
                <input 
                type="text"
                name="title"
                id="title"
                className="border-2 border-l-neutral-300 text-lg w-64 p-4 rounded-md"
                placeholder="Judul pengumuman"
                onChange={(value) => setTitle(value.target.value)}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="content">Konten</label>
                <input 
                type="text" 
                name="content" 
                id="content" 
                className="border-2 border-l-neutral-300 text-lg w-fit h-64 p-4 rounded-md" 
                placeholder="Konten pengumuman"
                onChange={(value) => setContent(value.target.value)}
                multiple
                />
            </div>
            <button className="text-lg p-4 bg-primary-500 shadow-md w-fit text-white rounded">Tambahkan</button>
        </div>
    );
}