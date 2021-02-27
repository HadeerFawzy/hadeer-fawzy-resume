import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

const Section = ({ activeSection, item, setActiveSection, refs }) => {

  const [pageHeight, setPageHeight] = useState(10);

  useEffect(() => {
    setPageHeight(window.innerHeight);
    window.addEventListener('resize', () => {
      setTimeout(() => {
        setPageHeight(window.innerHeight);
      }, 300);
    });
  }, []);

  const observerMargin = Math.floor(pageHeight / 2);
  useEffect(() => {
    const observerConfig = {
      rootMargin: `-${
        pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
      }px 0px -${observerMargin}px 0px`,
      threshold: 0,
    };
    const handleIntersection = function(entries) {
      entries.forEach((entry) => {
        if (entry.target.id !== activeSection && entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerConfig
    );
    observer.observe(refs[item.id].current);
    return () => observer.disconnect(); // Clenaup the observer if component unmount.
  }, [ activeSection, setActiveSection, refs]);


  return ( 
    <div  className="Section" 
          ref={refs[item.id]}
          id={item.id}
          style={{height: '1000px'}}>
      {item.content}
    </div>
  );
}

Section.propTypes = {
  refs: PropTypes.object,
  setActiveSection: PropTypes.func,
  activeSection: PropTypes.string,
  item: PropTypes.object,
};

export default Section;
