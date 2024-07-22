interface TreeNode {
  id: number;
  name: string;
  parentId: number | null;
  children?: TreeNode[];
}

export function buildTree(
  data: TreeNode[],
  parentId: number | null = null
): TreeNode[] {
  return data
    .filter((item) => item.parentId === parentId)
    .map((item) => ({
      ...item,
      children: buildTree(data, item.id),
    }));
}
