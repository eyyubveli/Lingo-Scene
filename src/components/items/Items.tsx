import { Question } from "../../types/QuestionTypes";

export const questionItems: Question[] = [
  {
    name: "Lion King Movie",
    src: "/videos/The Lion King.mp4",
    level: "basic",
    answer: "Tell me its not true",
    variants: ["Mənə bunun doğru olmadığını söylə", "Mənə yalan söyləmə"],
    correctAnswer: 0,
  },
  {
    name: "Monsters University",
    src: "/videos/Monsters University.mp4",
    level: "basic",
    answer: "What are you doing up there? B : i can't go back to jaill! ",
    variants: [
      "Orada nə edirsən? Mən həbsxanaya qayıda bilmərəm!",
      "Orada nə edirsən mən səninlə gələ bilmərəm",
    ],
    correctAnswer: 1,
  },

  {
    name: "Rise of the Guardians",
    src: "/videos/Rise of the Guardians.mp4",
    level: "basic",
    answer:
      "I don't know who you were in your past life. But in this life, you're guardian",
    variants: [
      "Keçmiş həyatınızda kim olduğunuzu bilmirəm. Amma bu həyatda sən qoruyucusan",
      "Keçmiş həyatınızda kim olduğunuz mənə maraqlı deyi. Amma bu həyatda sən qoruyucusan",
    ],
    correctAnswer: 0,
  },
];
