// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 

// Example 1:


// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.


// solutions:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

var mergeTwoLists = function(l1, l2) {
    //     instantiate a new List
        let list = new ListNode()
        
    //     ListNode {val: 0, next: null}
        let head = list
        
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val){
                list.next = new ListNode(l1.val)
                l1 = l1.next
            } else {
                list.next = new ListNode(l2.val)
                l2 = l2.next
            }
            list = list.next
        }
        if (l1 !== null) {
            list.next = l1
        }
        if (l2 !== null) {
            list.next = l2
        }
        return head.next
    };
    
    
    // var mergeTwoLists = function(l1, l2) {
        
    //     let prevHead = new ListNode(0), prev = prevHead;
        
    //     while(l1 !== null && l2 !== null){
    //         if(l1.val <= l2.val){
    //             prevHead.next = l1;
    //             l1 = l1.next
    //         }else{
    //             prevHead.next = l2;
    //             l2 = l2.next
    //         }
    //         prevHead = prevHead.next
    //     }
    //     prevHead.next = (l1 == null) ? l2 : l1
    //     return prev.next
    // };
    