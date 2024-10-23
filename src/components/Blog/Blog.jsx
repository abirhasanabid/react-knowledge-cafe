const Blog = ({ blog }) => {
    const {name,author_img}=blog;
    return (
        <div className="text-center">
            <h2>Name: {name}</h2>
            <img src={author_img} alt="" />
        </div>
    );
};

export default Blog;