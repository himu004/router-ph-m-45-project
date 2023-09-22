import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, phone, username, email, website} = user;
    const userStyle = {
        border: '2px solid black',
        margin: '10px',
        padding: '10px',
        borderRadius: '15px'
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <hr />
            <p>Phone: {phone}</p> 
            <p>User Name: {username}</p> 
            <p>Email: {email}</p> 
            <p>Website: {website}</p> 
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;