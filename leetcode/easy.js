
// map = new Map()
// map.set ('I',1 )
// map.set ('V', 5)
// map.set ('X', 10)
// map.set('L', 50)
// map.set ('C', 100)
// map.set('D', 500)
// map.set('M', 1000)


map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
}

const romanToInt = (s) => {
    let res = 0
    let array = s.split("")

    // for (const key of a) {
    //     res += map[key]
    // }

    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        if ((element == "I" || element == "X" || element == "C") && index != array.length - 1) {
            console.log(element + array[index + 1])
            if (map[element + array[index + 1]]) {
                res += map[element + array[index + 1]]
                index++
                continue;
            }
        }
        console.log(element)
        res += map[element]

    }

    return res
}

let s = "III"
s = 'MCMXCIV'
//console.log(romanToInt(s))


strs = ["flower", "flower", "flower"]

longestCommonPrefix = function (strs) {
    map = {}
    pre = ''

    if (strs.length == 1)
        return strs[0]
    let maxLength = strs.reduce((previousValue, str) => {
        return previousValue < str.length ? str.length : previousValue
    }, 0)

    preLength = 0
    for (let index = 1; index <= maxLength; index++) {
        pre = strs[0].substr(0, index)
        preFound = true
        for (let j = 1; j < strs.length; j++) {
            if (pre != strs[j].substr(0, index)) {
                preFound = false
                break;
            }
        }
        if (preFound) {
            preLength++
        }
    }

    if (preLength) {
        return strs[0].substr(0, preLength)
    } else {
        return ''
    }
};

//console.log(longestCommonPrefix(strs))

var isValid = function (s) {
    array = s.split("")

    stack = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (element == '[' || element == "(" || element == "{") {
            stack.push(element)
        } else {
            if (stack.length == 0) {
                return false
            } else if ((element == ']' && stack[stack.length - 1] == '[') ||
                (element == '}' && stack[stack.length - 1] == '{') ||
                (element == ')' && stack[stack.length - 1] == '(')) {
                stack.pop()
            } else {
                stack.push(element)
            }
        }
        console.log(stack)
    }
    if (stack.length > 0)
        return false
    return true

}

s = "[{{}}(())[[]]]"
// console.log(isValid(s))


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}





l3 = new ListNode(5, null)
l2 = new ListNode(3, l3)
l1 = new ListNode(1, l2)

ll3 = new ListNode(6, null)
ll2 = new ListNode(4, ll3)
ll1 = new ListNode(2, ll2)


l1 = new ListNode(2)
ll1 = new ListNode(1)

// var mergeTwoLists = function (list1, list2) {

//     if (list1 == null)
//         return list2
//     if (list2 == null)
//         return list1
//     if (list1 == null && list2 == null)
//         return new ListNode()

//     if (list1.val > list2.val) {
//         head = list2
//     } else {
//         head = list1
//     }

//     c1 = list1
//     c2 = list2
//     while (c1 && c2) {
//         n1 = c1.next
//         n2 = c2.next
//         if (c1.val > c2.val) {
//             c2.next = c1
//             c1.next = n2
//         } else
//         {
//             c1.next = c2
//             c2.next = n1
//         }
//         // advance current
//         c1 = n1
//         c2 = n2

//         console.log(list1, list2)
//     }
//     return head

// };


var mergeTwoLists = function(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;  

    while(l1 !== null && l2 !== null){
      if(l1.val <= l2.val){
        current.next = l1;
        l1 = l1.next;        
      } else{
        current.next = l2;
        l2 = l2.next;        
      }
      current = current.next;
    }

  	if(l1 !== null){
      current.next = l1;        
    }

    if(l2 !== null){
      current.next = l2;
    }

    return dummy.next;
};

//console.log(mergeTwoLists(l1, ll1))


array = [3,2,1,3]
// const removeElement = (a, num) =>
// {
//     let b = a.map(element => {
//         if (element == num) {
//             //return "_"
//         } else
//         {
//             return element
//         }
//     });
//     return b
// }


const removeElement = (a, num) =>
{
    for (let index = a.length; index >= 0; index--) {
        if (a[index] == num) {
            a.splice(index,1)
        }
    }
    return a
}



array = [1,2,4,5,6,7]
target = 3
var searchInsert = function(array, target) {
    if (target > array[array.length])
        return array.length + 1
    for (let index = 0; index < array.length - 1; index++) {
        if (array[index] <= target && array[index+1] > target) {
            return index + 1
        }
    }
}; 

console.log(searchInsert(array, 3))