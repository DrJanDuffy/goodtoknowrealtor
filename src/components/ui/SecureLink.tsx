import Link from 'next/link';
import { getSecureRelAttributes } from '@/lib/security';

interface SecureLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  [key: string]: any;
}

export function SecureLink({ 
  href, 
  children, 
  className = '', 
  target = '_self',
  rel,
  ...props 
}: SecureLinkProps) {
  // Determine if this is an external link
  const isExternal = href.startsWith('http') || href.startsWith('//');
  
  // Get secure rel attributes for external links
  const secureRel = isExternal ? getSecureRelAttributes(href) : '';
  
  // Combine provided rel with secure rel
  const finalRel = rel ? `${rel} ${secureRel}`.trim() : secureRel;
  
  // Force external links to open in new tab
  const finalTarget = isExternal ? '_blank' : target;
  
  if (isExternal) {
    return (
      <a
        href={href}
        target={finalTarget}
        rel={finalRel}
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link
      href={href}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
