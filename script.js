let button = document.getElementById("button");
let result = document.getElementById("result");

const studentArr = ['Abbas Akbar', 'Abhinav Sharma', 'Abhishek Bansal', 'Abhishek Srivastava', 'Aditya Kumar Singh', 'Ali Sher Khan', 'Ananya Lamba', 'Anjali Debnath', 'Ankit Saini', 'Anoushka Gautam', 'Ansh Kumar Gupta', 'Anshika Bhatnagar', 'Anuj Chauhan', 'Anurag Saini', 'Arin Saxena', 'Ashish Ansh', 'Avni Saxena', 'Divyanshi Vishnoi', 'Inayat Ullah Khan', 'Kratika Agarwal', 'Manish Kumar', 'Manit Rastogi', 'Nikita Rathore', 'Prakhar Sharma', 'Prakriti Gupta', 'Pranjal Agarwal', 'Prince Saxena', 'Sakshi Chauhan', 'Samarth Rastogi', 'Samra Rubab', 'Sandeep Kumar', 'Sarthak Rastogi', 'Shashank Johri', 'Shashwat Tewari', 'Shivam Prajapati', 'Shivi Agarwal', 'Shrey Singhal', 'Sohil Ansari', 'Tahir Ali', 'Tahzeeb Malik', 'Tanu Saini', 'Vishal Kumar', 'Pratham Gupta'];
const exclusionList = ['Pratham Gupta'];
const priorityList = [];

let generateStudent = ((arr, exclusionList, priorityList) => {
    const availableStudents = arr.filter(Student => !exclusionList.includes(Student));

    const studentsPlusPriorityStudent = availableStudents.concat(priorityList);

    if (studentsPlusPriorityStudent.length == 0) {
        return "No Student Available";
    }
    const randomIndex = Math.floor(Math.random() * studentsPlusPriorityStudent.length);
    return studentsPlusPriorityStudent[randomIndex];
});

let printCharacterByCharacter = ((text, index = 0) => {
    if (index < text.length) {
        result.innerText += text[index];
        setTimeout(() => printCharacterByCharacter(text, index + 1), 100);
    }
});

let displayRandomStudent = ((arr, exclusionList, priorityList) => {
    result.innerText = "Selecting a Random Student...";
    setTimeout(() => {
        result.innerText = "3...";
        setTimeout(() => {
            result.innerText = "2...";
            setTimeout(() => {
                result.innerText = "1...";
                setTimeout(() => {
                    const randomStudent = generateStudent(arr, exclusionList, priorityList);
                    result.innerText = "Randomly Selected Student:\n";
                    printCharacterByCharacter(randomStudent);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});

button.addEventListener('click', () => {
    displayRandomStudent(studentArr, exclusionList, priorityList)
});