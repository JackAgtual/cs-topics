function Node() {
    let _value = null;
    let _next = null;

    const setNextNode = newNode => _next = newNode;

    const getNextNode = () => _next;

    const setValue = value => _value = value;

    const getValue = () => _value;

    return {
        setNextNode,
        getNextNode,
        setValue,
        getValue
    }
}

function LinkedList() {
    const _head = Node();

    const append = value => {
        let curNode = _head;

        while (curNode.getNextNode() !== null) {
            curNode = curNode.getNextNode();
        }

        const newNode = Node();
        newNode.setValue(value);

        curNode.setNextNode(newNode);
    }

    const toString = () => {
        let curNode = _head;
        let printStr = '[head] -> '

        while (curNode.getNextNode() !== null) {
            curNode = curNode.getNextNode();
            printStr += `${curNode.getValue()} -> `;
        }

        return printStr + `[null]`;
    }

    return {
        append,
        toString
    }
}

myList = LinkedList()

console.log(myList.toString())
myList.append('test')
console.log(myList.toString())
myList.append('new')
console.log(myList.toString())