/**
 * Retrieves the sum of ids of a list of
 * with the following parameters
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - list of students.
* @returns {Number}
*/
export default function getStudentIdsSum(students) {
 if (students instanceof Array) {
   return students.reduce(
     (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
     0,
   );
 }
 return 0;
}