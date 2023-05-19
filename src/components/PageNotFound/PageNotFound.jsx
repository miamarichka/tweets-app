import { Link } from "react-router-dom";
import PageNotFoundImg from "../../assets/staticImages/404-error-page-not-found.jpg";

const PageNotFound = () => {
    return (
      <div>
        <img src={PageNotFoundImg} style={{ 'width': '700px'}} />
        <p style={{ textAlign: "center" }}>
          <Link to='/'>Go to Home </Link>
        </p>
      </div>
    );
}

export default PageNotFound