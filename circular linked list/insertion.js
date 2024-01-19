class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.size=0
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
      this.size++
      
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
       console.log("size of circular linked list is "+this.size)
    }




    insert(data, index) {
        const newNode = new Node(data);
        if (index<0 || index>this.size) {
          console.log("index not found")
          
        }
        else 
        {

          
          if (!this.head) {
          // If the list is empty, make the new node the head and point it to itself
          this.head = newNode;
          newNode.next = this.head;
        } else {
          if (index === 0) {
            // Insert at the beginning
            newNode.next = this.head;
            let current = this.head;
            while (current.next !== this.head) {
              current = current.next;
            }
            current.next = newNode;
            this.head = newNode;
          } else {
            // Insert at a specific index
            let current = this.head;
            let count = 0;
            
            while (count < index - 1 && current.next !== this.head) {
              current = current.next;
              count++;
            }
            console.log(count)
            newNode.next = current.next;
            current.next = newNode;
          }
        }
        }
        this.size++
      }
    }
  
    // Example usage:
  const circularList = new CircularLinkedList();
  circularList.append(1);
  circularList.append(2);
  circularList.append(3);
  
  circularList.display();
  circularList.insert(29,3)
  circularList.display();
  