import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {

    document.title = "404";
    
    const history = useHistory();

    const styleCenter = {
        textAlign: 'center'
    }

    useEffect(() => {

        setTimeout(() => {
            history.push('/');
        }, 3000);

    });

    return (
        <div style={styleCenter}>
            <h1>404 | Page Not Found</h1>
        </div>
    );
};

export default PageNotFound;