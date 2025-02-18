import {useRouteError} from "react-router";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="error">
            <h1>Page not found 404</h1>
            <h3>{error.status} : {error.statusText}</h3>
        </div>
    )
}
export default Error;