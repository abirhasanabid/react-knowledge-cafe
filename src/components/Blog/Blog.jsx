import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog);
    const { name } = blog;
    return (
        <div>
            <h1 className="text-5xl">Name : {name} </h1>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;