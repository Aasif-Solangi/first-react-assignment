import watchImage from "./images/watch-img.png";
import numImage from "./images/num-two.png";
const LastSection = () => {
  return (
    <div className="bg-black mt-0 bg-color">
      <div className="container mt-0 position-relative">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-6 text-white">
          <img className="w-25 img-fluid" src= {numImage} alt="image-one " /> 
            <h6 className="text-warning fw-bold">where you go is the key</h6>
            <h1 className="display-4 fw-bold mb-3">
              Understand Your <br /> Map & Timing
            </h1>
            <p className="text-white fw-normal">
              To start, print out the hiking guide and map. If it’s raining,
              throw them in a Zip-Lock bag. Read over the guide, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I’ll read the guide and
              know that say, in a mile, I make a right turn at the junction..
            </p>
            <a href="#" className="text-warning fw-bold text-decoration-none">
              read more →
            </a>
          </div>
          <div className="col-md-6">
            <img src={watchImage} alt="Hiker" className="img-fluid rounded hiker-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
