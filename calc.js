function myFunction() {
    var a = document.getElementById("inp1").value;
    document.getElementById("otpt").innerHTML = a;

    var b = document.getElementById("inp2").value;
    document.getElementById("otpt2").innerHTML = b;

    var c = document.getElementById("myRange").value;
    document.getElementById("otpt3").innerHTML = c;

    var d = document.getElementById("myRange2").value;
    document.getElementById("otpt4").innerHTML = d;
      // LOOP
    var temp = parseInt(c);
     while(temp != 0)
     {

     var monthly = b*12;
     var total = +a + +monthly;
     var finle = ((d/100)*total);
     var result = +total + +finle;
     a = result;
     temp = temp-1;
     }
     document.getElementById("finle").innerHTML = parseInt(result);
    
     
  }
  

 































