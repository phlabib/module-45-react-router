import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {

    const {id, name, username, email} = user;
    const navigate = useNavigate ()
    
    const userStyle = {    
        border: '2px solid red',
        padding : "5px",
        borderRadius : '10px',
          }

          const handleShowDetails = () => {
            navigate (`/user/${id}`);
          }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>User Name : {username}</p>
            <p>Email : {email}</p>
            <Link to = {`/user/${id}`}>Show Details</Link>
            <button onClick={handleShowDetails}>Show Details</button>

        </div>
    );
};

export default User;