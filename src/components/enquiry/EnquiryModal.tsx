import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { MessageCircleHeart, X } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

type EnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
};

export function EnquiryModal({ isOpen, onClose, defaultProgram = '' }: EnquiryModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const timer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>('input, select, textarea, button')?.focus();
    }, 50);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.button
            type="button"
            aria-label="Close enquiry form"
            className="absolute inset-0 bg-brand-navy/55 backdrop-blur-[8px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[28px] border border-brand-paleblue bg-white shadow-2xl sm:rounded-[40px]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-brand-paleblue px-5 py-5 sm:px-8 sm:py-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-teal/15 text-brand-teal">
                  <MessageCircleHeart className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h2
                    id="enquiry-modal-title"
                    className="font-heading text-xl font-black text-brand-navy sm:text-2xl"
                  >
                    Send an Enquiry
                  </h2>
                  <p className="mt-1 text-sm text-brand-navy/65">
                    Share your details and we will get back to you shortly.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy transition hover:bg-brand-cream"
                aria-label="Close"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
              <EnquiryForm
                key={defaultProgram || 'default'}
                defaultProgram={defaultProgram}
                idPrefix="modal-enquiry"
              />
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
