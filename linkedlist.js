class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
a.next = b;
b.next = c;
c.next = d;
const deleteValue = (head, target) => {
    if (head.val === target) {
        return head.next;
    }
    let prev = null;
    let curr = head;
    while (curr !== null) {
        if (curr.val === target) {
            prev.next = curr.next;
        }
        prev = curr;
        curr = curr.next;
    }
    return head;

}
const print = (head) => {
    if (head === null) return;
    console.log(head.val);
    print(head.next);
}
print(a);
const newHead = deleteValue(a, "c");
console.log('-');
print(newHead);
