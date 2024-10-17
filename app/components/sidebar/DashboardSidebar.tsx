import Image from "next/image";

interface DashboardSidebarProps {
  isSidebarOpen: boolean;
}

export default function DashboardSidebar({
  isSidebarOpen,
}: DashboardSidebarProps) {
  return (
    <>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 w-64 lg:pt-20 sm:pt-[4.2rem] md:sm:pt-[4.4rem] pt-[4.1rem] h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 ${isSidebarOpen ? "translate-x-0" : ""}`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-primary-500">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-primary-50 hover:bg-primary-50/15 group"
              >
                <Image
                  src={"/icon-co-present.svg"}
                  alt="Pertemuan"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-5 h-5 text-primary-50 transition duration-75"
                />
                <span className="ms-3 lg:text-base text-sm">Pertemuan</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/announcement"
                className="flex items-center p-4 text-primary-50 hover:bg-primary-50/15 group"
              >
                <Image
                  src={"/icon-newspaper.svg"}
                  alt="Pengumuman"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="flex-shrink-0 w-5 h-5 text-primary-50 transition duration-75"
                />
                <span className="flex-1 ms-3 whitespace-nowrap lg:text-base text-sm">
                  Pengumuman
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-primary-50 hover:bg-primary-50/15 group"
              >
                <Image
                  src={"/icon-timeline.svg"}
                  alt="Timeline"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="flex-shrink-0 w-5 h-5 text-primary-50 transition duration-75"
                />
                <span className="flex-1 ms-3 whitespace-nowrap lg:text-base text-sm">
                  Roadmap
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-primary-50 hover:bg-primary-50/15 group"
              >
                <Image
                  src={"/icon-message.svg"}
                  alt="Message"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="flex-shrink-0 w-5 h-5 text-primary-50 transition duration-75"
                />
                <span className="flex-1 ms-3 whitespace-nowrap lg:text-base text-sm">
                  Forum Diskusi
                </span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/profile"
                className="flex items-center p-4 text-primary-50 hover:bg-primary-50/15 group"
              >
                <Image
                  src={"/icon-account-p.svg"}
                  alt="Profile"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="flex-shrink-0 w-5 h-5 text-primary-50 transition duration-75"
                />
                <span className="flex-1 ms-3 whitespace-nowrap lg:text-base text-sm">
                  Profil
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
