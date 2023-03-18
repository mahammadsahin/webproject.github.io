let postDetails = {};

async function getPostDetails(event) {
  event.preventDefault();

  // target is an array of form controls
  const postName = event.target[0].value;
  const postCategory = event.target[1].value;

  // postDetails['postName'] = postName;

  postDetails = {
    postName: postName,
    postCategory: postCategory,
    addedDate: new Date(),
  };

  const res = await postPostItems(postDetails);
  if (res.ok === true) {
    window.location.href = '/dashboard.html';
  } else {
    // condn
  }
}

function postPostItems(postItem) {
  // const res = await fetch('url', {
  //     method: 'POST',
  //     body: JSON.stringify(postItem)
  // });

  // const finalRes = await res.json();

  // return finalRes;

  return new Promise((resolve, reject) => {
    const storage = localStorage.getItem('posts');

    if (storage === null) {
      const arr = [postItem];
      localStorage.setItem('posts', JSON.stringify(arr));
    } else {
      // manipulate
      const postArr = JSON.parse(storage);
      postArr.push(postItem);
      localStorage.setItem('posts', JSON.stringify(postArr));
    }

    resolve({ ok: true });
  });
}
