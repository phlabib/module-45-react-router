import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData ();
    const navigate = useNavigate();
    const {name, website} = user;

    const haldleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Details About Users : {name}</h2>
            <p>WebSite : {website}</p>
            <button onClick={haldleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;