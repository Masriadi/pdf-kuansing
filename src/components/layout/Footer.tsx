'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Shield, Lock, FileCheck, Github, Twitter, Mail, Globe } from 'lucide-react';
import { type Locale, locales, localeConfig, getLocalizedPath } from '@/lib/i18n/config';
import { saveLanguagePreference } from './LanguageSelector';

export interface FooterProps {
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();

  const footerLinks = [
    { href: `/${locale}/about`, label: t('navigation.about') },
    { href: `/${locale}/faq`, label: t('navigation.faq') },
    { href: `/${locale}/privacy`, label: t('navigation.privacy') },
    { href: `/${locale}/contact`, label: t('navigation.contact') },
  ];

  const handleLanguageChange = (newLocale: Locale) => {
    saveLanguagePreference(newLocale);
    const newPath = getLocalizedPath(pathname, newLocale);
    router.push(newPath);
  };

  return (
    <footer
      className="w-full border-t border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] pt-8 pb-6"
      role="contentinfo"
    >
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-3">
            <Link
              href={`/${locale}`}
              className="group flex items-center gap-2 text-base font-semibold text-[hsl(var(--color-foreground))]"
              aria-label={`${t('brand')} - ${t('navigation.home')}`}
            >
              <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden shadow-sm transition-transform group-hover:scale-105 rounded">
                <img
                  src="/images/logo/logo-kuansing.png"
                  alt=""
                  className="h-full w-full object-cover"
                  aria-hidden="true"
                />
              </div>
              <span data-testid="footer-brand-name">{t('brand')}</span>
            </Link>
            <p className="text-xs text-[hsl(var(--color-muted-foreground))] leading-relaxed max-w-xs">
              {t('tagline') || 'Professional, secure, and free PDF tools for everyone. No installation required.'}
            </p>

            <div className="flex gap-3">
              <a href="https://github.com/Masriadi/pdf-kuansing" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-primary))] hover:text-white transition-all">
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--color-foreground))] mb-3">
              Resources
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-primary))] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[hsl(var(--color-muted-foreground))] group-hover:bg-[hsl(var(--color-primary))] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--color-foreground))] mb-3">
              Security
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-start gap-2">
                <div className="mt-0.5 p-0.5 rounded bg-[hsl(var(--color-success)/0.1)] text-[hsl(var(--color-success))]">
                  <Lock className="h-3 w-3" />
                </div>
                <div>
                  <span className="block text-xs font-medium text-[hsl(var(--color-foreground))]">Client-side processing</span>
                  <span className="text-[10px] text-[hsl(var(--color-muted-foreground))]">Files never leave your device</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 p-0.5 rounded bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))]">
                  <FileCheck className="h-3 w-3" />
                </div>
                <div>
                  <span className="block text-xs font-medium text-[hsl(var(--color-foreground))]">No file uploads</span>
                  <span className="text-[10px] text-[hsl(var(--color-muted-foreground))]">100% private & secure</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Privacy Badge Block */}
          <div className="flex flex-col justify-start">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--color-foreground))] mb-3">
              Compliance
            </h3>
            <div
              className="flex items-center gap-2.5 p-3 bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-lg shadow-sm"
            >
              <div className="h-8 w-8 rounded-full bg-[hsl(var(--color-success)/0.1)] flex items-center justify-center flex-shrink-0">
                <Shield className="h-4 w-4 text-[hsl(var(--color-success))]" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-bold text-[hsl(var(--color-foreground))]">GDPR Compliant</div>
                <div className="text-[10px] text-[hsl(var(--color-muted-foreground))]">{t('footer.privacyBadge')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="py-4 border-t border-[hsl(var(--color-border))]">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="h-3.5 w-3.5 text-[hsl(var(--color-muted-foreground))]" />
            <span className="text-xs font-medium text-[hsl(var(--color-foreground))]">
              {t('buttons.selectLanguage')}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {locales.map((loc) => {
              const config = localeConfig[loc];
              const isActive = loc === locale;
              return (
                <button
                  key={loc}
                  onClick={() => handleLanguageChange(loc)}
                  className={`
                    px-2.5 py-1 text-xs rounded-full transition-all
                    ${isActive
                      ? 'bg-[hsl(var(--color-primary))] text-white font-medium'
                      : 'bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-primary)/0.1)] hover:text-[hsl(var(--color-primary))]'
                    }
                  `}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {config.nativeName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-5 border-t border-[hsl(var(--color-border))] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
            &copy; {currentYear} {t('brand')}. {t('footer.copyright', { year: '' }).replace(/^\d{4}\s*/, '')}
          </p>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/terms`} className="text-[10px] text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]">Terms</Link>
            <Link href={`/${locale}/privacy`} className="text-[10px] text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]">Privacy</Link>
            <Link href={`/${locale}/cookies`} className="text-[10px] text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

