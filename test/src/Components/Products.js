import './Products.css';
import Navbar from './userIT21174780/Navbar';
import Blog from './userIT21174780/Blog';
import Blog1 from './userIT21174780/Blog1';
import Blog2 from './userIT21174780/Blog2';
import Blog4 from './userIT21174780/Blog4';
import Blog5 from './userIT21174780/Blog5';
import Blog7 from './userIT21174780/Blog7';
import Testimonial from './userIT21174780/Testimonial';

function Products(){
    return( 
        <div className="container text-center">

        <div className="row align-items-start">
          <div className="col-12">
          <Navbar></Navbar>
          </div>
        </div>


        <div className="row align-items-start">
          <div className="col-12">
            <Blog></Blog>
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col pt-2">
          <Blog1></Blog1>
          </div>
          <div className="col pt-2">
          <Blog2></Blog2>
          </div>
        </div>


        <div className="row align-items-start">
          <div className="col">
          <Blog4></Blog4>
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col">
          <Blog5></Blog5>
          </div>
        </div>



        <div className="row align-items-start">
          <div className="col-8">
          <Blog7></Blog7>
          </div>
          <div className="col-4">
            <h5>Testimonial</h5>
            <Testimonial></Testimonial>
          </div>
        </div>


      </div>
           )
}
export default Products;   