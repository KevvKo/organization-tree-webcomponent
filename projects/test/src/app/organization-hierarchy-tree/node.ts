export interface Node {
  id: string;
  name: string;
  description: string;
  organization: string;
}
export interface NodeTree {
  id: string;
  node: Node;
  parentId: string;
  children: NodeTree[];
}
