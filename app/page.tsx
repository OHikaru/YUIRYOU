import type { Metadata } from "next";

import {
  HomeComparison,
  HomeFaq,
  HomeFinalCta,
  HomeFitCategories,
  HomeHero,
  HomeIssues,
  HomePricing,
  HomeProcess,
  HomeSupportAreas,
  HomeTeam,
  HomeTimeline,
} from "@/components/home";
import { JsonLd } from "@/components/ui";
import { homePageCopy } from "@/content/home-page-copy";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { getHomePageData } from "@/lib/site-data";

const heroCopy = homePageCopy.ja.hero;

export const metadata: Metadata = buildMetadata({
  title: heroCopy.title,
  description: heroCopy.description,
  path: "/",
});

export default async function HomePage() {
  const { settings, teamMembers, supportAreas, comparisonRows, fitCategories, supportFlow, timelinePhases } = await getHomePageData();

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: absoluteUrl("/") }],
  };

  return (
    <>
      <JsonLd data={homeSchema} />
      <HomeHero trustChips={settings.trustChips ?? []} />
      <HomeIssues issues={settings.issueCards ?? []} />
      <HomeSupportAreas supportAreas={supportAreas} />
      <HomeComparison rows={comparisonRows} />
      <HomeFitCategories categories={fitCategories} />
      <HomeProcess supportFlow={supportFlow} />
      <HomeTimeline phases={timelinePhases} />
      <HomeTeam members={teamMembers} />
      <HomePricing plans={settings.pricingPlans ?? []} />
      <HomeFaq faq={settings.globalFaq ?? []} />
      <HomeFinalCta />
    </>
  );
}

