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
 var mergeTwoLists = function(l1, l2) {
    //initialise a new Linkedlist with a dummy ListNode
    let newList = new ListNode(0)

    //Maintain a refrence to the head of the new LinkedList
    let list = newList

    //Whilst both of the passed in lists contain more elements
    while(l1 !== null && l2 !== null){
        //if L1's value is smaller
        if(l1.val < l2.val){
            //add L1's value to the new list 
            newList.next = l1
            // Move L1 to its next element
            l1 = l1.next

        }else{
            //Add L2's value to the new list 
            newList.next = l2
            //Move L2 to its next element 
            l2 = l2.next
        }
        //Move into the next level of the LinkedList for the next iteration
        newList = newList.next

    }

    //If L1 has run out of elements
    if(l1 === null){
        //append L2 to the new List 
        newList.next = l2
    }
    //if L2 has run out of elements 
    else{
        //Append L1 to the new List
        newList.next = l1
    }
    //return refrence name for list
    return list.next
};