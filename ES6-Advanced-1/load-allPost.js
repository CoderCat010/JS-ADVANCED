const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    fetch(url)
    .then((res) => res.json())
    .then((json) => displayPost(json))
}
// loadPost()

const displayPost = (posts) =>{
    const postContainer = document.getElementById("post-container");
    const liList = document.createElement('li');

    for(let post of posts){
        liList.innerText = post.title;
        postContainer.appendChild(liList);
    }
    
}