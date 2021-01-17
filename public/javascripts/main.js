let heroNavIndex = 0;
let searchData = [];

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

const toggleSearchBar = () => {
  document.querySelector('.search-container').classList.toggle('active');
};

async function fetchSearchData() {
  document.querySelector('.nav-links-container').classList.remove('preload');

  searchData = [];

  let destResponse = await fetch('/api/destinations', {method: 'GET'});
  let destinations = await destResponse.json();

  for (let dest of destinations) {
    searchData.push({
      heading: dest.heading,
      caption: dest.caption,
      link: `/destinations/${dest.linkName}`,
      tags: ['#destinations'],
    });
  }

  let styleResponse = await fetch('/api/styles', {method: 'GET'});
  let styles = await styleResponse.json();

  for (let style of styles) {
    searchData.push({
      heading: style.heading,
      caption: style.caption,
      link: `/styles/${style.linkName}`,
      tags: ['#tripstyle', '#tours', '#variation'],
    });
  }

  let substyleResponse = await fetch('/api/substyles', {method: 'GET'});
  let substyles = await substyleResponse.json();

  for (let substyle of substyles) {
    searchData.push({
      heading: substyle.heading,
      caption: substyle.caption,
      link: `/substyles/${substyle.linkName}`,
      tags: ['#variation', '#tours'],
    });
  }

  let tourResponse = await fetch('/api/tours', {method: 'GET'});
  let tours = await tourResponse.json();

  for (let tour of tours) {
    searchData.push({
      heading: tour.heading || '',
      caption: tour.caption || '',
      link: `/tours/${tour.linkName}` || '',
      tags: ['#tours'],
    });
  }

  let blogResponse = await fetch('/api/blogs', {method: 'GET'});
  let blogs = await blogResponse.json();

  for (let blog of blogs) {
    searchData.push({
      heading: blog.title || '',
      caption: blog.caption || '',
      link: `/blogs/${blog.linkName}` || '',
      tags: ['#blogs', '#content', '#destinations'],
    });
  }

  let careerResponse = await fetch('/api/careers', {method: 'GET'});
  let careers = await careerResponse.json();

  for (let career of careers) {
    searchData.push({
      heading: career.name || '',
      caption: career.description || '',
      link: '/careers',
      tags: ['#careers', '#jobs', '#oppurtunities'],
    });
  }
}

const updateSearchResults = () => {
  let query = document.querySelector('.search-field').value;
  let words = query.split(' ');

  let result = [];

  for (let word of words) {
    if (word === '') continue;
    let regex = new RegExp(word, 'gi');
    for (let d of searchData) {
      if (
        d.heading.match(regex) ||
        d.caption.match(regex) ||
        d.tags.some((tag) => tag.match(regex))
      ) {
        d.heading.replace(regex, '');
        result.push(d);
      }
    }
  }

  let list = document.querySelector('.search-list');

  list.innerHTML = '';

  let listItem = document.createElement('li');
  let anchor = document.createElement('a');
  let heading = document.createElement('span');

  listItem.classList.add('search-list-item');
  heading.classList.add('link-heading');

  heading.innerHTML = 'No search resutls yet :(';

  anchor.appendChild(heading);
  listItem.appendChild(anchor);

  if (result.length === 0) {
    list.appendChild(listItem);
    return;
  }

  for (let elem of result) {
    let listItem = document.createElement('li');
    let anchor = document.createElement('a');
    let heading = document.createElement('span');
    let caption = document.createElement('span');
    let tagList = document.createElement('ul');

    listItem.classList.add('search-list-item');
    heading.classList.add('link-heading');
    caption.classList.add('link-caption');
    tagList.classList.add('link-tags');

    heading.innerHTML = elem.heading;
    caption.innerHTML = elem.caption;

    anchor.href = elem.link;
    anchor.target = '_blank';

    anchor.appendChild(heading);
    anchor.appendChild(caption);

    listItem.appendChild(anchor);

    list.appendChild(listItem);

    for (let tag of elem.tags) {
      let tagItem = document.createElement('li');
      tagItem.classList.add('link-tag');
      tagItem.innerHTML = tag;
      tagList.appendChild(tagItem);
    }

    anchor.appendChild(tagList);
  }
};


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

window.addEventListener('load', fetchSearchData);

loop();
