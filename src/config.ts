export const siteConfig = {
  name: "あばらんち",
  title: "Senior Software Engineer",
  description: "Portfolio website of あばらんち",
  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe:
    "Unity/C#を用いたゲーム開発を個人で継続的に行っています。現在はゲーム制作と並行して、拡張性・保守性・パフォーマンスを重視したUnity向けゲームフレームワークの開発にも取り組んでいます。特に、アーキテクチャ設計、Editor拡張、Shader・描画表現などに興味があり、UI Toolkitを用いたツール制作や、URP環境での描画・演出表現について学習しています。個人開発では、企画から実装、UI、調整まで一通り担当しており、短期間でのプロトタイプ制作も継続的に行っています。",
  skills: ["Unity", "C#", "Shader"],
  projects: [
    {
      name: "MakiMaki Radio Talk!",
      description:
        "二つの選択を選択し、ステータスを上げていくゲーム。選択肢の内容は、ラジオトークの内容に沿っており、選択肢を選ぶことで、ラジオトークの内容が変化していきます。",
      link: "https://unityroom.com/games/makimakiradiotalk",
      skills: ["Unity", "C#"],
    },
    {
      name: "Fox towerDefense",
      description:
        "タワーディフェンスゲーム。プレイヤーはタワーを配置して敵の進行を阻止します。戦略的な配置とタイミングが重要です。",
      link: "https://unityroom.com/games/foxrtd",
      skills: ["Unity", "C#"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
