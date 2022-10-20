
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

reversemap = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
}

const intToRoman = (i) => {
    ret = []
    // lesson here - object is not iteratable - which makes sense to me at this moment
    //for (const[key, value] of map) {

    // two lessons here - 1) the object entries are sorted numerically? lexgraphic?  we can use reverse() to get 
    // us out of this. 

    for (const [key, value] of Object.entries(reversemap).reverse())  {
        console.log(key, value, i)
        while (i > key) {
            i = i - key
            ret.push(value)
        }
    }
    return ret.join("")
   
}

console.log(intToRoman(1999))

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


var mergeTwoLists = function (l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1 !== null) {
        current.next = l1;
    }

    if (l2 !== null) {
        current.next = l2;
    }

    return dummy.next;
};

//console.log(mergeTwoLists(l1, ll1))


array = [3, 2, 1, 3]
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


const removeElement = (a, num) => {
    for (let index = a.length; index >= 0; index--) {
        if (a[index] == num) {
            a.splice(index, 1)
        }
    }
    return a
}



array = [1, 3, 5, 6]
target = 2
array = [1, 3, 5, 6]
target = 2
array[1]
target = 1
var searchInsert = function (array, target) {
    if (target > array[array.length - 1])
        return array.length
    if (target < array[0])
        return 0
    for (let index = 0; index < array.length; index++) {
        if (target == array[index]) {
            return index
        }
        if (target > array[index] && target < array[index + 1]) {
            return index + 1
        }
    }
};

var lengthOfLastWord = function (s) {
    a = s.trim().split(" ")
    return a[a.length - 1].toString().length

};


Math.max()
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] != 9) {
            digits[i] = digits[i] + 1
            return digits
        } else {
            digits[i] = 0
        }
    }

    digits.unshift(1)
    return digits

};


var addBinary = function (a, b) {


    if (a.length > b.length) {
        longer = a.split("")
        shorter = b.split("")
    } else {
        longer = b.split("")
        shorter = a.split("")
    }

    carry = 0
    for (let i = longer.length - 1; i >= 0; i--) {
        i_s = i - (longer.length - shorter.length)
        if (i_s >= 0)
            e_s = parseInt(shorter[i_s])
        else
            e_s = 0
        e_l = parseInt(longer[i])

        longer[i] = e_l + e_s


        if (longer[i] > 1) {
            if (longer[i] == 2)
                longer[i] = 0
            if (longer[i] == 3)
                longer[i] = 1

            if ((i - 1) < 0) {
                longer.unshift(1)
            } else {

                longer[i - 1] = parseInt(longer[i - 1]) + 1
            }
        }
    }

    return longer.join("")

};


const addBinary1 = () => {
    a = "1010101"
    b = "1111111"
    s =  BigInt("0b" + a) + BigInt("0b" + b)
    
    console.log(s.toString(2))
}

//addBinary1()


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    root = head 
    if (!head) {
        return null
    }
    if (head.next == null)
        return head
    
    while (head && head.next) {
        if(head.next && head.val == head.next.val) {
            head.next = head.next.next
        }
        else {
            head = head.next
        }
    }

    return root
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


 var getChildren = function(root, ret) {
    if(root) {              
        getChildren(root.left, ret)
        ret.push(root.val)
        getChildren(root.right, ret)
    }
}
var inorderTraversal = function(root) {
    ret = []
    if (root == null)
        return []
    if (root.left == null && root.right == null) {
        return [root.val]
    }
    getChildren(root, ret)
    return ret
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    // check corner cases
  
    if (p == null  && q == null)
        return true
    if (p == null || q == null)
        return false
    if (p.val != q.val) 
        return false
    return ( isSameTree(p.right, q.right) && isSameTree(p.left, q.left))
};


// container with the most water
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    max = 0
    for ( let i = height.length - 1; i > 0; i--) {
        if (height[i] * i < max)
            continue
        for ( let j = 0; j <= i - 1; j++) {
            min = Math.min(height[i], height[j])
            max = Math.max(min *( i-j), max)
            //console.log(i, j, height[j], height[i], i-j, min, max, min * i-j)
        }
    }
    return max
    
};