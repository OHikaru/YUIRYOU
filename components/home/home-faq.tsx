import type { FaqItem } from "@/content/site";
import { SectionLead } from "@/components/ui";

export function HomeFaq({ faq }: { faq: FaqItem[] }) {
  return (
    <section className="section">
      <div className="shell narrow-shell">
        <SectionLead eyebrow="FAQ" title="よくある質問" />
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

