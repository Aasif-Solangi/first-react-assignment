import hikerImage from "./images/man-img.png";
import numImage from "./images/img-one.png";
const SectionOne = () => {
  return (
    <div className="bg-black mt-0 bg-color">
      <div className="container mt-0 position-relative"> 
        <div className="row d-flex justify-content-between align-items-center"> 
          <div className="col-md-6 text-white">
              <img className="w-25 img-fluid" src= {numImage} alt="image-one" /> 
            <h6 className="text-warning fw-bold">GET STARTED</h6>
            <h1 className="display-4 fw-bold mb-3">What level of hiker are you?</h1>
            <p className="text-white fw-normal">
              Determining what level of hiker you are can be an important tool when
              planning future hikes. This hiking level guide will help you plan hikes
              according to different hike ratings set by various websites like All Trails and
              Modern Hiker. What type of hiker are you – novice, moderate, advanced
              moderate, expert, or expert backpacker?
            </p>
            <a href="#" className="text-warning fw-bold text-decoration-none">
              read more →
            </a>
          </div>
          <div className="col-md-6">
            <img src={hikerImage}alt="Hiker"
              className="img-fluid rounded position-absolute hiker-image" 
              style={{top:'-220px',right: '0',zIndex: '1',width: '500px'}}/>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

