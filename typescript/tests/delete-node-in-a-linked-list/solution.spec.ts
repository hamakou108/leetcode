import { deleteNode } from '~/delete-node-in-a-linked-list/solution';
import { ListNode, linkedListUtil } from '~/lib/linked-list';

test('example 1', () => {
  const list = linkedListUtil().make([4, 5, 1, 9]) as ListNode;

  const targetListNode = linkedListUtil().getNodeByIndex(list, 1);
  deleteNode(targetListNode);

  expect(list).toEqual(linkedListUtil().make([4, 1, 9]));
});

test('example 2', () => {
  const list = linkedListUtil().make([4, 5, 1, 9]) as ListNode;

  const targetListNode = linkedListUtil().getNodeByIndex(list, 2);
  deleteNode(targetListNode);

  expect(list).toEqual(linkedListUtil().make([4, 5, 9]));
});

