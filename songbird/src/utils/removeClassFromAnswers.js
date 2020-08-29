export const removeClassFromAnswers = (className) => {
  const elements = document.querySelectorAll(`.${className}`);
  Array.from(elements).forEach((element) => {
    element.classList.remove(className);
  });
}