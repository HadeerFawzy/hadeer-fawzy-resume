const ScrollTo = (id, yOffset = 0) => {
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

export default ScrollTo