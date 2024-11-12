const FooterSection = () => {
   return (
     <> 
       <div className="bg-black py-4"> 
         <div className="container">
           <div className="row d-flex justify-content-around text-center text-lg-start">
             <div className="col-lg-4 col-md-12 mb-4">
               <h1 className="fw-bolder fs-1 text-white">MNTN</h1>
               <p className="fw-bold text-white">
                 Get out there & discover your next <br /> slope, mountain & destination!
               </p>
               <span className="fw-bold text-secondary">
                 &copy; 2023 MNTN, Inc. Terms & Privacy
               </span>
             </div>
             
             <div className="col-lg-4 col-md-6 mb-4">
               <h3 className="mb-3 fw-bolder text-warning">More on The Blog</h3>
               <ul className="list-unstyled">
                 <li className="text-white fw-normal mb-2">About MNTN</li>
                 <li className="text-white fw-normal mb-2">Contributors & Writers</li>
                 <li className="text-white fw-normal mb-2">Write For Us</li>
                 <li className="text-white fw-normal mb-2">Contact Us</li>
                 <li className="text-white fw-normal mb-2">Privacy Policy</li>
               </ul>
             </div>
             
             <div className="col-lg-4 col-md-6">
               <h3 className="mb-3 fw-bolder text-warning">More on MNTN</h3>
               <ul className="list-unstyled">
                 <li className="text-white fw-normal mb-2">The Team</li>
                 <li className="text-white fw-normal mb-2">Jobs</li>
                 <li className="text-white fw-normal">Press</li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </>
   );
 };
 
 export default FooterSection;
 