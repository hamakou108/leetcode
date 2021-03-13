import { ListNode, linkedListUtil } from '~/lib/linked-list';
import { removeNthFromEnd } from '~/remove-nth-node-from-end-of-list/solution';

test('example 1', () => {
  const list = linkedListUtil().make([1, 2, 3, 4, 5]) as ListNode
  expect(removeNthFromEnd(list, 2)).toEqual(linkedListUtil().make([1, 2, 3, 5]));
});

test('example 2', () => {
  const list = linkedListUtil().make([1]) as ListNode
  expect(removeNthFromEnd(list, 1)).toEqual(linkedListUtil().make([]));
});

test('example 3', () => {
  const list = linkedListUtil().make([1, 2]) as ListNode
  expect(removeNthFromEnd(list, 1)).toEqual(linkedListUtil().make([1]));
});

test('example 4', () => {
  const list = linkedListUtil().make([1, 2]) as ListNode
  expect(removeNthFromEnd(list, 2)).toEqual(linkedListUtil().make([2]));
});

