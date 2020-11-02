export interface Node {
  id: string;
  name: string;
  parentId: string;
  children: Array<Node>;
}
