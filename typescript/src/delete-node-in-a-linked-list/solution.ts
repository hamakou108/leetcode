import { ListNode } from '~/lib/linked-list';

/**
 Do not return anything, modify it in-place instead.
 */
export function deleteNode(root: ListNode | null): void {
  if (root === null || root.next === null) {
    return;
  }

  root.val = root.next.val;
  root.next = root.next.next;
};

