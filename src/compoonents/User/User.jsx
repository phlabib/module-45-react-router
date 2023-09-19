

const User = ({user}) => {

    const {id, name, username, email} = user;
    const userStyle = {
        border: '2px solid red',
        padding : "5px",
        borderRadius : '10px',
          }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>User Name : {username}</p>
            <p>Email : {email}</p>

        </div>
    );
};

export default User;