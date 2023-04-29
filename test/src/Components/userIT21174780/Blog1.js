import './Blog1.css';
import myImage from '../../images/thumb_article40.jpg';


function Blog1() {
    return (
        <div class="card ">
            <img class="card-img" src={myImage} alt="Card image cap"/>
             Desember 21, 2022
            <div class="card-body">
            <h5 class="card-title ">Card title</h5>
            <p class="card-text ">CSS Gradient is a happy little website and free tool that lets you create a gradient background for websites. Besides being a css gradient generator, the site is also chock-full of colorful content about gradients from technical articles to real life gradient examples like Stripe and Instagram.</p>
            <a href="#" class="btn btn-primary">Read More</a>
            </div>
        </div>
    );
  }

export default Blog1;