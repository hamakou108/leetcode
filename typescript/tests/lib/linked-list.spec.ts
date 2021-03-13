import { ListNode, linkedListUtil } from '~/lib/linked-list';

describe('linkedListUtil make', () => {
  test('creates linked lists from array', () => {
    expect(linkedListUtil().make([1, 2, 3])).toEqual(new ListNode(1, new ListNode(2, new ListNode(3, null))));
  });

  test('cannot create linked lists from empty array', () => {
    expect(linkedListUtil().make([])).toBeNull();
  });
});

describe('linkedListUtil getNodeByIndex', () => {
  test('gets from index', () => {
    const list = linkedListUtil().make([1, 2, 3]) as ListNode;
    expect(linkedListUtil().getNodeByIndex(list, 1)).toEqual(new ListNode(2, new ListNode(3, null)));
  });

  test('throw error when index is invalid', () => {
    const list = linkedListUtil().make([1, 2, 3]) as ListNode;
    expect(() => linkedListUtil().getNodeByIndex(list, -1)).toThrow();
    expect(() => linkedListUtil().getNodeByIndex(list, 3)).toThrow();
    expect(() => linkedListUtil().getNodeByIndex(list, 100)).toThrow();
  });
});

