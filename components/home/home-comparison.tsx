import { SectionLead } from "@/components/ui";

type ComparisonRow = {
  label: string;
  values: string[];
};

export function HomeComparison({ rows }: { rows: ComparisonRow[] }) {
  return (
    <section className="section">
      <div className="shell">
        <SectionLead eyebrow="選ばれる理由" title="なぜ私たちなのか" description="一般的な単発監修や制作会社とは、関わり方の深さが異なります。" />
        <div className="comparison-table" role="table" aria-label="比較表">
          <div className="comparison-table__head" role="row">
            <span>比較項目</span>
            <span>私たち</span>
            <span>一般的な医師監修</span>
            <span>一般的な制作会社 / 代理店</span>
          </div>
          {rows.map((row) => (
            <div className="comparison-table__row" role="row" key={row.label}>
              <span>{row.label}</span>
              {row.values.map((value) => (
                <span key={`${row.label}-${value}`}>{value}</span>
              ))}
            </div>
          ))}
        </div>
        <p className="section-footnote">3名の医師体制で、研究・英語・AI・発信まで横断できる点が、単発監修との決定的な違いです。</p>
      </div>
    </section>
  );
}

