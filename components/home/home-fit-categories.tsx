import { SectionLead } from "@/components/ui";

type FitCategory = {
  title: string;
  description: string;
};

export function HomeFitCategories({ categories }: { categories: FitCategory[] }) {
  return (
    <section className="section section--deep">
      <div className="shell">
        <SectionLead eyebrow="対象企業" title="こんな企業に向いています" />
        <div className="card-grid card-grid--two">
          {categories.map((item) => (
            <article key={item.title} className="panel panel--dark">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

