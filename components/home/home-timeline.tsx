import { SectionLead } from "@/components/ui";

type TimelinePhase = {
  title: string;
  description: string;
};

export function HomeTimeline({ phases }: { phases: TimelinePhase[] }) {
  return (
    <section className="section section--muted">
      <div className="shell">
        <SectionLead eyebrow="30 / 60 / 90日" title="30 / 60 / 90日の進め方" />
        <div className="timeline-grid">
          {phases.map((phase) => (
            <article key={phase.title} className="timeline-card">
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

