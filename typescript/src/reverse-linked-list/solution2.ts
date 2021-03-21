import { ListNode } from '~/lib/linked-list';

export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr !== null) {
    const nextTemp = curr.next;
    curr.next = prev;

    prev = curr;
    curr = nextTemp;
  }


  return prev;
}

