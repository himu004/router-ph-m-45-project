import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>OOPPSS! NOT FOUND</h1>
            <p>{err.statusText || err.message}</p>
            {
                err.status === 404 && <div>
                    <h3>Page not Found</h3>
                    <p>Go Back Where You From</p>
                </div>
            }
            <button onClick={handleBack}>Back To The Page</button>
        </div>
    );
};

export default ErrorPage;