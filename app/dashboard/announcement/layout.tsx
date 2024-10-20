"use client"

import FAB from '@/app/components/announcement/fab';
import { usePathname, useRouter } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleFABClick = () => {
    router.push('/dashboard/announcement/post')  
  };
  const showFAB = pathname === '/dashboard/announcement';

  return (
    <div className="h-screen w-full">
        {children}
        {showFAB && (<FAB onClick={handleFABClick} />)}
    </div>
  );
}