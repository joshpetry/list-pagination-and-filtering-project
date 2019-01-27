/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
const studentList = document.querySelector('.student-list');
const students = Array.prototype.slice.call(document.querySelectorAll('.student-item.cf'));
const numberOfPages = Math.ceil(students.length / 10);

// Shows selected page
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

// Show page 1 on page load
showPage(1);

function appendPageLinks(pages) {
  // Generate and append page links
  const pagination = document.createElement("DIV");
  pagination.className = 'pagination';
  const ul = document.createElement("UL");
  for ( let i = 1; i <= pages; i++) {
    let li = document.createElement("LI");
    li.innerHTML = `<a>${i}</a>`;
    ul.appendChild(li);
  }
  pagination.appendChild(ul);
  studentList.parentNode.insertBefore(pagination, studentList.nextSibling);

  // Page link functionality
  const a = ul.querySelectorAll('a');
  a[0].className = 'active';
  ul.addEventListener('click', (e) => {
    // Reset active class for pagination buttons
    for ( let i = 0; i < a.length; i++ ) {
      a[i].className = '';
    }
    // Show selected page
    e.target.onclick = showPage(e.target.textContent);
    e.target.className = 'active';
  });

}

appendPageLinks(numberOfPages);
