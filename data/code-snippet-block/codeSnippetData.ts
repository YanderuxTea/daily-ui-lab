import { FileBraces, FileCode, FileTerminal, LucideIcon } from "lucide-react";

export type CodeSnippetData = {
  icon: string;
  title: string;
  tag: string;
  classnameTag: string;
  code: string;
};
export const iconsCodeSnippet: Record<string, LucideIcon> = {
  FileCode: FileCode,
  FileTerminal: FileTerminal,
  FileBraces: FileBraces,
};
export const tsData: CodeSnippetData = {
  icon: "FileCode",
  title: "useLocalStorage.ts",
  tag: "TypeScript",
  classnameTag: "bg-csb-ts-dim text-csb-ts",
  code: `const useLocalStorage = <T>(
  key: string,
  initialValue: T
) => {
  const [value, setValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  return [value, setValue] as const;
};`,
};
export const bashData: CodeSnippetData = {
  icon: "FileTerminal",
  title: "deploy.sh",
  tag: "Bash",
  classnameTag: "bg-csb-bash-dim text-csb-bash",
  code: `git clone https://github.com/user/repo.git
cd repo && pnpm install

pnpm build && pnpm start`,
};
export const jsonData: CodeSnippetData = {
  icon: "FileBraces",
  title: "package.json",
  tag: "JSON",
  classnameTag: "bg-csb-json-dim text-csb-json",
  code: `{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}`,
};
