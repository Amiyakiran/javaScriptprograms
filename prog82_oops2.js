class Student{
   

    constructor(id,sname,grade,mark){
        this.stid=id
        this.stname=sname
        this.stgrade=grade
        this.stmark=mark
        this.studentdisplay()
    }
    studentdisplay(){
        console.log(`student name is ${this.stname}, student id is : ${this.stid}, student grade is ${this.stgrades} student mark is ${this.stmark}`);
    }
}

const stud1 = new Student(1 ,"anu","VI",200)

const stud2 = new Student(2 ,"madhav","VII",100)
