// components/FAB.tsx
import React from 'react';

interface FABProps {
  onClick: () => void;
}

const FAB: React.FC<FABProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-16 right-16 z-50 
                 px-6 py-3 rounded-xl bg-orange-500 
                 text-white font-medium flex items-center gap-2
                 drop-shadow-lg hover:bg-orange-600 
                 active:scale-95 transition-all duration-200"
    >
      <span className="text-xl">+</span> 
      Buat Berita Baru
    </button>
  );
};

export default FAB;