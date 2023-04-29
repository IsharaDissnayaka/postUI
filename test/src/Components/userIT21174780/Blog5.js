import myImage from '../../images/thumb_article40.jpg';
function Blog5() {
    return (

                <div class="card bg-dark text-white">
                <img src={myImage} class="card-img" alt="..."/>
                <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>
                </div>
            )
    }
export default Blog5;
