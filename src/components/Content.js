import './Content.css';
import skibbidi from '../Assets/skibbidi.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Content() {
    return (
        <div className="container-fluid ncontent align-items-center justify-content-center">
            <div className='row align-items-center justify-content-center'>
                <div className='col align-items-center justify-content-center'>
                    <div className='newslet'>
                        <div><img src={skibbidi} alt="" /></div>
                        <div><h3>Skibbidi Movie</h3></div>
                        <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto earum alias impedit facilis dolor nostrum natus minima dolore, quam unde dolores vero officia aperiam, pariatur dolorem commodi tempore quos doloribus.</p></div>
                    </div>
                </div>
                <div className='col align-items-center justify-content-center'>
                        <div className='newslet'>
                        <div><img src={skibbidi} alt="" /></div>
                        <div><h3>Skibbidi Movie</h3></div>
                        <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto earum alias impedit facilis dolor nostrum natus minima dolore, quam unde dolores vero officia aperiam, pariatur dolorem commodi tempore quos doloribus.</p></div>
                    </div>
                </div>
                <div className='col align-items-center justify-content-center'>
                        <div className='newslet'>
                        <div><img src={skibbidi} alt="" /></div>
                        <div><h3>Skibbidi Movie</h3></div>
                        <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto earum alias impedit facilis dolor nostrum natus minima dolore, quam unde dolores vero officia aperiam, pariatur dolorem commodi tempore quos doloribus.</p></div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Content;