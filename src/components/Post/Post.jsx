import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();
    const userStyle = {
        border: '2px solid black',
        margin: '10px',
        padding: '10px',
        borderRadius: '15px'
    } 

    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={userStyle}>
            <h4>Post of id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}><button>Post Detail</button></Link> <br /> <br />
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;