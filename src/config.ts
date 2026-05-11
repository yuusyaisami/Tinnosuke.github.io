export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  aboutMe: string;
  skills: string[];
  hero_title: string;
};

export const siteConfig: SiteConfig = {
  name: "Tinnosuke",
  title: "Tinnosuke's Portfolio",
  hero_title: "Welcome to my portfolio!",
  description: "Portfolio website of Tinnosuke",
  accentColor: "#1d4ed8",
  social: {
    email: "gotfather.tanakamichael@gmail.com",
    github: "https://github.com/yuusyaisami",
  },
  aboutMe:
    "Unity/C#を用いたゲーム開発を個人で継続的に行っています。現在はゲーム制作と並行して、拡張性・保守性・パフォーマンスを重視したUnity向けゲームフレームワークの開発にも取り組んでいます。特に、アーキテクチャ設計、Editor拡張、Shader・描画表現などに興味があり、UI Toolkitを用いたツール制作や、URP環境での描画・演出表現について学習しています。個人開発では、企画から実装、UI、調整まで一通り担当しており、短期間でのプロトタイプ制作も継続的に行っています。",
  skills: ["Unity", "C#", "Shader"],
};
