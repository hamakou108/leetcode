import { ListNode, linkedListUtil } from '~/lib/linked-list';

export function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let iterator = head;
  const array: any[] = [];

  while (iterator.next !== null) {
    array.push(iterator.val);
    iterator = iterator.next;
  }

  array.push(iterator.val);

  return linkedListUtil().make(array.reverse());
}

