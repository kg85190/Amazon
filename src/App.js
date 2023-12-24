
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className='a_header_top'></div>
        <div className='a_header_bottom'></div>

      </header>
      <div className='a_main position-relative'>
        <div className='a_main1'>
        <div id="carouselExample" class="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./Images/slider/1.jpg" class="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./Images/slider/2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./Images/slider/3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./Images/slider/4.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./Images/slider/5.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./Images/slider/6.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./Images/slider/7.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./Images/slider/8.jpg" class="d-block w-100" alt="..."/>
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
           <div className='a_main2 w-100 position-absolute top-1 start-10'>
             
           </div>
      </div>
      <footer></footer>
    </div>
      
  );
}

export default App;
