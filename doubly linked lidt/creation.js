class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  delete(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          // Only one node in the list
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          // Removing the head
          this.head = this.head.next;
          this.head.prev = null;
        } else if (current === this.tail) {
          // Removing the tail

          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          // Removing from the middle
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        this.size--;
        return;
      }

      current = current.next;
    }
  }

  insertAt_indedx(data, index) {
    let newnode = new Node(data);
    if (index == 0) {
      newnode.next = this.head;
      this.head.prev = newnode;
      this.head = newnode;
    } else if (index == this.size) {
      newnode.pre = this.tail;
      this.tail.next = newnode;
      this.tail = this.tail.next;
    } else {
      let count = 0;
      let preivous;
      let current = this.head;
      while (count < index) {
        count++;
        preivous = current;
        current = current.next;
      }

      console.log("count value", count);
      newnode.next = current;
      preivous.next = newnode;
    }
  }
  deletion(index) {
    if (index < 0 || index >= this.size) {
      console.log("Index not found");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.pre = null;
      }
    } else {
      let current = this.head;
      let previous;
      let count = 0;

      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }

      previous.next = current.next;

      if (current === this.tail) {
        this.tail = previous;
        this.tail.next = null;
      } else {
        current.next.pre = previous;
      }
    }

    this.size--;
  }

  display() {
    let current = this.head;
    let str = "";

    while (current) {
      str += current.data + "<-->";
      current = current.next;
    }

    console.log(str);
    console.log("size is ", this.size);
  }
}

// Example usage:
const doublyList = new DoublyLinkedList();
doublyList.append(1);
doublyList.append(2);
doublyList.append(3);
doublyList.append(5);
doublyList.append(7);
doublyList.append(8);
doublyList.append(9);
//   doublyList.display(); // Output: 0 <-> 1 <-> 2 <-> 3
//   doublyList.prepend(9);
//   doublyList.prepend(90);
doublyList.display(); // Output: 0 <-> 1 <-> 2 <-> 3

// doublyList.delete(3);
// doublyList.insertAt_indedx(23, 4);
doublyList.deletion(2);
doublyList.display(); // Output: 0 <-> 1 <-> 3
