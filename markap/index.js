const slides = [
  {
    title: 'slide1',
    images: 'image1.jpg',
    description: 'Автомобі́ль...'
  },
  {
    title: 'slide2',
    images: 'image2.jpg',
    description: 'Автомобі́ль...'
  },
  {
    title: 'slide3',
    images: 'image3.jpg',
    description: 'Автомобі́ль...'
  },
  {
    title: 'slide4',
    images: 'image4.jpg',
    description: 'Автомобі́ль...'
  },
  {
    title: 'slide5',
    images: 'image5.jpg',
    description: 'Автомобі́ль...'
  }
];

const main = document.querySelector('#main');
const prevBtn = createPrevButton();
const nextBtn = createNextButton();

let currentIndex = 0;

function renderSlides() {
  main.innerHTML = '';

  const currentSlide = slides[currentIndex];
  const sliderItemCard = createSliderItemCard(currentSlide);

  main.appendChild(prevBtn);
  main.appendChild(sliderItemCard);
  main.appendChild(nextBtn);

  updateButtonState();
}

function createSliderItemCard(item) {
  const cardSlider = document.createElement('div');
  const titleSlide = document.createElement('h3');
  const imgSlide = document.createElement('img');
  const descriptionSlide = document.createElement('p');

  cardSlider.classList.add('wrapp-slider');

  titleSlide.innerText = item.title;
  imgSlide.alt = `${item.images}`;
  imgSlide.src = `images/${item.images}`;
  descriptionSlide.innerText = item.description;

  cardSlider.append(titleSlide, imgSlide, descriptionSlide);

  return cardSlider;
}

function createPrevButton() {
  const prevBtnElement = document.createElement('button');
  const prevBtnContent = document.createElement('a');

  prevBtnElement.classList.add('prevBtn');
  prevBtnContent.innerText = 'prev';
  prevBtnContent.href = '#';

  prevBtnElement.appendChild(prevBtnContent);
  prevBtnElement.addEventListener('click', showPrevSlide);

  return prevBtnElement;
}

function createNextButton() {
  const nextBtnElement = document.createElement('button');
  const nextBtnContent = document.createElement('a');

  nextBtnElement.classList.add('nextBtn');
  nextBtnContent.innerText = 'next';
  nextBtnContent.href = '#';

  nextBtnElement.appendChild(nextBtnContent);
  nextBtnElement.addEventListener('click', showNextSlide);

  return nextBtnElement;
}

function showPrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    renderSlides();
  }
}

function showNextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    renderSlides();
  }
}

function updateButtonState() {
  if (currentIndex === 0) {
    prevBtn.style.visibility = 'hidden';
  } else {
    prevBtn.style.visibility = 'visible';
  }

  if (currentIndex === slides.length - 1) {
    nextBtn.style.visibility = 'hidden';
  } else {
    nextBtn.style.visibility = 'visible';
  }
}

renderSlides();