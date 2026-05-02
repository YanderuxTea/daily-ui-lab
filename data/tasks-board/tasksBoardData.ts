export type TypeTask = {
  id: string;
  title: string;
  tag: string;
  date: string;
  user: string;
};
export type TasksBoardData = {
  id: string;
  color: string;
  tasks: TypeTask[];
  title: string;
};
export const tasksBoardData: TasksBoardData[] = [
  {
    id: "implementation",
    color: "bg-kb-todo",
    tasks: [],
    title: "К выполнению",
  },
  { id: "process", color: "bg-kb-wip", tasks: [], title: "В процессе" },
  { id: "done", color: "bg-kb-done", tasks: [], title: "Готово" },
];
