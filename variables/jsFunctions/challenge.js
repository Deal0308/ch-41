function sum(a,b){
        let sum = a +b;
        console.log(sum);
}

sum(3,5);//8


//calculate the gpa of a student enrolled in course 101 and 102.
//display the student name,grade1, grade2, gpa

function calculateGPA (){
    //getting the values
    let studentname=prompt("Enter student name:");
    let grade1 = Number(prompt("Enter FSDI 101 grade"));
    let grade2 =Number(prompt("Enter FSDI 102 grade"))
    //calculating

     let gpa= (grade1+grade2)/2;
    //displaying
    document.getElementById("studentlist").innerHTML+=

    
        `
        <div>
            <p>Name:${studentname}</p>
            <p>FSDI 101: ${grade1}</p>
            <p>FSDI 102: ${grade2}</p>
            <p>GPA: ${gpa}</p>
        </div>

        `
    ;
}