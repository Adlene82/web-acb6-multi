import { CtaBand, ExpertiseGridSection, HomeHero, MethodSection, ProjectsSection, ProofStrip, SectorsSection } from '@/components/sections';
import { getRealisationList } from '@/lib/realisations';
import { getExpertiseList, getHomePageContent } from '@/lib/site-content';
import { isLocale, localizePath, type Locale } from '@/lib/locale';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export default async function HomePage({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const [homePage, expertises, projects, tPages, tCommon, tHome] = await Promise.all([
    getHomePageContent(locale as Locale),
    getExpertiseList(locale as Locale),
    getRealisationList(locale as Locale),
    getTranslations({ locale: locale as Locale, namespace: 'pages' }),
    getTranslations({ locale: locale as Locale, namespace: 'common' }),
    getTranslations({ locale: locale as Locale, namespace: 'home' }),
  ]);

  const featuredProjects = projects.filter((project) => project.featured);
  const featuredExpertises = expertises.filter((item) => item.featuredOnHome !== false);

  return (
    <>
      <HomeHero content={homePage} />
      <ExpertiseGridSection eyebrow={tCommon('expertises')} title={homePage.expertisesTitle} intro={homePage.expertisesIntro} items={featuredExpertises} />
      <SectorsSection eyebrow={tHome('contextsEyebrow')} title={homePage.contextsTitle} intro={homePage.contextsIntro} sectors={homePage.sectors} proofPoints={homePage.proofPoints} />
      <MethodSection eyebrow={tHome('methodEyebrow')} title={homePage.methodTitle} intro={homePage.methodIntro} />
      <ProjectsSection
        eyebrow={tHome('projectsEyebrow')}
        title={tPages('realisations.projectListTitle')}
        intro={tPages('realisations.projectListIntro')}
        projects={featuredProjects}
        seeAllLabel={tCommon('seeAllRealisations')}
        projectLabel={tCommon('seeProject')}
        seeAllHref={localizePath('/realisations', locale as Locale)}
      />
      <ProofStrip eyebrow={tHome('proofEyebrow')} title={homePage.proofStripTitle} metrics={homePage.proofStripMetrics} />
      <CtaBand
        eyebrow={tHome('ctaEyebrow')}
        primaryLink={{ ...homePage.finalCta.link, href: localizePath(homePage.finalCta.link.href, locale as Locale) }}
        secondaryLink={{ label: tCommon('expertises'), href: localizePath('/expertises', locale as Locale), variant: 'ghost' }}
        helperText={homePage.finalCta.helperText}
      />
    </>
  );
}
