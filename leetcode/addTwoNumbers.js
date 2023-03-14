/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//  function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//  }

class ListNode {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function (l1, l2) {

    let previous, current, head
    let carry = false;
    let sum
    while (l1 || l2) {
        if (l1 && l2)
            sum = l1.val + l2.val
        else if (l1)
            sum = l1.val
        else if (l2)
            sum = l2.val

        if (carry == true) {
            sum += 1
        }
        
        if (sum >= 10) {
            sum -= 10
            carry = true
        } else {
            carry = false
        }

        current = new ListNode(sum)
        if (previous)
            previous.next = current
        else
            head = current

        console.log(head)
        if (l1 && l2) {
            l1 = l1.next
            l2 = l2.next
        }
        else if (l1)
            l1 = l1.next
        else if (l2)
            l2 = l2.next
        previous = current
    }
    if (carry) {
        previous.next = new ListNode(1)        
    }
    return head
}

let a1 = [2, 3, 5]
let a2 = [5, 7, 1]

let head1 = new ListNode()
let l1 = head1
for (let i = 0; i < a1.length; i++) {
    if (l1.next) {
        l1 = l1.next
    }
    l1.val = a1[i];
    l1.next = new ListNode();
    console.log(l1);
}





console.log(head)