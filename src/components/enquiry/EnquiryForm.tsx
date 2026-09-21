import { useEffect, useId, useState, type FormEvent, type ReactNode } from 'react';
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Mail,
  MessageSquareText,
  Phone,
  Send,
  UserRound,
} from 'lucide-react';
import { Button } from '../common/Button';
import { cn } from '../../lib/utils';

export const ENQUIRY_PROGRAM_OPTIONS = [
  { value: '', label: 'Select a program...' },
  { value: 'stem', label: 'Foundational STEM Experiences' },
  { value: 'coding', label: 'Coding and Digital Creativity' },
  { value: 'innovation', label: 'Innovation and Design Thinking' },
  { value: 'certified', label: 'Certified Three-Month Learning Pathways' },
  { value: 'competitions', label: 'Competitions and Challenge-Based Learning' },
  { value: 'custom', label: 'Custom Programs for Institutions' },
  { value: 'junior', label: 'Junior Innovators Pathway' },
  { value: 'explorers', label: 'STEM Explorers Pathway' },
  { value: 'pioneers', label: 'Tech Pioneers Pathway' },
  { value: 'other', label: 'Other Inquiry' },
] as const;

export type EnquiryFormValues = {
  name: string;
  email: string;
  phone: string;
  institution: string;
  program: string;
  message: string;
};

const EMPTY_VALUES: EnquiryFormValues = {
  name: '',
  email: '',
  phone: '',
  institution: '',
  program: '',
  message: '',
};

type EnquiryFormProps = {
  defaultProgram?: string;
  idPrefix?: string;
  onSubmitted?: () => void;
  className?: string;
};

function FieldShell({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-brand-teal">
        {icon}
      </span>
      {children}
    </div>
  );
}

export function EnquiryForm({
  defaultProgram = '',
  idPrefix = 'enquiry',
  onSubmitted,
  className,
}: EnquiryFormProps) {
  const reactId = useId();
  const prefix = `${idPrefix}-${reactId}`;
  const [values, setValues] = useState<EnquiryFormValues>({
    ...EMPTY_VALUES,
    program: defaultProgram,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setValues((current) => ({ ...current, program: defaultProgram || current.program }));
  }, [defaultProgram]);

  const updateField = <K extends keyof EnquiryFormValues>(key: K, value: EnquiryFormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = values.name.trim();
    const email = values.email.trim();
    const phone = values.phone.trim();
    const message = values.message.trim();

    if (!name || !email || !phone || !message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    const programLabel =
      ENQUIRY_PROGRAM_OPTIONS.find((option) => option.value === values.program)?.label ||
      'Not specified';

    const subject = encodeURIComponent(`SproutLabs Enquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Institution: ${values.institution.trim() || 'Not provided'}`,
        `Preferred Program: ${programLabel}`,
        '',
        'Message / Requirement:',
        message,
      ].join('\n'),
    );

    try {
      window.location.href = `mailto:learn@sproutlabs.in?subject=${subject}&body=${body}`;
      setStatus('success');
      setValues({ ...EMPTY_VALUES, program: defaultProgram });
      onSubmitted?.();
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please email learn@sproutlabs.in directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className={cn('flex flex-col items-center gap-4 py-8 text-center', className)}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal/15 text-brand-teal">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </div>
        <h3 className="font-heading text-2xl font-black text-brand-navy">Enquiry Ready to Send</h3>
        <p className="max-w-md text-brand-navy/70 leading-relaxed">
          Your email app should open with the enquiry details. If it does not, write to{' '}
          <a href="mailto:learn@sproutlabs.in" className="font-semibold text-brand-teal hover:underline">
            learn@sproutlabs.in
          </a>
          .
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-2"
          onClick={() => setStatus('idle')}
        >
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-2xl border border-transparent bg-brand-cream/50 py-4 pl-12 pr-5 outline-none transition-all focus:border-brand-teal focus:bg-white';

  return (
    <form className={cn('flex flex-col gap-6', className)} onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={`${prefix}-name`} className="text-sm font-bold text-brand-navy">
            Name *
          </label>
          <FieldShell icon={<UserRound className="h-5 w-5" aria-hidden />}>
            <input
              type="text"
              id={`${prefix}-name`}
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(event) => updateField('name', event.target.value)}
              className={inputClass}
              placeholder="John Doe"
              required
            />
          </FieldShell>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${prefix}-email`} className="text-sm font-bold text-brand-navy">
            Email *
          </label>
          <FieldShell icon={<Mail className="h-5 w-5" aria-hidden />}>
            <input
              type="email"
              id={`${prefix}-email`}
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => updateField('email', event.target.value)}
              className={inputClass}
              placeholder="john@example.com"
              required
            />
          </FieldShell>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={`${prefix}-phone`} className="text-sm font-bold text-brand-navy">
            Phone Number *
          </label>
          <FieldShell icon={<Phone className="h-5 w-5" aria-hidden />}>
            <input
              type="tel"
              id={`${prefix}-phone`}
              name="phone"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => updateField('phone', event.target.value)}
              className={inputClass}
              placeholder="+91 xxxxx xxxxx"
              required
            />
          </FieldShell>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${prefix}-institution`} className="text-sm font-bold text-brand-navy">
            Institution (Optional)
          </label>
          <FieldShell icon={<Building2 className="h-5 w-5" aria-hidden />}>
            <input
              type="text"
              id={`${prefix}-institution`}
              name="institution"
              autoComplete="organization"
              value={values.institution}
              onChange={(event) => updateField('institution', event.target.value)}
              className={inputClass}
              placeholder="School / College Name"
            />
          </FieldShell>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${prefix}-program`} className="text-sm font-bold text-brand-navy">
          Preferred Program
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-brand-teal">
            <GraduationCap className="h-5 w-5" aria-hidden />
          </span>
          <select
            id={`${prefix}-program`}
            name="program"
            value={values.program}
            onChange={(event) => updateField('program', event.target.value)}
            className={cn(inputClass, 'cursor-pointer appearance-none pr-12')}
          >
            {ENQUIRY_PROGRAM_OPTIONS.map((option) => (
              <option key={option.value || 'empty'} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-navy/40"
            aria-hidden
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${prefix}-message`} className="text-sm font-bold text-brand-navy">
          Message / Requirement *
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-4 text-brand-teal">
            <MessageSquareText className="h-5 w-5" aria-hidden />
          </span>
          <textarea
            id={`${prefix}-message`}
            name="message"
            rows={4}
            value={values.message}
            onChange={(event) => updateField('message', event.target.value)}
            className="w-full resize-none rounded-2xl border border-transparent bg-brand-cream/50 py-4 pl-12 pr-5 outline-none transition-all focus:border-brand-teal focus:bg-white"
            placeholder="Tell us how we can help..."
            required
          />
        </div>
      </div>

      {status === 'error' && errorMessage ? (
        <p className="rounded-2xl bg-brand-coral/10 px-4 py-3 text-sm font-medium text-brand-coral" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="primary"
        disabled={status === 'submitting'}
        className="mt-2 gap-2 py-4"
      >
        {status === 'submitting' ? 'Preparing Enquiry...' : 'Send Enquiry'}
        <Send className="h-5 w-5" aria-hidden />
      </Button>
    </form>
  );
}
