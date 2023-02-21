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

    const prepend = value => {
        const oldFirst = _head.getNextNode();

        const newNode = Node();
        newNode.setValue(value);

        _head.setNextNode(newNode);
        newNode.setNextNode(oldFirst);
    }

    const size = () => {
        let curNode = _head;
        let numEl = 0;

        while (curNode.getNextNode() !== null) {
            numEl++;
            curNode = curNode.getNextNode();
        }
        return numEl;
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
        prepend,
        size,
        toString
    }
}

myList = LinkedList()

myList.append('test')
myList.append('new')
myList.prepend('first')
myList.prepend('zero')
console.log(myList.toString())
console.log(myList.size())