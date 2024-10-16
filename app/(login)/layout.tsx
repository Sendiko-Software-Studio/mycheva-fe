import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-screen h-screen">
      {/* <div className="lg:flex-1 md:w-0 w-0 bg-primary-500" /> */}
      <Image src={"/login_ill.png"} alt="Side Image" width={772} height={1024} className="lg:flex-1 md:w-0 w-0 object-cover" />
      <div className="flex-1 bg-neutral-100">{children}</div>
    </main>
  );
}
