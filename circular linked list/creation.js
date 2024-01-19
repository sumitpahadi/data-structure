class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
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
    }
  
    display() {
      let current = this.head;
     
      if (!current) {
        console.log("List is empty");
        return;
      }
      let str=""
  
      do {
        str+=current.data+"->"
        current = current.next;
       
      }
       while (current !== this.head);
       console.log(str)
    }
  }
  
  // Example usage:
  const circularList = new CircularLinkedList();
  circularList.append(1);
  circularList.append(2);
  circularList.append(3);
  
  circularList.display();
  