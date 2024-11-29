const colorBtn = document.getElementById('color-btn');
const colorCode = document.getElementById('color-code');

const getRandomColor = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
};

colorBtn.addEventListener('click', () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
});
