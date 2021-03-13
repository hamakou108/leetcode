import { ListNode } from '~/lib/linked-list';

export function removeNthFromEnd(head: ListNode, n: number): ListNode | null {
  if (n < 1) {
    throw new Error('Number is invalid');
  }

  let iterator = head;
  let sz = 1;
  while (iterator.next !== null) {
    sz++;
    iterator = iterator.next;
  }

  if (n > sz) {
    throw new Error('Number is invalid');
  }

  const nFromStart = sz - n;
  if (nFromStart === 0) {
    return head.next;
  }

  iterator = head;
  for (let i = 0; i < nFromStart - 1; i++) {
    iterator = iterator!.next as ListNode;
  }
  iterator.next = iterator!.next!.next;

  return head;
};

