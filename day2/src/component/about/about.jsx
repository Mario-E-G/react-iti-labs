import aboutImg from "../../assets/img/about.svg";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col my-4 text-center">
          <div className="error-text">
            <h2>Welcome About</h2>
            <img className="w-75" src={aboutImg} alt="about_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
