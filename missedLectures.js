/*
A new chemistry teacher is very strict and wants the students to do well in class. To aid
this, lectures on each chapter will be repeated periodically through the semester.
In each class, the next chapter is presented. When they reach the end of the book,
the lectures start over with chapter 0. More formally, if there are numChapters in the book,
then on the i(th) day, the lecture will be on chapters. The i%numChapters. The first day
of class is class[0] and the first chapter 0. if there are 3 chapters, daily lectures 
are on chapters class = [0,1,2,0,1,2,...]. At the lecture will be on chapter 4%3 = 1

One of the students is going to be out of class for a wedding, and the teacher is concerned
about missed lectures. Given the first and last days the student will be out, determine the
number of chapters for which the student will miss lectures.

For example, there are numChapters = 4 chapters in the book. The student is out of class
beginning one day b(KIIT) through ending day e = 5. The series of lectures are on chapters 
class = [0,1,2,3,0,1,2,3,...] starting from day 0. For class[3] through class[5], lectures are
given on chapters 3, 0 and 1. The student will miss lectures on 3 chapters.


*/

function missedLectures(numChapters, start, end) {
    let classes = [];

    // Calculate the total number of lectures needed
    const noOfLectures = numChapters * (end + 1);

    // Populate the classes array with chapter pattern [0,1,2,...,numChapters-1,0,1,2,...]
    for (let i = 0; i < noOfLectures; i++) {
        classes.push(i % numChapters); // Cycle through chapters
    }

    // Count distinct chapters in the specified range [start, end]
    const distinctChapters = new Set();
    for (let i = start; i <= end; i++) {
        distinctChapters.add(classes[i]); // Insert chapters into set to ensure uniqueness
    }

    return distinctChapters.size; // Return the size of the set, which gives the count of distinct chapters
}

const numChapters = 4; // Number of chapters
const start = 3; // Start of the range
const end = 5; // End of the range

console.log(missedLectures(numChapters, start, end)); // Output: 3

//const numChapters = 5; // Number of chapters
//const start = 13; // Start of the range
//const end = 98; // End of the range

console.log(missedLectures(numChapters, start, end)); // Output: 5