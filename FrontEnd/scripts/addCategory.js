const button = document.getElementById('saveButton');
// querySelector -> a neutral selector function which can take a selector to fetch an element
// Selector -> tagname, id, classname
const categoryInput = document.querySelector('#category');

// listens to an event on the element being targeted
// takes 3 args -> 1) eventName - string; 2) callback function - function to be run when event happens
button.addEventListener('click', async () => {
  const category = categoryInput.value;
  const res = await addCategories(category);
  window.location.href = '/dashboard.html';
});

function addCategories(category) {
  return new Promise(resolve => {
    setTimeout(() => {
      const catArr = JSON.parse(localStorage.getItem('category'));
      if (catArr == null) {
        localStorage.setItem('category', JSON.stringify([category]));
      } else {
        catArr.push(category);
        localStorage.setItem('category', JSON.stringify(catArr));
      }
      resolve('Category Added');
    }, 2000);
  });
}
