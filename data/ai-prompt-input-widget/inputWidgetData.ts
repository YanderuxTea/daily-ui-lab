type PromptData = {
  id: string;
  title: string;
  promptText: string;
};
export const promptData: PromptData[] = [
  { id: "script", title: "✨ Напиши скрипт", promptText: "Напиши скрипт для" },
  { id: "review", title: "📝 Ревью кода", promptText: "Сделай ревью кода" },
  { id: "bug", title: "🔍 Найди баг", promptText: "Найди баг в функции" },
];
export const modelData = [
  { id: "gpt", model: "GPT-4o" },
  { id: "claude", model: "Claude 3.5" },
  { id: "deep", model: "DeepSeek" },
] as const;
export type ModelId = (typeof modelData)[number]["model"];
