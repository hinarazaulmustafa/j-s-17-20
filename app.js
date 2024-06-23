// // // // // 1. Declare and initialize an empty multidimensional array.


// // // // var a =[[],[],[]]

// // // // // 2. Declare and initialize a multidimensional array representing the following matrix:


// // // // a[0]=[0,1,2,3]
// // // // a[1]=[1,0,1,2]
// // // // a[2]=[2,1,0,1]

// // // // document.write (a )
// // // // document.write ("<br>" )

// // // // for (let i = 0; i < a.length; i++)
// // // //      { document.write(a[i].join(" ") + "<br>"); }


// // // // // 3. Write a program to print numeric counting from 1 to 10.

// // // // for (let i = 1; i <= 10; i++) {
// // // //     document.write( i+"<br>");
    
// // // // }

// // // // // 4. Write a program to print multiplication table of any number using for loop.
// // // // //  Table number & length should be taken as an input from user.


// // // // // var num = +prompt("give the number of multiplication table")

// // // // // var length = +prompt("tell the length of the table")

// // // // // document.write("the multiplication table is" + num+ "<br>")
// // // // // document.write("the  length of the multiplication table is" + length + "<br>")


// // // // for (let i= 1; i <= length; i++) {
// // // // document.write(num + "x" + i +  "="  + num*i +"<br>" )    
// // // // }


// // // // // 5. Write a program to print items of the following array using for loop:
// // // // // fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// // // var fruits = ["apple", "banana", "mango", "orange","strawberry"]


// // // for (let i = 0; i < fruits.length; i++) {
// // // document.write(fruits[i] + "<br>")    
// // // }


// // // // 6. Generate the following series in your browser. See example output.
// // // // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15



// // // for (let i = 1; i <= 15; i++) {
// // //      document.write(i + "<br>")
    
// // // }
// // // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1


// // // for (let i = 10; i >= 1; i--) {
// // // document.write(i + "<br>")    
// // // }


// // // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20


// // // for (let i= 0; i <= 20; i+=2) {
// // // document.write(i + "<br>")    
    
// // // }


// // // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// // // for (let i= 1; i <= 19; i+=2) {

// // // document.write(i + "<br>")    };


// // // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// // for (let i = 2; i <=20 ; i+=2) {
// // document.write(i +"k"+ "<br>")    };
    
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not


// var A=["cake","apple pie","cookie","chips","patties"]

// var b =prompt("please enter snack?","cookie")

// const index = A.indexOf(b.toLowerCase());


//  var matchfound = false

// for (let i = 0; i < A.length; i++) {


//     if (A[i]===b) {matchfound= true }}
    

// if (matchfound) {alert(b + "is  <b>available</b> at index" +index+"in our bakery");
// } else {alert("The item"+ b+"is not available in the list")}
    





// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


// var  A = [24, 53, 78, 91, 12];

// var max = A[0];

// for (let i = 0; i < A.length; i++) {
//    if (A[i]>max) { max = A[i];}
// }

//    console.log(max)


    

    
// // 9. Write a program to identify the smallest number in the
// // given array.
// // A = [24, 53, 78, 91, 12]


// var  A = [24, 53, 78, 91, 12];

// var min =A[0]
// for (let i = 0; i < A.length; i++) {
//    if (A[i]<min) { min = A[i];}
// }

//    console.log(min)



// 10. Write a program to print multiples of 5 ranging 1 to 
// 100

// for (let i = 1; i <= 100; i++) {
//    if (i % 5 === 0) {
//      console.log(i);
//    }
//  }
 