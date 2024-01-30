class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow"; // Stack is empty
      }
      return this.items.pop();
    }
  
    // Return the top element without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the number of elements in the stack
    size() {
      return this.items.length;
    }
  
    // Display the elements of the stack
    display() {
      console.log(this.items.join(' '));
    }
  }
  
  // Example usage
  const stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log("Top element:", stack.peek()); // Output: 30
  
  console.log("Stack elements:");
  stack.display(); // Output: 10 20 30
  
  console.log("Popped element:", stack.pop()); // Output: 30
  
  console.log("Stack size:", stack.size()); // Output: 2
  
  stack.display(); // Output: 10 20 3