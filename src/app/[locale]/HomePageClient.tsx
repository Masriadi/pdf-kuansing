'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Zap, Wrench, Lock, Sparkles, Edit, FileImage, FolderOpen, Settings, ShieldCheck, Star } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ToolGrid } from '@/components/tools/ToolGrid';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getAllTools, getToolsByCategory, getPopularTools } from '@/config/tools';
import { type Locale } from '@/lib/i18n/config';
import { CATEGORY_INFO, type ToolCategory } from '@/types/tool';

interface HomePageClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

// ... (previous imports)

// ... (props interface)

// ... (previous imports)

// ... (props interface)

export default function HomePageClient({ locale, localizedToolContent }: HomePageClientProps) {
  const t = useTranslations();
  const allTools = getAllTools();
  const popularTools = getPopularTools();

  // Feature highlights (same as before)
  const features = [
    {
      icon: ShieldCheck,
      titleKey: 'home.features.privacy.title',
      descriptionKey: 'home.features.privacy.description',
      color: 'text-green-500',
    },
    {
      icon: Zap,
      titleKey: 'home.features.free.title',
      descriptionKey: 'home.features.free.description',
      color: 'text-yellow-500',
    },
    {
      icon: Wrench,
      titleKey: 'home.features.powerful.title',
      descriptionKey: 'home.features.powerful.description',
      color: 'text-blue-500',
    },
  ];

  // Category icons mapping
  const categoryIcons: Record<ToolCategory, typeof Edit> = {
    'edit-annotate': Edit,
    'convert-to-pdf': FileImage,
    'convert-from-pdf': FileImage,
    'organize-manage': FolderOpen,
    'optimize-repair': Settings,
    'secure-pdf': ShieldCheck,
  };

  const categoryTranslationKeys: Record<ToolCategory, string> = {
    'edit-annotate': 'editAnnotate',
    'convert-to-pdf': 'convertToPdf',
    'convert-from-pdf': 'convertFromPdf',
    'organize-manage': 'organizeManage',
    'optimize-repair': 'optimizeRepair',
    'secure-pdf': 'securePdf',
  };

  // Category sections to display
  const categoryOrder: ToolCategory[] = [
    'edit-annotate',
    'convert-to-pdf',
    'convert-from-pdf',
    'organize-manage',
    'optimize-repair',
    'secure-pdf',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]">
      <Header locale={locale} />

      <main id="main-content" className="flex-1 relative" tabIndex={-1}>
        {/* Hero Section */}
        <section
          className="relative overflow-hidden pt-12 pb-14 lg:pt-16 lg:pb-18"
          aria-labelledby="hero-title"
        >
          {/* Subtle gradient background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-[hsl(var(--color-primary)/0.08)] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-[hsl(var(--color-accent)/0.08)] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-24 left-1/2 w-72 h-72 bg-[hsl(var(--color-secondary)/0.15)] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000" />
          </div>

          <div className="container mx-auto px-3 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Brand Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-[hsl(var(--color-background)/0.8)] border border-[hsl(var(--color-primary)/0.2)] shadow-sm backdrop-blur-md transition-all hover:bg-[hsl(var(--color-background))]">
                <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--color-primary))]" aria-hidden="true" />
                <span className="text-xs font-medium text-[hsl(var(--color-primary))]">
                  {t('common.brand')}
                </span>
              </div>

              {/* Hero Title */}
              <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                <span className="text-[hsl(var(--color-foreground))]">{t('home.hero.title')} </span>
                <span className="text-gradient block mt-1 pb-1">{t('home.hero.highlight')}</span>
              </h1>

              {/* Hero Subtitle */}
              <p className="text-sm md:text-base text-[hsl(var(--color-muted-foreground))] mb-6 max-w-xl mx-auto leading-relaxed">
                {t('home.hero.subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link href={`/${locale}/tools`}>
                  <Button variant="primary" size="md" className="h-9 px-6 text-sm shadow-md hover:shadow-primary/20 transition-all hover:-translate-y-0.5">
                    {t('home.hero.cta')}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-xs text-[hsl(var(--color-muted-foreground))] bg-[hsl(var(--color-background)/0.5)] px-3 py-1.5 rounded-full border border-[hsl(var(--color-border))] backdrop-blur-sm">
                  <Lock className="h-3.5 w-3.5 text-[hsl(var(--color-success))]" aria-hidden="true" />
                  <span>{t('common.footer.privacyBadge')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 relative z-20" aria-label="Features">
          <div className="container mx-auto px-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} size="sm" className="p-4 text-center glass-card border-0 hover:-translate-y-0.5 transition-transform duration-200" hover={false}>
                    <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[hsl(var(--color-primary)/0.1)] mb-2.5 text-[hsl(var(--color-primary))]">
                      <Icon className={`h-4 w-4 ${feature.color}`} aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-semibold text-[hsl(var(--color-foreground))] mb-1">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-xs text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                      {t(feature.descriptionKey)}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Tools Section */}
        <section className="py-10 bg-[hsl(var(--color-muted)/0.5)]" aria-labelledby="popular-tools-heading">
          <div className="container mx-auto px-3">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-2 rounded-full bg-[hsl(var(--color-primary)/0.1)] border border-[hsl(var(--color-primary)/0.2)]">
                <Star className="h-3.5 w-3.5 text-[hsl(var(--color-primary))]" aria-hidden="true" />
                <span className="text-xs font-medium text-[hsl(var(--color-primary))]">
                  {t('home.popularTools.badge')}
                </span>
              </div>
              <h2 id="popular-tools-heading" className="text-xl font-bold text-[hsl(var(--color-foreground))] mb-2">
                {t('home.popularTools.title')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] max-w-xl mx-auto text-sm">
                {t('home.popularTools.description')}
              </p>
            </div>
            <ToolGrid
              tools={popularTools}
              locale={locale}
              localizedToolContent={localizedToolContent}
            />
          </div>
        </section>

        <section className="py-10" aria-labelledby="featured-tools-heading">
          <div className="container mx-auto px-3">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-3">
              <div className="max-w-xl">
                <h2 id="featured-tools-heading" className="text-lg font-bold text-[hsl(var(--color-foreground))] mb-1">
                  {t(`home.categories.${categoryTranslationKeys['organize-manage']}`)}
                </h2>
                <p className="text-[hsl(var(--color-muted-foreground))] text-sm">
                  {t(`home.categoriesDescription.${categoryTranslationKeys['organize-manage']}`)}
                </p>
              </div>
              <Link href={`/${locale}/tools`}>
                <Button variant="outline" size="sm" className="group text-xs h-8">
                  {t('common.navigation.tools')}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </Button>
              </Link>
            </div>
            <ToolGrid
              tools={getToolsByCategory('organize-manage').slice(0, 8)}
              locale={locale}
              localizedToolContent={localizedToolContent}
            />
          </div>
        </section>

        {/* Tool Categories Section */}
        <section className="py-10 bg-[hsl(var(--color-muted)/0.3)]" aria-labelledby="categories-heading">
          <div className="container mx-auto px-3">
            <div className="text-center mb-6">
              <h2 id="categories-heading" className="text-xl font-bold text-[hsl(var(--color-foreground))] mb-2">
                {t('home.categoriesSection.title')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] max-w-xl mx-auto text-sm">
                {t('home.categoriesSection.description', { count: allTools.length })}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {categoryOrder.map((category) => {
                const categoryTools = getToolsByCategory(category);
                const Icon = categoryIcons[category];
                const categoryName = t(`home.categories.${categoryTranslationKeys[category]}`);
                const categoryDescription = t(`home.categoriesDescription.${categoryTranslationKeys[category]}`);

                return (
                  <Link
                    key={category}
                    href={`/${locale}/tools?category=${category}`}
                    className="group"
                  >
                    <Card size="sm" className="h-full glass-card hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 border-[hsl(var(--color-border)/0.6)]">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                          <Icon className="h-4 w-4 text-[hsl(var(--color-primary))]" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm text-[hsl(var(--color-foreground))] mb-0.5 group-hover:text-[hsl(var(--color-primary))] transition-colors">
                            {categoryName}
                          </h3>
                          <p className="text-[11px] text-[hsl(var(--color-muted-foreground))] line-clamp-2 mb-1.5">
                            {categoryDescription}
                          </p>
                          <div className="flex items-center text-[10px] font-medium text-[hsl(var(--color-primary))]">
                            <span className="bg-[hsl(var(--color-primary)/0.1)] px-1.5 py-0.5 rounded">
                              {t('home.categoriesSection.toolsCount', { count: categoryTools.length })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10" aria-label="Statistics">
          <div className="container mx-auto px-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-[hsl(var(--color-border))]">
              <div className="p-2">
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-0.5">
                  {allTools.length}+
                </div>
                <div className="text-[10px] font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                  {t('home.stats.pdfTools')}
                </div>
              </div>
              <div className="p-2">
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-0.5">
                  100%
                </div>
                <div className="text-[10px] font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                  {t('home.stats.freeToUse')}
                </div>
              </div>
              <div className="p-2">
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-0.5">
                  9
                </div>
                <div className="text-[10px] font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                  {t('home.stats.languages')}
                </div>
              </div>
              <div className="p-2">
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-0.5">
                  0
                </div>
                <div className="text-[10px] font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                  {t('home.stats.filesUploaded')}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
