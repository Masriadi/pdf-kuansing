'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Shield, Zap, Globe, Heart, Code, Users, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { type Locale } from '@/lib/i18n/config';
import { getAllTools } from '@/config/tools';

interface AboutPageClientProps {
  locale: Locale;
}

export default function AboutPageClient({ locale }: AboutPageClientProps) {
  const t = useTranslations('aboutPage');
  const tCommon = useTranslations('common');
  const allTools = getAllTools();

  const values = [
    {
      icon: Shield,
      title: t('values.privacy.title'),
      description: t('values.privacy.description'),
    },
    {
      icon: Zap,
      title: t('values.fast.title'),
      description: t('values.fast.description'),
    },
    {
      icon: Globe,
      title: t('values.accessible.title'),
      description: t('values.accessible.description'),
    },
    {
      icon: Heart,
      title: t('values.free.title'),
      description: t('values.free.description'),
    },
    {
      icon: Code,
      title: t('values.openSource.title'),
      description: t('values.openSource.description'),
    },
    {
      icon: Users,
      title: t('values.community.title'),
      description: t('values.community.description'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.08)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-12 md:py-16">
          <div className="container mx-auto px-3">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--color-foreground))] mb-3">
                {t('title', { brand: tCommon('brand') })}
              </h1>
              <p className="text-sm md:text-base text-[hsl(var(--color-muted-foreground))] mb-5">
                {t('description', { brand: tCommon('brand'), count: allTools.length })}
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-10">
          <div className="container mx-auto px-3">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-[hsl(var(--color-foreground))] mb-4 text-center">
                {t('mission.title')}
              </h2>
              <div className="prose prose-base max-w-none text-[hsl(var(--color-muted-foreground))] text-sm leading-relaxed">
                <p className="mb-3">
                  {t('mission.p1', { brand: tCommon('brand') })}
                </p>
                <p className="mb-3">
                  {t('mission.p2', { brand: tCommon('brand') })}
                </p>
                <p>
                  {t('mission.p3', { brand: tCommon('brand') })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-10 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-3">
            <h2 className="text-xl font-bold text-[hsl(var(--color-foreground))] mb-6 text-center">
              {t('values.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} size="sm" hover>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-md bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center">
                        <Icon className="h-4 w-4 text-[hsl(var(--color-primary))]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[hsl(var(--color-foreground))] mb-1">
                          {value.title}
                        </h3>
                        <p className="text-xs text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-10">
          <div className="container mx-auto px-3">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-[hsl(var(--color-foreground))] mb-4 text-center">
                {t('technology.title')}
              </h2>
              <div className="prose prose-base max-w-none text-[hsl(var(--color-muted-foreground))] text-sm leading-relaxed">
                <p className="mb-3">
                  {t('technology.description', { brand: tCommon('brand') })}
                </p>
                <ul className="list-disc pl-5 space-y-1.5 mb-3">
                  <li>{t.rich('technology.list.nextjs', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('technology.list.wasm', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('technology.list.workers', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('technology.list.pdflib', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('technology.list.indexeddb', { strong1: (chunks) => <strong>{chunks}</strong> })}</li>
                </ul>
                <p>
                  {t('technology.summary')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 bg-[hsl(var(--color-primary)/0.05)]">
          <div className="container mx-auto px-3">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-xl font-bold text-[hsl(var(--color-foreground))] mb-2">
                {t('cta.title')}
              </h2>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-5">
                {t('cta.description', { brand: tCommon('brand'), count: allTools.length })}
              </p>
              <Link href={`/${locale}/tools`}>
                <Button variant="primary" size="sm">
                  {t('cta.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
