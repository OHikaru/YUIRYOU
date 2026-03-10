import Image from "next/image";
import Link from "next/link";

import { SectionLead } from "@/components/ui";

type SupportArea = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export function HomeSupportAreas({ supportAreas }: { supportAreas: SupportArea[] }) {
  return (
    <section className="section section--muted">
      <div className="shell">
        <SectionLead eyebrow="支援領域" title="5つの支援領域を、1つのチームで" />
        <div className="card-grid card-grid--five">
          {supportAreas.map((area) => (
            <article key={area.title} className="panel panel--service">
              <Image src={area.icon} alt={`${area.title}のアイコン`} width={72} height={72} />
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <Link href={area.href}>詳細を見る</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

