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

  const currentLocale = locale as Locale;
  const [homePage, expertises, projects, tPages, tCommon, tHome] = await Promise.all([
    getHomePageContent(currentLocale),
    getExpertiseList(currentLocale),
    getRealisationList(currentLocale),
    getTranslations({ locale: currentLocale, namespace: 'pages' }),
    getTranslations({ locale: currentLocale, namespace: 'common' }),
    getTranslations({ locale: currentLocale, namespace: 'home' }),
  ]);

  const featuredProjects = projects.filter((project) => project.featured);
  const featuredExpertises = expertises.filter((item) => item.featuredOnHome !== false);

  return (
    <>
      <HomeHero content={homePage} locale={currentLocale} />
      <ExpertiseGridSection eyebrow={tCommon('expertises')} title={homePage.expertisesTitle} intro={homePage.expertisesIntro} items={featuredExpertises} />
      <SectorsSection locale={currentLocale} eyebrow={tHome('contextsEyebrow')} title={homePage.contextsTitle} intro={homePage.contextsIntro} sectors={homePage.sectors} proofPoints={homePage.proofPoints} />
      <MethodSection locale={currentLocale} eyebrow={tHome('methodEyebrow')} title={homePage.methodTitle} intro={homePage.methodIntro} />
      <ProjectsSection
        locale={currentLocale}
        eyebrow={tHome('projectsEyebrow')}
        title={tPages('realisations.projectListTitle')}
        intro={tPages('realisations.projectListIntro')}
        projects={featuredProjects}
        seeAllLabel={tCommon('seeAllRealisations')}
        projectLabel={tCommon('seeProject')}
        seeAllHref={localizePath('/realisations', currentLocale)}
      />
      <ProofStrip eyebrow={tHome('proofEyebrow')} title={homePage.proofStripTitle} metrics={homePage.proofStripMetrics} />
      <CtaBand
        locale={currentLocale}
        eyebrow={tHome('ctaEyebrow')}
        primaryLink={{ ...homePage.finalCta.link, href: localizePath(homePage.finalCta.link.href, currentLocale) }}
        secondaryLink={{ label: tCommon('expertises'), href: localizePath('/expertises', currentLocale), variant: 'ghost' }}
        helperText={homePage.finalCta.helperText}
      />
    </>
  );
}
