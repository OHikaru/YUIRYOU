export type SiteLocale = "ja" | "en";

type CompanyInfoItem = {
  label: string;
  value: string;
  href?: string;
};

type CompanyPrinciple = {
  label: string;
  headline: string;
  subheadline?: string;
  body: string[];
};

type CompanyProfileEntry = {
  eyebrow: string;
  title: string;
  description: string;
  infoEyebrow: string;
  infoTitle: string;
  infoItems: CompanyInfoItem[];
  principles: CompanyPrinciple[];
};

export const companyProfileCopy: Record<SiteLocale, CompanyProfileEntry> = {
  ja: {
    eyebrow: "Company Profile",
    title: "株式会社YUIRYOUの基本情報と、事業の根底にある考え方",
    description:
      "会社としての基本情報と、YUIRYOUが目指す医療のあり方を、理念・ミッション・ビジョンの単位で整理しています。",
    infoEyebrow: "基本情報",
    infoTitle: "会社基本情報",
    infoItems: [
      { label: "正式名称", value: "株式会社YUIRYOU" },
      { label: "登記日", value: "2026年1月23日 登記済" },
      { label: "登記住所", value: "〒700-0921 岡山県岡山市北区東古松209-1-1303" },
      { label: "電話番号", value: "050-5574-7878", href: "tel:05055747878" }
    ],
    principles: [
      {
        label: "理念",
        headline: "人と医療を、やさしく、つなぐ",
        subheadline: "すべてのヒトが、自分の健康と生き方を安心して選べる社会へ",
        body: []
      },
      {
        label: "ミッション",
        headline: "女性の自己決定を支える、やさしく高度な医療インフラをつくる。",
        body: [
          "変化する女性の心と身体に、必要な医療と情報が届く社会へ。",
          "対話主体医療専門職オンラインコンシェルジュ、地域連動体験型医療ツーリズム、データ駆動型のWell-beingに資する選択的医療の仕組みを提供します。"
        ]
      },
      {
        label: "ビジョン",
        headline: "いつでも、どこでも、おもてなしを通じて自己決定を支える医療へ。",
        body: [
          "医療は、単なる治療ではなく、人生を支える存在であるべきです。",
          "患者も医療者も、互いに学び合い、フィードバックを通じて成長する。",
          "そんな『自己決定できる人と社会』を育む未来型の医療を目指します。"
        ]
      }
    ]
  },
  en: {
    eyebrow: "Company Profile",
    title: "Corporate information and the philosophy behind YUIRYOU",
    description:
      "This section brings together the registered company information and the philosophy, mission, and vision that guide YUIRYOU.",
    infoEyebrow: "Corporate Information",
    infoTitle: "Registered company information",
    infoItems: [
      { label: "Registered company name", value: "株式会社YUIRYOU" },
      { label: "Registration date", value: "Registered on January 23, 2026" },
      { label: "Registered address", value: "209-1-1303 Higashifurumatsu, Kita-ku, Okayama-shi, Okayama 700-0921, Japan" },
      { label: "Phone", value: "+81-50-5574-7878", href: "tel:+815055747878" }
    ],
    principles: [
      {
        label: "Philosophy",
        headline: "Gently connecting people and healthcare.",
        subheadline: "Toward a society where every person can choose their health and way of living with confidence.",
        body: []
      },
      {
        label: "Mission",
        headline: "Build gentle yet advanced medical infrastructure that supports women's self-determination.",
        body: [
          "We aim for a society where the right medical care and information reach women as their minds and bodies change.",
          "We provide dialog-centered online concierge support with medical professionals, region-linked experiential medical tourism, and data-driven systems for selective care that contributes to well-being."
        ]
      },
      {
        label: "Vision",
        headline: "Toward healthcare that supports self-determination through hospitality, anytime and anywhere.",
        body: [
          "Healthcare should not be limited to treatment. It should support the course of a person's life.",
          "Patients and healthcare professionals should learn from one another and grow through feedback.",
          "We aim for a future-oriented form of healthcare that nurtures people and societies capable of self-determination."
        ]
      }
    ]
  }
};
