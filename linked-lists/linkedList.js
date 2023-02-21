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

    const head = () => _head;

    const tail = () => {
        let curNode = _head;

        while (curNode.getNextNode() !== null) {
            curNode = curNode.getNextNode();
        }
        return curNode;
    }

    const contains = value => {
        let curNode = _head;

        while (curNode.getNextNode() !== null) {
            curNode = curNode.getNextNode();

            if (curNode.getValue() === value) return true;
        }
        return false;
    }

    const find = value => {
        let curNode = _head;
        let idx = 0;

        while (curNode.getNextNode() !== null) {

            curNode = curNode.getNextNode();

            if (curNode.getValue() === value) return idx;

            idx++;
        }
        return null;
    }

    const insertAt = (value, idx) => {
        let prevNode = _head;
        let curNode = prevNode.getNextNode();
        let curIdx = 0;

        const newNode = Node();
        newNode.setValue(value);

        while (curNode !== null) {
            if (curIdx === idx) {
                prevNode.setNextNode(newNode);
                newNode.setNextNode(curNode);
                return;
            };

            prevNode = curNode;
            curNode = curNode.getNextNode();
            curIdx++;
        }
    }

    const removeAt = idx => {
        let prevNode = _head;
        let curNode = prevNode.getNextNode();
        let curIdx = 0;

        while (curNode !== null) {
            if (curIdx === idx) {
                prevNode.setNextNode(curNode.getNextNode());
                return;
            };

            prevNode = curNode;
            curNode = curNode.getNextNode();
            curIdx++;
        }
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
        head,
        tail,
        contains,
        find,
        insertAt,
        removeAt,
        toString
    }
}
