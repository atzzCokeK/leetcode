/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    if (head === null) return false
    
    const array = []
    const toArray = (node) =>{
        if(node === null) return 
        array.push(node.val)
        toArray(node.next)
    }
    toArray(head)
    console.log(array)
    
    let end = array.length - 1
    let start = 0
    while(start <= end){
        if(array[start] === array[end]){
            start++
            end--
            continue;
        }
        return false;
    }
    
    return true
};