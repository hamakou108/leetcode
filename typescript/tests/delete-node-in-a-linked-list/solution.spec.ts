import { ListNode, deleteNode } from '~/delete-node-in-a-linked-list/solution';

test('example 1', () => {
  const list = new ListNode(
    4,
    new ListNode(
      5,
      new ListNode(
        1,
        new ListNode(
          9,
          null
        )
      )
    )
  );

  const targetListNode = list.next;
  deleteNode(targetListNode);

  expect(list).toEqual(new ListNode(
    4,
    new ListNode(
      1,
      new ListNode(
        9,
        null
      )
    )
  ));
});

test('example 2', () => {
  const list = new ListNode(
    4,
    new ListNode(
      5,
      new ListNode(
        1,
        new ListNode(
          9,
          null
        )
      )
    )
  );

  const targetListNode = list.next!.next;
  deleteNode(targetListNode);

  expect(list).toEqual(new ListNode(
    4,
    new ListNode(
      5,
      new ListNode(
        9,
        null
      )
    )
  ));
});

