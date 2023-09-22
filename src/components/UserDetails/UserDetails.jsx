import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, company} = user;
    return (
        <div>
            <h2>Details About Users: {name}</h2>
            <p>Company: {company.name}</p>
            <p>About Company: {company.catchPhrase}</p>
        </div>
    );
};

export default UserDetails;