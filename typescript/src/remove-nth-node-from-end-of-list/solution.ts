import { ListNode } from '~/lib/linked-list';
import { removeNthFromEnd as removeNthFromEnd1 } from './solution1';
import { removeNthFromEnd as removeNthFromEnd2 } from './solution2';

export function removeNthFromEnd(head: ListNode, n: number): ListNode | null {
  return removeNthFromEnd2(head, n);
}

