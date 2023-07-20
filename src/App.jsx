import Carousel from './Carousel';
import SlickCarousel from './SlickCarousel';

const App = () => {
  return (
    <main>
      <h3 className='title' style={{ marginTop: '2rem' }}>
        Native React and CSS
      </h3>
      <Carousel />
      <h3 className='title' style={{ marginTop: '2rem' }}>
        React-Slick and Slick-Carousel library
      </h3>
      <SlickCarousel />
    </main>
  );
};
export default App;
