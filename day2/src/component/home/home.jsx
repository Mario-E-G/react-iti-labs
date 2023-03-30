import homeImg from "../../assets/img/home.svg";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <div className="error-text">
            <h2>Welcome Home</h2>
            <img className="w-50" src={homeImg} alt="home_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
