import { SectionLead } from "@/components/ui";

export function HomeIssues({ issues }: { issues: string[] }) {
  return (
    <section className="section">
      <div className="shell">
        <SectionLead eyebrow="課題整理" title="こんな課題はありませんか" description="医療の正確性だけでも、集客だけでも足りない企業に向けた設計です。" />
        <div className="card-grid card-grid--three">
          {issues.map((issue) => (
            <article key={issue} className="panel panel--soft">
              <p>{issue}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

