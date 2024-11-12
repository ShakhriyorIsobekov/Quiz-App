// rrd import
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  if (error.statusText === "Not Found") {
    return (
      <div className="error-container container">
        <div>
          <h1>404 ⚠</h1>
          <h3>
            Page not found :( <br /> While our developrs fixing an issue, please
            enjoy with biscuits and tee!!!
          </h3>
          <Link to="/" className="btn">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="error-container container">
      <div>
        <h1>Something went wrong :(</h1>
        <h3>
          Page not found :( <br /> While our developrs fixing an issue, please
          enjoy with biscuits and tee!!!
        </h3>
        <Link to="/" className="btn">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
