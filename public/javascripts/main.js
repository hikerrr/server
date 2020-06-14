let heroNavIndex = 0;

const toggleNavigation = () => {
  if (window.matchMedia('(min-width:768px)').matches) return;
  document.getElementsByTagName('body')[0].classList.toggle('nav-is-open');
};

const appNavOpen = () => {
  document.querySelector('.app-wrapper').classList.toggle('app-nav-open');
};

const toggleContent = (index) => {
  document.querySelectorAll('.app-content').forEach((elem, i) => {
    if (index == i) {
      elem.classList.add('app-active-content');
      document.querySelector('.app-wrapper').classList.toggle('app-nav-open');
    } else {
      elem.classList.remove('app-active-content');
    }
  });
};

const toggleDropDown = (index) => {
  document
    .querySelectorAll('.list-item-dropdown-wrapper')
    [index].classList.toggle('drop-down-active');
  document
    .querySelectorAll('.app-content-list-item')
    [index].classList.toggle('item-active');
};

const heroNavLeft = () => {
  const heroNavs = document.querySelectorAll('.hero-gadets-wrapper');
  // heroNavs[heroNavIndex].classList.toggle('off-screen-hero');
  let previousNav = heroNavIndex - 1;
  if (previousNav < 0) {
    previousNav = heroNavs.length - 1;
  }
  heroNavs[heroNavIndex].classList.toggle('off-screen-hero');
  heroNavs[previousNav].classList.toggle('off-screen-hero');
  heroNavIndex -= 1;
  if (heroNavIndex < 0) {
    heroNavIndex = heroNavs.length - 1;
  }
};

const heroNavRight = () => {
  const heroNavs = document.querySelectorAll('.hero-gadets-wrapper');
  // heroNavs[heroNavIndex].classList.toggle('off-screen-hero');
  const previousNav = (heroNavIndex + 1) % heroNavs.length;
  heroNavs[heroNavIndex].classList.toggle('off-screen-hero');
  heroNavs[previousNav].classList.toggle('off-screen-hero');
  heroNavIndex = (heroNavIndex + 1) % heroNavs.length;
};

const toggleVideo = () => {
  const videoPlayer = document.querySelector('.ab-video');
  const playIcon = document.querySelector('.ab-video-play');
  if (videoPlayer.paused) {
    videoPlayer.play();
    playIcon.style.visibility = 'hidden';
  } else {
    videoPlayer.pause();
    playIcon.style.visibility = 'visible';
  }
};

const callback = function (entries) {
  entries.forEach((entry) => {
    entry.target.classList.toggle('watch');
  });
};

// const observer = new IntersectionObserver(callback);

// const targets = document.querySelectorAll(".ts-card-container");
// targets.forEach(function(target) {
//  observer.observe(target);
// });

function toggleFullscreenMode(value) {
  const body = document.documentElement;

  if (body.requestFullscreen()) {
    body.requestFullscreen();
  } else if (body.mozRequestFullScreen) {
    body.mozRequestFullScreen();
  } else if (body.webkitRequestFullScreen) {
    body.webkitRequestFullScreen();
  } else if (body.msRequestFullScreen) {
    body.msRequestFullScreen();
  }
}

function scrollDown() {
  window.scrollBy(0, window.innerHeight);
}

function scrollUp() {
  window.scrollBy(0, -window.innerHeight);
}

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === 'function' && el instanceof jQuery) {
    el = el[0];
  }
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

function loop() {
  document.querySelectorAll('.watch').forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  requestAnimationFrame(loop);
}

if (
  window.matchMedia('(min-width: 768px)').matches &&
  document.querySelector('.nav-container')
) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      document.querySelector('.nav-container').style.backgroundColor =
        'var(--color-dark)';
    } else {
      let color = document
        .querySelector('.nav-container')
        .getAttribute('data-color');
      document.querySelector('.nav-container').style.backgroundColor = color;
    }
  });
}

document.querySelectorAll('.app-content-list-item').forEach((elem) => {
  elem.addEventListener('click', function () {
    this.classList.toggle('item-active');
    const dropDown = this.nextElementSibling;
    if (dropDown.style.maxHeight) {
      dropDown.style.maxHeight = null;
    } else {
      dropDown.style.maxHeight = `${dropDown.scrollHeight}px`;
    }
  });
});

function setActiveItinerary(index) {
  document.querySelectorAll('.itinerary-nav-list-item').forEach((item, i) => {
    if (i == index) {
      item.classList.add('active-itinerary-item');
    } else {
      item.classList.remove('active-itinerary-item');
    }
  });

  document.querySelectorAll('.itinerary-item').forEach((item, i) => {
    if (i == index) {
      item.classList.add('active-itinerary');
    } else {
      item.classList.remove('active-itinerary');
    }
  });
}

if (window.matchMedia('(min-width:768px)').matches) {
  let color = document
    .querySelector('.nav-container')
    .getAttribute('data-color');
  document.querySelector('.nav-container').style.backgroundColor = color;
}


loop();
