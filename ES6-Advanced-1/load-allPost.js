const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
        json.forEach((post) => {
            console.log(post.title);
        });
    });
}
// loadPost()