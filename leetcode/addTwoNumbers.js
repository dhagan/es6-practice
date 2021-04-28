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
var addTwoNumbers = function(l1, l2) {
    let listNodeReturn
    let carry = false;
    while (l1 && l2) {
        let sum = l1.val + l2.val
       
        if (sum >= 10) {
            sum = sum - 10
        } 
         
        if (carry == true) {
            sum = sum + 1
        }
        
        listNodeReturn =  new ListNode( sum, listNodeReturn)
        // {
        //     val: sum,
        //     next: listNodeReturn         
        // }
        
        if ( l1.val + l2.val >= 10)
        {
            carry = true
        } else {
            carry = false
        }
        
        console.log(listNodeReturn)
        l1 = l1.next
        l2 = l2.next
    }
    return listNodeReturn
};

let a1 = [2,3,5]
let a2 = [5,7,1]

let head1 = new ListNode()
let l1 = head1
for ( let i = 0; i < a1.length; i++) {
    if (l1.next) {
        l1 = l1.next
    }
    l1.val = a1[i];
    l1.next = new ListNode();
    console.log(l1);
}





console.log(head)