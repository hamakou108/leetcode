import { reverseList as reverseList1 } from './solution1';
import { reverseList as reverseList2 } from './solution2';
import { reverseList as reverseList3 } from './solution3';
import { ListNode } from '~/lib/linked-list';

export function reverseList(head: ListNode | null): ListNode | null {
  return reverseList3(head);
}

