"use client"

import FAB from '@/app/components/announcement/fab';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const handleFABClick = () => {
    // Handle the FAB click
    console.log('FAB clicked!');
  };

  return (
    <div className="h-screen w-full">
        {children}
        <FAB onClick={handleFABClick} />
    </div>
  );
}