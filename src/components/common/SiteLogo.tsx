export const SITE_LOGO_SRC = '/logo/Sprout Lab Logo.png';

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className = 'h-10 w-auto' }: SiteLogoProps) {
  return (
    <img
      src={SITE_LOGO_SRC}
      alt="SproutLabs"
      className={className}
      width={200}
      height={48}
      decoding="async"
    />
  );
}
