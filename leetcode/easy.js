
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
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next) 
}
  




l3 = new ListNode (3, null)
l2 = new ListNode (2, l3)
l1 = new ListNode (1, l2)

ll3 = new ListNode (3, null)
ll2 = new ListNode (2, ll3)
ll1 = new ListNode (1, ll2)



 var mergeTwoLists = function(list1, list2) {

    while (true) {
        current = current.next
        if (current.next == null) {
            current.next = list2
            return list1
        } 
    }
    
};

console.log(mergeTwoLists(l3, ll3))
