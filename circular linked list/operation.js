class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    (this.head = null), (this.size = 0);
  }

  append(data) {
    let newnode = new Node(data);
    if (this.head === null) {
      this.head = newnode;
      newnode.next = this.head;
    } else {
      let current = this.head;
      while (current.next != this.head) {
        current = current.next;
      }
      current.next = newnode;
      newnode.next = this.head;
    }
    this.size++;
  }

  // --------------------------insertion in circular linked list=----------------------------------------------?

  insertion(data, index) {
    console.log("index is ", index);
    let newnode = new Node(data);

    if (index < 0 || index > this.size) {
      console.log("Index not found");
    } else {
      if (this.head === null) {
        // If the list is empty, make the new node the head and point it to itself
        this.head = newnode;
        newnode.next = this.head;
      } else {
        if (index === 0) {
          // Insert at the beginning
          newnode.next = this.head;
          let current = this.head;
          //1(this.head) 2 3 4 5 6  7 inert (3,0)
          while (current.next !== this.head) {
            current = current.next;
          }
          current.next = newnode;
          this.head = newnode;
        } else {
          // Insert at a specific index
          let current = this.head;
          let count = 0;

          while (count < index - 1 && current.next !== this.head) {
            current = current.next;
            count++;
          }

          newnode.next = current.next;
          current.next = newnode;
        }
      }
    }

    this.size++;
  }

  //   -------------------------------------deletionn using index-----------------------------------

  deletion_index(index) {
    console.log("index is ", index);
    if (index < 0 || index >= this.size) {
      console.log("Index not found");
    } else if (index === 0) {
      // Delete at the beginning
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      if (this.size === 1) {
        // If there is only one element in the list
        this.head = null;
      } else {
        current.next = this.head.next;
        this.head = this.head.next;
      }
    } else {
      // Delete at a specific index
      let current = this.head;
      let pre = null;
      let count = 0;

      while (count < index) {
        pre = current;
        current = current.next;
        count++;
      }
// console.log(current)
      pre.next = current.next;
    }

    this.size--;
  }


  // ------------------------------deletion using element ---------------------------


  deletion_by_element(value) {
    if (!this.head) {
        console.log("List is empty. Nothing to delete.");
        return;
    }

    let current = this.head;
    let pre = null;

    // Search for the node with the specified value
    while (current.data !== value && current.next !== this.head) {
        pre = current;
        current = current.next;
    }

    // If the value is not found
    if (current.data !== value) {
        console.log("Value not found. Nothing to delete.");
        return;
    }

   
    // If the node to be deleted is the head
    if (current === this.head) {
        // Update the last node's next pointer
        while (current.next !== this.head) {
            current = current.next;
        }
        if (this.size === 1) {
            // If there is only one element in the list
            this.head = null;
        } else {
         
          current.next = this.head.next;
          this.head = this.head.next;
          
        }
    } else {
        // Node to be deleted is not the head
        pre.next = current.next;
    }

    this.size--;
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
    console.log("size", this.size);
  }
}

let object = new CircularLinkedList();
object.append(1);
object.append(2);
object.append(3);
object.append(4);
object.append(40);
object.append(40);
object.append(44);
object.display();
// object.deletion_index(5);
// object.insertion(23, 4);
object.deletion_by_element(1)
object.display();
