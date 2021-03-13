/**
 * Definition for singly-linked list.
 */
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function linkedListUtil() {
  const make = (arr: any[]): ListNode | null => {
    if (arr.length === 0) {
      return null;
    }

    return new ListNode(arr.shift(), make(arr));
  }

  const getNodeByIndex = (list: ListNode, index: number): ListNode => {
    let current = list;

    if (index < 0) {
      throw new Error('Index must be grater than or equal to zero');
    }

    for (let i = 0; i < index; i++) {
      if (current.next === null) {
          throw new Error('Index must be smaller than length of the list');
      }

      current = current.next;
    }

    return current;
  }

  return {
    make,
    getNodeByIndex
  }
}

