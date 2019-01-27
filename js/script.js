/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const students = Array.prototype.slice.call(document.querySelectorAll('.student-item.cf'));
const numberOfPages = Math.ceil(students.length / 10);

// students 0 - 9 = iboya vat - connor taylor
// students 10 - 19 = aymeric morel - florent gerard
//students 20 - 29 = amber chen - emily harrison

// Shows student records for page selected
function showPage(pageNumber) {
  // Default visibleRecords slice range
  let lowRange = 0;
  let highRange = 10;
  // visibleRecords slice range if page number is not 1
  if (pageNumber !== 1) {
    lowRange = (pageNumber * 10) - 10;
    highRange = highRange + (pageNumber * 10) - 10;
  };
  // Range of student records for selected page
  const visibleRecords = students.slice(lowRange, highRange);
  // Hide all student records
  for ( let i = 0; i < students.length; i++ ) {
    students[i].style.display = 'none';
  }
  // Show student records for selected page
  for ( let i = 0; i < visibleRecords.length; i++ ) {
    visibleRecords[i].style.display = 'block';
  }
}

showPage(1);

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

/***
// Pagination example code

<div class="pagination">
  <ul>
    <li><a href="">1</a></li>
    <li><a href="">2</a></li>
  </ul>
</div>
*/
