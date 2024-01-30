// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class Stack {
//     constructor() {
//       this.top = null;
//       this.size = 0;
//     }
  
//     // Add element to the top of the stack
//     push(element) {
//       const newNode = new Node(element);
//       newNode.next = this.top;
//       this.top = newNode;
//       this.size++;
//     }
  
//     // Remove and return the top element from the stack
//     pop() {
//       if (this.isEmpty()) {
//         return "Underflow"; // Stack is empty
//       }
//       const poppedElement = this.top.data;
//       this.top = this.top.next;
//       this.size--;
//       return poppedElement;
//     }
  
//     // Return the top element without removing it
//     peek() {
//       if (this.isEmpty()) {
//         return "Stack is empty";
//       }
//       return this.top.data;
//     }
  
//     // Check if the stack is empty
//     isEmpty() {
//       return this.size === 0;
//     }
  
//     // Get the number of elements in the stack
//     getSize() {
//       return this.size;
//     }
  
//     // Display the elements of the stack
//     display() {
//       let current = this.top;
//       while (current) {
//         console.log(current.data);
//         current = current.next;
//       }
//     }
//   }
  
//   // Example usage
//   const stack = new Stack();
  
//   stack.push(10);
//   stack.push(20);
//   stack.push(30);
  
//   console.log("Top element:", stack.peek()); // Output: 30
  
//   console.log("Stack elements:");
//   stack.display(); // Output: 30 20 10
  
//   console.log("Popped element:", stack.pop()); // Output: 30
  
//   console.log("Stack size:", stack.getSize()); // Output: 2
  

class Linkedlist {
    constructor(data)
    {
        this.data=data;
        this.next=null
    }
}
class stack {
    constructor()
    {
        this.top=null;
        this.size=0
    }

    push(data)
    {
        const newnode=new Linkedlist(data)
        newnode.next=this.top
        this.top=newnode
        this.size++
    }
    pop()
    {
        let popdata=this.top.data;
        this.top=this.top.next;
        this.size--
        return popdata
    }
    display()
    {
        let current=this.top
        let list=""
        while(current!=null)
        {
            list+=current.data+"-->"
            current=current.next
        }
        console.log(list)
    }
    isempty()
    {
        if (this.size===0) {
            return "underflow"
            
        }
        else {
            return "stack is not empty"
        }
    }
    
}

const object=new stack()
object.push(23)
object.push(20)
object.push(12)
object.push(29)
object.push(18)
object.display()
console.log(object.pop())
object.display()
console.log(object.isempty())