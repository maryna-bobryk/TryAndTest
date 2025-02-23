// const foo = async () => {
//   console.log('Before await');

//   const promiseValue = await new Promise((resolve) => {
//     setTimeout(() => resolve(5), 2000);
//   });

//   console.log('After await', promiseValue);
// };
// foo();

//!======================================================

// const foo = async () => {
//   console.log('Before await');

//   const promiseValue = await new Promise((resolve) => {
//     setTimeout(() => resolve(5), 2000);
//   });

//   console.log('After await', promiseValue);
// };
// foo();

//!======================================================

const waitForIntervals = (count, interval) => {
  return new Promise((resolve) => {
    let counter = 0;
    const timer = setInterval(() => {
      counter++;
      console.log(`Interval ${counter}`);
      if (counter >= count) {
        clearInterval(timer);
        resolve(`Fertig nach ${count} Intervallen`);
      }
    }, interval);
  });
};

const foo = async () => {
  console.log('Before await');
  const result = await waitForIntervals(3, 2000); // 3 Intervalle à 2s
  console.log(result); // "Fertig nach 3 Intervallen"
};

foo();
// Hier passiert Folgendes:

// waitForIntervals(3, 2000) wartet auf 3 Intervalle.
// Jedes Intervall loggt Interval 1, Interval 2, Interval 3.
// Nach 3 Durchläufen wird das Promise aufgelöst und "Fertig nach 3 Intervallen" ausgegeben.

const fetchPostsBtn = document.querySelector('.btn');
const postList = document.querySelector('.posts');

fetchPostsBtn.addEventListener('click', async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  // Change the number of items in the group here
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p>${body}</p>
        </li>`;
    })
    .join('');
  postList.innerHTML = markup;
}
