import './App.css';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import { useState } from 'react';

function App() {
  let[cart,setCart] = useState(0)
  let[toggle,setToggle]=useState(true)
  let[toggle1,setToggle1]=useState(true)
  let[toggle2,setToggle2]=useState(true)
  let[toggle3,setToggle3]=useState(true)
  let[toggle4,setToggle4]=useState(true)
  let[toggle5,setToggle5]=useState(true)
  let[toggle6,setToggle6]=useState(true)
  let[toggle7,setToggle7]=useState(true)
//   let[value,setValue]=useState(0)

  return <>
  <Navbar data={{cart,setCart}}/>
  
  

  {/* <!-- Header--> */}
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        {/* <!-- Section--> */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $40.00 - $80.00
                                    <Rating/>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  {
                                    toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart+1);setToggle(!toggle)}}>Add to cart</button>
                                    :
                                    <button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(state=>state-1);setToggle(state=>!state)}}>Remove</button>
                                  }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Special Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    {/* <div className="d-flex justify-content-center small text-warning mb-2">
                                    <Rating/>                                    
                                        
                                    </div>  */}
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                    <Rating/>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                    toggle1?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart+1);setToggle1(!toggle1)}}>Add to cart</button>
                                    :
                                    <button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(state=>state-1);setToggle1(state=>!state)}}>Remove</button>
                                  }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                    <Rating/>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                    toggle2?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart+1);setToggle2(!toggle2)}}>Add to cart</button>
                                    :
                                    <button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(state=>state-1);setToggle2(state=>!state)}}>Remove</button>
                                  }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    {/* <div className="d-flex justify-content-center small text-warning mb-2">
                                        
                                    </div> */}
                                    {/* <!-- Product price--> */}
                                    $40.00
                                    <Rating/>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                    toggle3?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart+1);setToggle3(!toggle3)}}>Add to cart</button>
                                    :
                                    <button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(state=>state-1);setToggle3(state=>!state)}}>Remove</button>
                                  }                                    
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                    <Rating/>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                    toggle4?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart+1);setToggle4(!toggle4)}}>Add to cart</button>
                                    :
                                    <button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(state=>state-1);setToggle4(state=>!state)}}>Remove</button>
                                  }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $120.00 - $280.00
                                    <Rating/>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                    toggle5?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart+1);setToggle5(!toggle5)}}>Add to cart</button>
                                    :
                                    <button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(state=>state-1);setToggle5(state=>!state)}}>Remove</button>
                                  }
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem", "right": "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Special Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                    <Rating/>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                    toggle6?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart+1);setToggle6(!toggle6)}}>Add to cart</button>
                                    :
                                    <button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(state=>state-1);setToggle6(state=>!state)}}>Remove</button>
                                  }
                                
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    {/* <div className="d-flex justify-content-center small text-warning mb-2">
                                        
                                    </div> */}
                                    {/* <!-- Product price--> */}
                                    $40.00
                                    <Rating/>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                    toggle7?<button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart+1);setToggle7(!toggle7)}}>Add to cart</button>
                                    :
                                    <button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(state=>state-1);setToggle7(state=>!state)}}>Remove</button>
                                  }
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
  </>
  
}

export default App;
