import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBars } from '@fortawesome/free-solid-svg-icons'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class App
**/
//we are using class component 
class App extends Component {
  //1.properties
  state = {
    x:''
  }
  //2.constructor
      // constructor(){
     //   super();
     // }

  //3.methods
//Always remember to create only fat arrow function
  handleScroll = ()=>{
    console.log('okok' + window.scrollY)
    //if scroll amount is greater than 80px then we will fix the header top
    if(window.scrollY>=60){
      //we will add  'position-fixed start-0 top-0' this value

      this.setState({x:'position-fixed start-0 top-0'})
    }else{
     //we will remove 'position-fixed start-0 top-0' this value
     
     this.setState({x:''})
    }
  }
  componentDidMount(){
    //this method will be  called when page/component is rendered
   //alert('page is loaded')
   //console.log('page is loaded')

   window.addEventListener('scroll',this.handleScroll);
    
  }
  render() {
    return (
      <div>
        <header>
          <div className={'a_header_top p-1 w-100 '+this.state.x} >
            <button className=' me-1 btn  h-100' style={{ 'width': '10%' }}>
              <img className='img-fluid' src="./logo2.png" />
            </button>
            <button className=' lh-1fs-6 text-white me-1 btn h-100' style={{ 'width': '10%' }}>
              Deliver to Srk
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className='fw-bold d-block'>  <span className='a_city'>Indore</span> <span className='a_pincode'>452001</span></span>
            </button>
            <form className=' bg-white hform  w-50 h-75 d-inline-block'>C</form>
            <button className='btn h-100' style={{ 'width': '4%' }}>G</button>
            <button className='btn h-100' style={{ 'width': '8%' }}>E</button>
            <button className='btn h-100' style={{ 'width': '8%' }}>F</button>
            <button className='btn h-100' style={{ 'width': '8%' }}>G</button>
          </div>
          <div className='a_header_bottom'>
            <ul className=" ms-2 nav float-start">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#"><FontAwesomeIcon className='fs-5' icon={faBars} /> All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mobiles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Electronic</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Fashion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">New Releases</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Customer Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Amazon Pay</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Computers</a>
              </li>
            </ul>

            <a className='hbanner float-end  '>
              <img src="./Images/slider/banner.png" />
            </a>

            <ul className='nav float-start d-none'>
              <li className="nav-item">
                <a className="nav-link" href="#">Home &amp; Kitchen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Today's Deal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Toys &amp; Games</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sell</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Coupons</a>
              </li>
            </ul>
          </div>
        </header>
        <div className='a_main position-relative'>
          <div className='a_main1 a_main_top'>

            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./Images/slider/1.jpg" className="d-block w-100 " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./Images/slider/2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./Images/slider/3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./Images/slider/4.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./Images/slider/5.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./Images/slider/6.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./Images/slider/7.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./Images/slider/8.jpg" className="d-block w-100" alt="..." />
                </div>

              </div>
              <button className="carousel-control-prev h-50" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next h-50" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>

            </div>

          </div>

          <div className=' ml-1 position-absolute a_main_bottom'>

            <div className='a_main_bottom_1 row m-0 mb-3'>
              <div className='col'>a</div>
              <div className='col'>b</div>
              <div className='col'>c</div>
              <div className='col'>d</div>
            </div>

            <div className='a_main_bottom_2 row m-0 mb-3'>
              <div className='col-6'>a</div>
              <div className='col-3'>b</div>
              <div className='col-3'>c</div>
            </div>

            <div className='a_main_bottom_3 p-2'>
              <div className=''>
                <h3 className="float-start">Today's Deals</h3><button type='button' className='float-start btn btn-link' >See all deals</button>
              </div>

              <div id="carouselExample2" className="carousel slide">
                <div className="carousel-inner text-center">
                  <div className="carousel-item active">
                    <div className='imgCont row'>
                      <div className='col'>1</div>
                      <div className='col '>2</div>
                      <div className='col '>3</div>
                      <div className='col '>4</div>
                      <div className='col '>5</div>
                      <div className='col '>6</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className='imgCont row'>
                      <div className='col'>7</div>
                      <div className='col '>8</div>
                      <div className='col '>9</div>
                      <div className='col '>10</div>
                      <div className='col '>11</div>
                      <div className='col '>12</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className='imgCont row'>
                      <div className='col'>13</div>
                      <div className='col '>14</div>
                      <div className='col '>15</div>
                      <div className='col '>16</div>
                      <div className='col '>17</div>
                      <div className='col '>18</div>
                    </div>
                  </div>
                </div>
                <button className=" a_cc carousel-control-prev rounded-end" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className=" a_cc carousel-control-next rounded-start" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>



          </div>

        </div>
        <footer></footer>
      </div>

    )
  }
}


App.propTypes = {}
export default App
