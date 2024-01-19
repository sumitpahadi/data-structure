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
  

    deleteAtIndex(index) {
        if (!this.head) {
          console.log("List is empty. Nothing to delete.");
          return;
        }
    
        if (index === 0) {
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
        } else {
          // Delete at a specific index
          let current = this.head;
          let count = 0;
    
          while (count < index - 1 && current.next !== this.head) {
            current = current.next;
            count++;
          }
    
          if (current.next === this.head) {
            console.log("Index out of bounds. Nothing to delete.");
            return;
          }
    
          current.next = current.next.next;
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
  circularList.append(30);
  circularList.append(32);
  circularList.append(4);
  circularList.append(6);
  
  circularList.display();
  circularList.deleteAtIndex(0)
  circularList.display();

  