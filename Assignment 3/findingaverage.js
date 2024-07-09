const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateAverages(students) {
    const result = [];

    for (const studentName in students) {
        const subjects = students[studentName];
        const totalScore = Object.values(subjects).reduce((acc, score) => acc + score, 0);
        const averageScore = totalScore / Object.keys(subjects).length;
        const studentAverage = {};
        studentAverage[studentName] = { average: averageScore };
        result.push(studentAverage);
    }

    return result;
}
function getStudentData() {
    return new Promise((resolve, reject) => {
        const students = {};

        rl.question("Enter the number of students: ", (numberOfStudents) => {
            numberOfStudents = parseInt(numberOfStudents);

            function askSubjects(studentIndex) {
                if (studentIndex > numberOfStudents) {
                    rl.close();
                    resolve(students);
                    return;
                }

                rl.question(`Enter the name of student ${studentIndex}: `, (studentName) => {
                    students[studentName] = {};

                    rl.question(`Enter the number of subjects for ${studentName}: `, (numberOfSubjects) => {
                        numberOfSubjects = parseInt(numberOfSubjects);

                        function askSubjectScores(subjectIndex) {
                            if (subjectIndex > numberOfSubjects) {
                                askSubjects(studentIndex + 1);
                                return;
                            }

                            rl.question(`Enter the score for subject ${subjectIndex}: `, (score) => {
                                students[studentName][`subject${subjectIndex}`] = parseInt(score);
                                askSubjectScores(subjectIndex + 1);
                            });
                        }

                        askSubjectScores(1);
                    });
                });
            }

            askSubjects(1);
        });
    });
}
getStudentData().then((students) => {
    // Calculate averages
    const averages = calculateAverages(students);

    console.log(averages);
}).catch((err) => {
    console.error(err);
});