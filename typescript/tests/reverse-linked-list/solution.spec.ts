import { ListNode, linkedListUtil } from '~/lib/linked-list';
import { reverseList } from '~/reverse-linked-list/solution';

test('example 1', () => {
  const list = linkedListUtil().make([1, 2, 3, 4, 5]) as ListNode
  expect(reverseList(list)).toEqual(linkedListUtil().make([5, 4, 3, 2, 1]));
});

test('example 2', () => {
  const list = linkedListUtil().make([1, 2]) as ListNode
  expect(reverseList(list)).toEqual(linkedListUtil().make([2, 1]));
});

test('example 3', () => {
  const list = linkedListUtil().make([]) as ListNode
  expect(reverseList(list)).toEqual(linkedListUtil().make([]));
});

test('example 4', () => {
  const list = linkedListUtil().make([1]) as ListNode
  expect(reverseList(list)).toEqual(linkedListUtil().make([1]));
});

