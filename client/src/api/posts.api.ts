export async function getPosts() {
    let posts;
    const cached = localStorage.getItem("posts");
    
    if (cached) {
        posts = JSON.parse(cached);
    } else {
        const res = await fetch('http://localhost:3003/linkodkod/posts');
        posts = await res.json();
        localStorage.setItem("posts", JSON.stringify(posts));
    }
    return posts;
}

export async function getPost(id:string) {
    const res = await fetch(`http://localhost:3003/linkodkod/posts/${id}`);

    const post = await res.json();
    return post;
}