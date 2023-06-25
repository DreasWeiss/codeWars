function Node(data) {
    this.data = data;
    this.next = null;
}

const removeDuplicates = (headNode) => {
    let cur = headNode;
    if (headNode === null) return null;
    let visited = new Set([cur.data]);
    while (cur.next) {
        let nextnode = cur.next;
        if (visited.has(nextnode.data)) {
            cur.next = nextnode.next;
        } else {
            visited.add(nextnode.data);
            cur = nextnode;
        }
    }
    return headNode;
};
