import './Post.css'
type post = {
    img_url: string,
    description: string,
    likes: number,
    name_user: string,
    date: string
}


export default function Post() {
    const firstPost: post = {
        img_url: "/images/dog-image.jpeg",
        description: "cute dog",
        likes: 0,
        name_user: "dan",
        date: `07/09/2025 11:04`
    }

    return (
        <article className="post">
            <img src={firstPost.img_url} alt={firstPost.description} />
            <div className="under-post">
                <div className='des-and-likes'>
                    <p>{firstPost.description}</p>
                    <h4>{firstPost.likes}</h4>
                </div>
                <div className='name-and-date'>
                    <h3>{firstPost.name_user}</h3>
                    <h6>{firstPost.date}</h6>
                </div>
            </div>
        </article>
    )
}
