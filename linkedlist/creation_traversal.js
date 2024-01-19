class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  traversal() {
    let current = this.head;
    let str = "";
    console.log(current);
    while (current) {
      str += current.data + "-->"; // Corrected to use current.data
      current = current.next;
    }
    console.log(str); // Added console.log to display the elements
  }


  searching(element)
  {
    let current=this.head
    let count=0;

    while(current)
    {
        if(element===current.data)
        {
            return count 
            break;
        }
        count++;
        current=current.next

    }
    return "element not exist"
  }
}

let object = new LinkedList();
object.add(11);
object.add(12);
object.add(90);
object.add(9);
object.add(8);
object.add(4);
object.traversal(); // Call traversal method to display the elements
console.log(object.searching(4))
