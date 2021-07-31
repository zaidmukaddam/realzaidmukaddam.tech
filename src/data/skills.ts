export interface SkillItem {
  header: string;
  items: string[];
}

export const skills: SkillItem[] = [
  {
    header: "Frontend",
    items: [
      "HTML, CSS & SCSS",
      "JavaScript",
      "TypeScript",
      "React & Next.js",
      "Angular",
      "jQuery",
      "XML",
    ],
  },
  {
    header: "Backend",
    items: ["Node", "REST APIs", "MongoDB & MySQL", "C++", "C#", "Python & R", "Java"],
  },
  {
    header: "Other",
    items: [
      "Security in GCP",
      "Networking in GCP",
      "Ethical Hacking",
      "Linux",
      "VSCode",
      "Git & Github",
      "Android Studio",
      "VirtualBox",
    ],
  },
];
