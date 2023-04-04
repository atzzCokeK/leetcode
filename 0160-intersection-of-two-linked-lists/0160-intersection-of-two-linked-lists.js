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
    const set = new Set()
    while(headB !== null){
        set.add(headB,true)
        headB = headB.next
    }
    
    while(headA !== null){
        if (set.has(headA)) {
            return headA
        }
        headA = headA.next
    }
    
    return null
};