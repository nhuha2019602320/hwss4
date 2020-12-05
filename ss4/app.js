class Student {
    constructor(studentCode, name, age, schoolYear){
        this.studentCode = studentCode;
        this.name = name;
        this.age = age;
        this.schoolYear = schoolYear;
    }
}

class Teacher {
    constructor(teacherCode, name, age, lever){
        this.teacherCode = teacherCode;
        this.name = name;
        this.age = age;
        this.lever = lever;
    }
}

class Classroom {
    
    liststudent = [];
    listteacher = [];

    constructor(classCode, subjectTitile, teacher, listStudent) {
        this.classCode = classCode;
        this.subjectTitile = subjectTitile;
        this.teacher = teacher;
        this.listStudent = listStudent;
    }

    addStudents(student) {
        this.liststudent.push(student);
    }

    addTeacher(teacher) {
        this.listteacher.push(teacher);
    }
 
    deleteStudent(code) {
        this.code = code;
        let  pos;
        for(let i = 0 ; i < this.liststudent.length; i++){
            if(this.liststudent[i].studentCode == code){
                pos = i;
                this.liststudent.splice(0, pos);
            }
        }
    }

    deleteTeacher(code) {
        this.code = code;
        let pos;
        for(let i = 0; i < this.listteacher.length; i++){
            if(this.listteacher[i].teacherCode == code){
                pos = i;
                this.listteacher.splice(0, pos);
            }
        }
    }

    findStudent(code) {
        this.code = code;
        for(let i = 0 ; i < this.listStudent.length ; i++){
            if(this.liststudent[i].studentCode == code) {
                if(this.listStudent[i].studentCode == code){
                    console.log(this.listStudent[i].studentCode);
                }
            }
        }
    }

}

let student = new Student(2019602320, "Hai", 20, "2019-2023");
let teacher = new Teacher(1707210601, "Huong", 27, "professor");
let classroom = new Classroom("IT-1301", "Software Engineer", 40);

let newStudent = new Student(12789543, "Hang", 20, "2019-2023");
let newTeacher = new Teacher(170721444, "Dung", 50, "doctor");

classroom.addStudents(newStudent);
    console.log("update student");
classroom.addTeacher(newTeacher);
    console.log("update teacher");
    console.log(classroom);
classroom.deleteStudent(1);
classroom.deleteTeacher(1)
    console.log(classroom);