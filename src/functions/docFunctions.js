export const isVisible = (elem, viewHeight, thresholdVisible) => {

  const threshold = thresholdVisible || 0;
  const rect = elem.getBoundingClientRect();
  const visible = viewHeight - threshold >= rect.top;

  return visible;
};
