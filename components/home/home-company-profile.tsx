import { SectionLead } from "@/components/ui";
import { companyProfileCopy } from "@/content/company-profile";
import type { SiteLocale } from "@/lib/locale";

export function HomeCompanyProfile({ locale = "ja" }: { locale?: SiteLocale }) {
  const copy = companyProfileCopy[locale];

  return (
    <section className="section section--muted">
      <div className="shell">
        <SectionLead eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="company-profile-grid">
          <article className="panel panel--profile company-profile-card">
            <p className="eyebrow">{copy.infoEyebrow}</p>
            <h3>{copy.infoTitle}</h3>
            <dl className="company-profile-list">
              {copy.infoItems.map((item) => (
                <div key={item.label} className="company-profile-list__row">
                  <dt>{item.label}</dt>
                  <dd>{item.href ? <a href={item.href}>{item.value}</a> : item.value}</dd>
                </div>
              ))}
            </dl>
          </article>
          <div className="company-values-stack">
            {copy.principles.map((principle) => (
              <article key={principle.label} className="panel panel--soft company-value-card">
                <p className="eyebrow">{principle.label}</p>
                <h3>{principle.headline}</h3>
                {principle.subheadline ? <p className="company-value-card__subheadline">{principle.subheadline}</p> : null}
                <div className="company-value-card__body">
                  {principle.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
