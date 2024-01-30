function printarray(array) {
    let space = "";
    for (let i = 0; i < array.length; i++) {
      space += array[i] + "->";
    }
    console.log(space);
  }


  function maximum(array)
  {
    let max=0;
    for (let i = 0; i < array.length; i++) {
       if (array[i]>max) {
        max=array[i]
        
       }
        
    }
    return max
  }

  function countsort(array)
  {
    let max=maximum(array)
    
    let count=[]
    for (let i = 0; i < max+1; i++) {
        count[i]=0
           
    }
    for (let i = 0; i < max+1; i++) {
        count[array[i]]=count[array[i]]+1
        
    }
    let i=0;
    let j=0;
    while(i<=max)
    {
        if (count[i]>0) {
            count[i]=count[i]-1
            array[j]=i;
            j++
            
        }
        else {
            i++
        }
    }

  }

  let array=[3,-1]
  printarray(array)
  countsort(array)
  printarray(array)