const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then((res) => res.json())
    .then((json) => displayPost(json))
}
// loadPost()

const displayPost = (posts) =>{
    const postContainer = document.getElementById("post-container");

    for(let post of posts){
        const liList = document.createElement('li');
        liList.innerText = post.title;
        postContainer.appendChild(liList);
    }
    
}