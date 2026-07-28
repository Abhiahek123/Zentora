import React from 'react'
import { GrAmazon } from "react-icons/gr";
import { IoSquareOutline } from "react-icons/io5";

const CategorySection = () => {
  return (
    <>
      <div className='row py-3 category'>
        <div className='col-sm-10 mx-auto'>
          <div className='webheading'><h1 className='mt-5'>Browser Talent by Category on Zentora</h1><p className='fs-5 mt-5' style={{color:"#888888"}}>Where talent meets opportunity-find certified experts and agency-level professionals for any contract, stack, or timeline. </p></div>
          <hr className='w-25 mx-auto text-color1' />
          <div className='row py-2'>
            <div className="col-sm-4">
             <div className='card border border-0 shadow-lg mx-auto catcard'>
              <div className="row p-3">
                <div className="col-2">
                    <IoSquareOutline className='fs-3' />
                </div>
                <div className="col-10">
                  Web & Software Dev
                </div>
              </div>
             </div>
            </div>

            <div className="col-sm-4">
             <div className='card border border-0 shadow-lg mx-auto catcard1'>
              <div className="row p-3">
                <div className="col-2">
                    <IoSquareOutline className='fs-3' /> 
                </div>
                <div className="col-10">
                  Design & Creative
                </div>
              </div>
             </div>
            </div>

            <div className="col-sm-4">
             <div className='card border border-0 shadow-lg mx-auto catcard2'>
              <div className="row p-3">
                <div className="col-2">
                   <IoSquareOutline className='fs-3' />
                </div>
                <div className="col-10">
                  Writing & Translation
                </div>
              </div>
             </div>
            </div>

            


          </div>

           <div className='row py-2'>
            <div className="col-sm-4">
             <div className='card border border-0 shadow-lg mx-auto catcard'>
              <div className="row p-3">
                <div className="col-2">
                     <IoSquareOutline className='fs-3' />
                </div>
                <div className="col-10">
                  Admin Support
                </div>
              </div>
             </div>
            </div>

            <div className="col-sm-4">
             <div className='card border border-0 shadow-lg mx-auto catcard1'>
              <div className="row p-3">
                <div className="col-2">
                     <IoSquareOutline className='fs-3' />
                </div>
                <div className="col-10">
                 Data Science & Analytics
                </div>
              </div>
             </div>
            </div>

            <div className="col-sm-4">
             <div className='card border border-0 shadow-lg mx-auto catcard2'>
              <div className="row p-3">
                <div className="col-2">
                     <IoSquareOutline className='fs-3' />
                </div>
                <div className="col-10">
                  Marketing
                </div>
              </div>
             </div>
            </div>

            


          </div>


           <div className='row py-2'>
            <div className="col-sm-4">
             <div className='card border border-0 shadow-lg mx-auto catcard'>
              <div className="row p-3">
                <div className="col-2">
                   <IoSquareOutline className='fs-3' />
                </div>
                <div className="col-10">
                 Accounting & Consulting
                </div>
              </div>
             </div>
            </div>

            <div className="col-sm-4">
             <div className='card border border-0 shadow-lg mx-auto catcard1'>
              <div className="row p-3">
                <div className="col-2">
                    <IoSquareOutline className='fs-3' />
                </div>
                <div className="col-10">
                 IT & Networking
                </div>
              </div>
             </div>
            </div>

            <div className="col-sm-4">
             <div className='card border border-0 shadow-lg mx-auto catcard2'>
              <div className="row p-3">
                <div className="col-2">
                     <IoSquareOutline className='fs-3' />
                </div>
                <div className="col-10">
                  Video & Animation
                </div>
              </div>
             </div>
            </div>

            


          </div>
        </div>
      </div>
    </>
  )
}

export default CategorySection
