import notFound from "../../assets/img/404.svg";
const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <div className="error-text">
            <h1>Opss...</h1>
            <h3>Page Not Found</h3>
            <img className="w-50" src={notFound} alt="Not_Found" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
