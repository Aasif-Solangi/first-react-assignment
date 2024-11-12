import manImage from "./images/man-img-two.png";
import numImage from "./images/num-three.png";
const SectionTwo = () => {
  return (
    <div className="bg-black mt-0 bg-color">
      <div className="container mt-0 position-relative">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-6">
            <img src={manImage} alt="Hiker" className="img-fluid rounded hiker-image" />
          </div>

          <div className="col-md-6 text-white">
          <img className="w-25 img-fluid" src= {numImage} alt="image-one" /> 
            <h6 className="text-warning fw-bold">Hiking Essentials</h6>
            <h1 className="display-4 fw-bold mb-3">
              Picking the right <br /> Hiking Gear!
            </h1>
            <p className="text-white fw-normal">
              The nice thing about beginning hiking is that you don’t really
              need any special gear, you can probably get away with things you
              already have. Let’s start with clothing. A typical mistake hiking
              beginners make is wearing jeans and regular clothes, which will
              get heavy and chafe wif they get sweaty or wet.
            </p>
            <a href="#" className="text-warning fw-bold text-decoration-none">
              read more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
