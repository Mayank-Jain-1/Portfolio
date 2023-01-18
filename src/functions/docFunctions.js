export const isVisible = (elem, viewHeight, scrollY, thresholdVisible) => {

  const threshold = thresholdVisible || 0;
  const rect = elem.getBoundingClientRect();
  const visible = viewHeight + scrollY - threshold >= rect.bottom;
  return visible;
};
