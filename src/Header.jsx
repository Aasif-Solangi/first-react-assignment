// import { Icon } from '@iconify/react';
// const Header = () =>{
//     return(
//         <>
//      <div class='hero-bg h-100vh object-fit-cover position-relative'> 
//       <div className="container">
//       <div className='d-flex justify-content-between align-items-center py-3'>
//         <div>
//         <h1 className='fw-bolder text-white text-style'>MNTN</h1>
//         </div>
//            <div>  
//             <ul className='d-flex list-unstyled'>
//                 <li className='me-3 fw-bold text-white'>Equipment</li>
//                 <li className='me-3 fw-bold text-white'>About us</li>
//                 <li className='fw-bold text-white'>Blog</li>
//             </ul>
//             </div>
//          <div>
//         <p className='fw-bold text-white'><Icon className='me-1 mb-1' icon="ic:outline-account-circle" />Account</p>
//         </div>
//        </div>

//      <div className='hero-heading text-white'>    
//      <h1 className='display-3 text-start'> Be prepared for the <br /> Mountains and beyond!</h1>
//     </div>
//       </div>
//       </div>
//      </>
//     );
   
// };



// export default Header;













import { Icon } from '@iconify/react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <div className="hero-bg h-100vh object-fit-cover position-relative">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-3">
            <div className="container-fluid">
              <h1 className="navbar-brand fw-bolder text-white text-style">MNTN</h1>
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleNavbar}
                aria-controls="navbarNav"
                aria-expanded={isNavbarOpen ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link text-white fw-bold me-3" href="#">Equipment</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white fw-bold me-3" href="#">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white fw-bold" href="#">Blog</a>
                  </li>
                </ul>
                <div className="d-flex align-items-center mt-3 mt-lg-0">
                  <p className="fw-bold text-white mb-0">
                    <Icon className="me-1 mb-1" icon="ic:outline-account-circle" />
                    Account
                  </p>
                </div>
              </div>
            </div>
          </nav>

          <div className="hero-heading text-white">
            <h1 className="display-3 text-start">
              Be prepared for the <br /> Mountains and beyond!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
