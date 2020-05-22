let heroNavIndex = 0;

const toggleNavigation = () => {
  document.getElementsByTagName('body')[0].classList.toggle('nav-is-open');
};

const heroNavLeft = () => {
  let heroNavs = document.querySelectorAll('.hero-gadets-wrapper');
  //heroNavs[heroNavIndex].classList.toggle('off-screen-hero');
  let previousNav = heroNavIndex - 1;
  if(previousNav < 0) {
    previousNav = heroNavs.length - 1;
  }
  heroNavs[heroNavIndex].classList.toggle('off-screen-hero');
  heroNavs[previousNav].classList.toggle('off-screen-hero');
  heroNavIndex -= 1;
  if(heroNavIndex < 0) {
    heroNavIndex = heroNavs.length - 1;
  }
}

const heroNavRight = () => {
  let heroNavs = document.querySelectorAll('.hero-gadets-wrapper');
  //heroNavs[heroNavIndex].classList.toggle('off-screen-hero');
  let previousNav = (heroNavIndex + 1) % heroNavs.length;
  heroNavs[heroNavIndex].classList.toggle('off-screen-hero');
  heroNavs[previousNav].classList.toggle('off-screen-hero');
  heroNavIndex = (heroNavIndex + 1) % heroNavs.length;
}

const toggleVideo = () => {
  let videoPlayer = document.querySelector('.ab-video');
  let playIcon = document.querySelector('.ab-video-play');
  if(videoPlayer.paused) {
    videoPlayer.play();
    playIcon.style.visibility = 'hidden';
  }
  else {
    videoPlayer.pause();
    playIcon.style.visibility = 'visible';
  }
}

const callback = function(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle("watch");
  });
};

//const observer = new IntersectionObserver(callback);

//const targets = document.querySelectorAll(".ts-card-container");
//targets.forEach(function(target) {
//  observer.observe(target);
//});

function scrollDown() {
  window.scrollBy(0,window.innerHeight);
}

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

function loop() {

  document.querySelectorAll('.watch').forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  requestAnimationFrame(loop);
}

if(window.matchMedia("(min-width: 768px)").matches)
{
  window.addEventListener('scroll', () => {
    if(window.scrollY > 80) {
      document.querySelector('.nav-container').style.backgroundColor = 'var(--color-dark)';
  }
    else {
        document.querySelector('.nav-container').style.backgroundColor = 'transparent';
    }

  });
}

loop();
