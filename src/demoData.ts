export interface Todo {
  id: number;
  title: string;
  description: string;
}

export const todos: Todo[] = [
  {
    id: 1,
    title: "First item",
    description: "Not quite what we expect. By default flex items will fill vertical space of their parent element.",
  },
  {
    id: 2,
    title: "Second item",
    description: "Not quite what we expect. By default flex items will fill vertical space of their parent element.",
  },
  {
    id: 3,
    title: "Third item",
    description: "Not quite what we expect. By default flex items will fill vertical space of their parent element.",
  },
  {
    id: 4,
    title: "Fourthly item",
    description: "Not quite what we expect. By default flex items will fill vertical space of their parent element.",
  },
  {
    id: 5,
    title: "Fifth item",
    description: "Not quite what we expect. By default flex items will fill vertical space of their parent element.",
  },
];
