/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = (head) => {
    if (!head || !head.next){
        return null
    }
    
    const set = new Set()
    let tmp = head
    while(tmp){
        if (set.has(tmp)){
            return tmp
        } else {
            set.add(tmp)
            tmp = tmp.next
        }
    }

    return null
};
