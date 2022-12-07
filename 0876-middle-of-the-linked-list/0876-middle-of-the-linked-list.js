/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let current = head
    let count = 0
    while (current !== null){
        let tmpNext = current.next
        if (tmpNext === null){
            break
        }

        count += 1
        current = tmpNext
    }

    let result = head
    for (let i = 0; i < (count / 2); i++){
        if (!result.next){
            return null
        }

        result = result.next
    }

    return result
};