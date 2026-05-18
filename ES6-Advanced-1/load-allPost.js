const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    fetch(url)
    .then((res) => res.json())
    .then((json) => displayPost(json))
}
// loadPost()

const displayPost = (posts) =>{
    for(let post of posts){
        console.log(post);
        
    }
    
}