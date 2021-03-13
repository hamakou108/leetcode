import { ListNode } from '~/lib/linked-list';

export function removeNthFromEnd(head: ListNode, n: number): ListNode | null {
  if (n < 1) {
    throw new Error('Number is invalid');
  }

  const dummy = new ListNode(0, null);
  dummy.next = head;
  let first: ListNode | null = dummy;
  let second = dummy;

  for (let i = 1; i <= n + 1; i++) {
    first = first!.next;
  }

  while (first != null) {
    first = first.next;
    second = second.next as ListNode;
  }

  second.next = second.next!.next;
  return dummy.next;
};

