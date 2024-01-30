class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // If the list is empty, make the new node the head and point it to itself
      this.head = newNode;
      this.head.next = this.head;
    } else {
      // Traverse the list to find the last node
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }

      // Append the new node to the end and make it point back to the head
      current.next = newNode;
      newNode.next = this.head;
    }
    this.size++;
  }

  // -----------------------//

  deleteByValue(value) {
    if (!this.head) {
      console.log("List is empty. Nothing to delete.");
      return;
    }
  
    if (this.head.data === value) {
      // Delete at the beginning
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      if (this.head === this.head.next) {
        // If there is only one element in the list
        this.head = null;
      } else {
        current.next = this.head.next;
        this.head = this.head.next;
      }
      this.size--;
    } else {
      // Delete by value
      let current = this.head;
      let prev = null;
  
      do {
        if (current.data === value) {
          prev.next = current.next;
          this.size--;
          return;
        }
        prev = current;
        current = current.next;
      } while (current !== this.head);
  
      console.log("Value not found. Nothing to delete.");
    }
  }
  display() {
    let current = this.head;

    if (!current) {
      console.log("List is empty");
      return;
    }
    let str = "";

    do {
      str += current.data + "->";
      current = current.next;
    } while (current !== this.head);
    console.log(str);
    console.log("size of circular linked list is " + this.size);
  }
}

// Example usage:
const circularList = new CircularLinkedList();
circularList.append(1);
circularList.append(2);
circularList.append(3);
circularList.append(4);
circularList.append(3);
circularList.display();
circularList.deleteByValue(3);
circularList.display();
