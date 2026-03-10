export type HomeLocale = "ja" | "en";

type HomeHighlight = {
  label: string;
  title: string;
  description: string;
};

type HomePageCopy = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: HomeHighlight[];
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    labels: string[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    proof: string[];
  };
};

export const homePageCopy: Record<HomeLocale, HomePageCopy> = {
  ja: {
    hero: {
      eyebrow: "Femtech / Healthcare SaaS / Medical Media",
      title: "医療監修の先まで伴走。医師3名が、研究・AI・発信まで法人実務を前に進めます。",
      description:
        "フェムテック、ヘルスケアSaaS、医療メディア、海外準備中のスタートアップ向けに、英語・RCT・研究実務、医療AI・情報品質、YouTube・広告設計を横断支援します。",
      highlights: [
        {
          label: "Research",
          title: "英語・RCT・研究実務",
          description: "PoC設計、文献レビュー、論文化準備までを事業の前進につなげます。",
        },
        {
          label: "AI",
          title: "医療AI・情報品質設計",
          description: "AI活用ルール、出典管理、監修フローを事前に整えます。",
        },
        {
          label: "Content",
          title: "YouTube・広告・発信設計",
          description: "医療の正確性を保ちながら、読了・再生・CVにつながる発信へ落とし込みます。",
        },
      ],
      primaryCta: "無料で相談範囲を整理する",
      secondaryCta: "料金プランを見る",
      note: "法人向け / 患者個人の相談は対象外 / 初回は課題整理が中心",
    },
    pricing: {
      eyebrow: "料金",
      title: "入口から経営レベル伴走まで、関与の深さで選べます。",
      description:
        "色で差をつけるのではなく、何が含まれるかで比較しやすい料金表に整理しました。診断パックから始め、必要に応じて継続伴走へ移行できます。",
      labels: ["入口設計", "定例壁打ち", "施策伴走", "経営伴走"],
    },
    finalCta: {
      eyebrow: "ご相談",
      title: "相談前に、何をどこまで外部化すべきかを30分で整理します。",
      description:
        "監修だけで足りる案件か、研究設計・AI運用・発信設計まで必要かを切り分けます。初回は売り込みではなく、相談範囲の整理を中心に進めます。",
      primaryCta: "無料で相談範囲を整理する",
      secondaryCta: "インサイトを見る",
      proof: ["法人向けのみ", "価格公開あり", "初回は課題整理が中心"],
    },
  },
  en: {
    hero: {
      eyebrow: "Femtech / Healthcare SaaS / Medical Media",
      title: "Beyond medical review. Three physicians move research, AI, and content execution forward for healthcare businesses.",
      description:
        "For femtech, healthcare SaaS, medical media, and globally minded startups, we support research operations, medical AI quality design, and content execution in one team.",
      highlights: [
        {
          label: "Research",
          title: "English, RCTs, and research operations",
          description: "We connect PoC design, literature review, and publication readiness to business progress.",
        },
        {
          label: "AI",
          title: "Medical AI and quality governance",
          description: "We define review rules, source control, and supervision workflows before scale creates risk.",
        },
        {
          label: "Content",
          title: "YouTube, ads, and content systems",
          description: "We align medical accuracy with content that actually drives watch time, reads, and conversion.",
        },
      ],
      primaryCta: "Clarify scope in a free consultation",
      secondaryCta: "View pricing",
      note: "For companies only / No patient consultations / First call focuses on scope definition",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Start with diagnosis, then choose the level of involvement you need.",
      description:
        "The structure is designed for clarity: compare deliverables and depth of support rather than color coding or vague labels.",
      labels: ["Entry", "Advisory", "Growth", "Strategic"],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Use the first 30 minutes to decide what should stay in-house and what should be externalized.",
      description:
        "We help separate simple medical review needs from cases that require research design, AI governance, or content execution support.",
      primaryCta: "Clarify scope in a free consultation",
      secondaryCta: "Read insights",
      proof: ["Company-only support", "Transparent pricing", "Scope-first first meeting"],
    },
  },
};

