/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const map = new Map()
    while(headB !== null){
        map.set(headB,true)
        headB = headB.next
    }
    
    while(headA !== null){
        if (map.has(headA)) {
            return headA
        }
        headA = headA.next
    }
    
    return null
};