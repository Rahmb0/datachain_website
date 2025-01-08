import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 md:hidden"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
        
        <div className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white 
                        dark:bg-gray-800 p-6 shadow-xl">
          {/* Mobile menu content */}
        </div>
      </Dialog>
    </>
  );
} 