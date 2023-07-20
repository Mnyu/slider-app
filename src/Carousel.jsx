import { useEffect, useState } from 'react';
import { shortList, list, longList } from '../data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currPersonIndex, setCurrPersonIndex] = useState(0);

  const prevSlide = () => {
    setCurrPersonIndex((people.length + currPersonIndex - 1) % people.length);
  };
  const nextSlide = () => {
    setCurrPersonIndex((currPersonIndex + 1) % people.length);
  };

  // Setup Autoplay - 2 seconds
  // REMEMBER CLEANUP IS ABSOLUTELY REQUIRED.
  useEffect(() => {
    let sliderIntervalId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderIntervalId);
    };
  }, [currPersonIndex]);

  return (
    <section className='slider-container'>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${
                100 * (personIndex - currPersonIndex)
              }%)`,
              opacity: personIndex === currPersonIndex ? 1 : 0,
              visibility:
                personIndex === currPersonIndex ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button type='button' className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
