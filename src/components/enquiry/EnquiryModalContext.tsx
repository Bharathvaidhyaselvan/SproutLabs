import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { EnquiryModal } from './EnquiryModal';

type EnquiryModalContextValue = {
  isOpen: boolean;
  defaultProgram: string;
  openEnquiry: (options?: { program?: string }) => void;
  closeEnquiry: () => void;
};

const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultProgram, setDefaultProgram] = useState('');

  const openEnquiry = useCallback((options?: { program?: string }) => {
    setDefaultProgram(options?.program ?? '');
    setIsOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeEnquiry();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, closeEnquiry]);

  const value = useMemo(
    () => ({ isOpen, defaultProgram, openEnquiry, closeEnquiry }),
    [isOpen, defaultProgram, openEnquiry, closeEnquiry],
  );

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
      <EnquiryModal
        isOpen={isOpen}
        defaultProgram={defaultProgram}
        onClose={closeEnquiry}
      />
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error('useEnquiryModal must be used within EnquiryModalProvider');
  }
  return context;
}
