const postItems = JSON.parse(localStorage.getItem('posts')) || '';
const catItems = JSON.parse(localStorage.getItem('category')) || '';

const alertBox = document.getElementById('alertbox');

const postCount = document.getElementById('post-count');
const catCount = document.getElementById('category-count');

addCategoryCount();
addPosts();

function addTableRows() {
  const table = document.querySelector('#table');
  const tableBody = document.querySelector('#table-body');

  postItems.forEach((item, index) => {
    const postName = item.postName;
    const postCategory = item.postCategory;
    const addedDate = item.addedDate;

    // 1) Add rows - programmatically using html
    tableBody.innerHTML += `
    <tr>
        <td><strong>${index + 1}</strong></td>
        <td>${postName}</td>
        <td>${postCategory}</td>
        <td>${addedDate}</td>
    </tr>
    `;

    // 2) Add rows - programmatically using document functions
    //     const row = table.insertRow();

    //     const sNo = row.insertCell();
    //     const pName = row.insertCell();
    //     const pCat = row.insertCell();
    //     const aDate = row.insertCell();

    //     sNo.textContent = index + 1;
    //     pName.textContent = postName;
    //     pCat.textContent = postCategory;
    //     aDate.textContent = addedDate;
  });
}

function addPosts() {
  if (postItems === '') {
    alertBox.innerHTML = `<div class="alert alert-warning mt-2 mx-2" role="alert">
      No posts are there
      </div>`;
  } else {
    // postCount.innerHTML = postCount.innerHTML + postItems.length;
    postCount.innerHTML += postItems.length;
    addTableRows();
  }
}

function addCategoryCount() {
  if (catItems === '') {
    alertBox.innerHTML = `<div class="alert alert-warning mt-2 mx-2" role="alert">
      No Categories are there
      </div>`;
  } else {
    catCount.innerHTML += catItems.length;
  }
}
