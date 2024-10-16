import Image from "next/image";

interface DashboardNavbarProps {
  setIsSidebarOpen: (value: boolean) => void;
  isSidebarOpen: boolean;
}

export default function DashboardNavbar({ setIsSidebarOpen, isSidebarOpen }: DashboardNavbarProps) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-primary-50 text-neutral-900">
      <div className="py-3.5 lg:py-4 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end lg:gap-2 gap-1">
            <button
              onClick={() => {
                setIsSidebarOpen(!isSidebarOpen);
              }}
              type="button"
              className="inline-flex items-center p-2 text-sm text-neutral-900 rounded-lg hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-900"
            >
              <Image priority src={"/nav-hamburger.svg"} width={0} height={0} sizes="100vw" alt="Open Sidebar" className="lg:h-6 md:h-5 h-4 w-full" />
            </button>
            <a href="/" className="flex ms-2 md:me-24">
              <Image src="/cheva-logo.png" width={1280} height={1280} className="lg:h-12 md:h-11 sm:h-10 h-9 w-full me-3" alt="Cheva Logo" />
              <Image src="/cheva-logo-text.png" width={670} height={260} className="lg:h-12 md:h-11 sm:h-10 h-9 w-full me-3" alt="Cheva Logo" />
            </a>
          </div>

          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div className="flex flex-row lg:gap-6 md:gap-5 gap-4 justify-center items-center">
                <button type="button">
                  <Image width={0} height={0} sizes="100vw" src={"/icon-notification.svg"} className="lg:h-7 md:h-6 h-5 w-full" alt="notification" />
                </button>
                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-primary-200">
                  <Image className="lg:w-12 md:w-11 sm:w-10 w-9 lg:h-12 md:h-11 sm:h-10 h-9 rounded-full object-cover object-center" src="/default-profile.jpeg" alt="user photo" width={0} height={0} sizes="100vw" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
