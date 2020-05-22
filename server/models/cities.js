const {destinations} = require('./destinations');

const cities = {
  'swat' : [
      {
        heading:'Mallam Jabba',
        lres:'/assets/images/lres/cities/mallam-jabba.jpg',
        mres:'/assets/images/mres/cities/mallam-jabba.jpg',
        hres:'/assets/images/hres/cities/mallam-jabba.jpg',
        alt:'Photo of scenic view of Mallam Jabba',
        href:'/tours/mallam-jabba',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Gabbin Jabba',
        mres:'/assets/images/mres/cities/gabbin-jabba.jpg',
        lres:'/assets/images/lres/cities/gabbin-jabba.jpg',
        hres:'/assets/images/hres/cities/gabbin-jabba.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/gabeen-jabba',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Kalam',
        lres:'/assets/images/lres/cities/kalam.jpg',
        mres:'/assets/images/mres/cities/kalam.jpg',
        hres:'/assets/images/hres/cities/kalam.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/kalam',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ],
  'punjab' : [
      {
        heading:'Lahore',
        lres:'/assets/images/lres/cities/lahore.jpg',
        mres:'/assets/images/mres/cities/lahore.jpg',
        hres:'/assets/images/hres/cities/lahore.jpg',
        alt:'Photo of scenic view of Mallam Jabba',
        href:'/tours/lahore',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Multan',
        lres:'/assets/images/lres/cities/multan.jpg',
        mres:'/assets/images/mres/cities/multan.jpg',
        hres:'/assets/images/hres/cities/multan.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/multan',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Taxila',
        lres:'/assets/images/lres/cities/taxila.jpg',
        mres:'/assets/images/mres/cities/taxila.jpg',
        hres:'/assets/images/hres/cities/taxila.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/taxila',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Mianwali',
        lres:'/assets/images/lres/cities/mianwali.jpg',
        mres:'/assets/images/mres/cities/mianwali.jpg',
        hres:'/assets/images/hres/cities/mianwali.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/mianwali',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Soon Valley',
        lres:'/assets/images/lres/cities/soon-valley.jpg',
        mres:'/assets/images/mres/cities/soon-valley.jpg',
        hres:'/assets/images/hres/cities/soon-valley.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/soon-valley',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Panjpir',
        lres:'/assets/images/lres/cities/panjpir.jpg',
        mres:'/assets/images/mres/cities/panjpir.jpg',
        hres:'/assets/images/hres/cities/panjpir.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/panjpir',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Kartarpur',
        lres:'/assets/images/lres/cities/kartarpur.jpg',
        mres:'/assets/images/mres/cities/kartarpur.jpg',
        hres:'/assets/images/hres/cities/kartarpur.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/kartarpur',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Galliyat',
        lres:'/assets/images/lres/cities/galliyat.jpg',
        mres:'/assets/images/mres/cities/galliyat.jpg',
        hres:'/assets/images/hres/cities/galliyat.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/galliyat',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Islamabad',
        lres:'/assets/images/lres/cities/islamabad.jpg',
        mres:'/assets/images/mres/cities/islamabad.jpg',
        hres:'/assets/images/hres/cities/islamabad.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/islamabad',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ],
  'sindh' : [
      {
        heading:'Mohenjo Daro',
        lres:'/assets/images/lres/cities/mohenjo-daro.jpg',
        mres:'/assets/images/mres/cities/mohenjo-daro.jpg',
        hres:'/assets/images/hres/cities/mohenjo-daro.jpg',
        alt:'Photo of scenic view of Mallam Jabba',
        href:'/tours/mohenjo-daro',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Karachi',
        lres:'/assets/images/lres/cities/karachi.jpg',
        mres:'/assets/images/mres/cities/karachi.jpg',
        hres:'/assets/images/hres/cities/karachi.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/karachi',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Gorakh Hill',
        lres:'/assets/images/lres/cities/gorakh-hill.jpg',
        mres:'/assets/images/mres/cities/gorakh-hill.jpg',
        hres:'/assets/images/hres/cities/gorakh-hill.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/gorakh-hill',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Interior Sindh',
        lres:'/assets/images/lres/cities/interior-sindh.jpg',
        mres:'/assets/images/mres/cities/interior-sindh.jpg',
        hres:'/assets/images/hres/cities/interior-sindh.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/interior-sindh',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ],
  'kpk' : [
      {
        heading:'Mushkpuri',
        lres:'/assets/images/lres/cities/mushkpuri.jpg',
        mres:'/assets/images/mres/cities/mushkpuri.jpg',
        hres:'/assets/images/hres/cities/mushkpuri.jpg',
        alt:'Photo of scenic view of Mallam Jabba',
        href:'/tours/mushkpuri',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Miran Jani',
        lres:'/assets/images/lres/cities/miran-jani.jpg',
        mres:'/assets/images/mres/cities/miran-jani.jpg',
        hres:'/assets/images/hres/cities/miran-jani.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/miran-jani',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Kumrat',
        lres:'/assets/images/lres/cities/kumrat.jpg',
        mres:'/assets/images/mres/cities/kumrat.jpg',
        hres:'/assets/images/hres/cities/kumrat.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/kumrat',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Battagram',
        lres:'/assets/images/lres/cities/battagram.jpg',
        mres:'/assets/images/mres/cities/battagram.jpg',
        hres:'/assets/images/hres/cities/battagram.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/battagram',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Khanpur',
        lres:'/assets/images/lres/cities/khanpur.jpg',
        mres:'/assets/images/mres/cities/khanpur.jpg',
        hres:'/assets/images/hres/cities/khanpur.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/khanpur',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Karunbar Lake',
        lres:'/assets/images/lres/cities/karunbar-lake.jpg',
        mres:'/assets/images/mres/cities/karunbar-lake.jpg',
        hres:'/assets/images/hres/cities/karunbar-lake.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/karunbar-lake',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Chitral/Kalash',
        lres:'/assets/images/lres/cities/chitral.jpg',
        mres:'/assets/images/mres/cities/chitral.jpg',
        hres:'/assets/images/hres/cities/chitral.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/chitral',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Shandoor',
        lres:'/assets/images/lres/cities/shandoor.jpg',
        mres:'/assets/images/mres/cities/shandoor.jpg',
        hres:'/assets/images/hres/cities/shandoor.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/shandoor',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ],
  'naran' : [
      {
        heading:'Shogran',
        lres:'/assets/images/lres/cities/shogran.jpg',
        mres:'/assets/images/mres/cities/shogran.jpg',
        hres:'/assets/images/hres/cities/shogran.jpg',
        alt:'Photo of scenic view of Mallam Jabba',
        href:'/tours/shogran',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Naran',
        lres:'/assets/images/lres/dests/naran.jpg',
        mres:'/assets/images/mres/dests/naran.jpg',
        hres:'/assets/images/hres/dests/naran.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/naran',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Babusar',
        lres:'/assets/images/lres/cities/babusar.jpg',
        mres:'/assets/images/mres/cities/babusar.jpg',
        hres:'/assets/images/hres/cities/babusar.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/babusar',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Doodhi Patsar',
        lres:'/assets/images/lres/cities/doodhi-patsar.jpg',
        mres:'/assets/images/mres/cities/doodhi-patsar.jpg',
        hres:'/assets/images/hres/cities/doodhi-patsar.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/doodhi-patsar',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Sheran Forest',
        lres:'/assets/images/lres/cities/sheran-forest.jpg',
        mres:'/assets/images/mres/cities/sheran-forest.jpg',
        hres:'/assets/images/hres/cities/sheran-forest.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/sheran-forest',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ],
  'balochistan' : [
      {
        heading:'Gwadar',
        lres:'/assets/images/lres/dests/gwadar.jpg',
        mres:'/assets/images/mres/dests/gwadar.jpg',
        hres:'/assets/images/hres/dests/gwadar.jpg',
        alt:'Photo of scenic view of Mallam Jabba',
        href:'/tours/gwadar',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Quetta',
        lres:'/assets/images/lres/cities/quetta.jpg',
        mres:'/assets/images/mres/cities/quetta.jpg',
        hres:'/assets/images/hres/cities/quetta.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/naran',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Molla Chattook',
        lres:'/assets/images/lres/cities/molla-chattook.jpg',
        mres:'/assets/images/mres/cities/molla-chattook.jpg',
        hres:'/assets/images/hres/cities/molla-chattook.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/molla-chatook',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Astola Island',
        lres:'/assets/images/lres/cities/astola-island.jpg',
        mres:'/assets/images/mres/cities/astola-island.jpg',
        hres:'/assets/images/hres/cities/astola-island.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/astola-island',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ],
    'kashmir' : [
      {
        heading:'Neelam Valley',
        lres:'/assets/images/lres/cities/neelam-valley.jpg',
        mres:'/assets/images/mres/cities/neelam-valley.jpg',
        hres:'/assets/images/hres/cities/neelam-valley.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/neelam-valley',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Rawalkot',
        lres:'/assets/images/lres/cities/rawalkot.jpg',
        mres:'/assets/images/mres/cities/rawalkot.jpg',
        hres:'/assets/images/hres/cities/rawalkot.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/rawalkot',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Muzafarabad',
        lres:'/assets/images/lres/cities/muzafarabad.jpg',
        mres:'/assets/images/mres/cities/muzafarabad.jpg',
        hres:'/assets/images/hres/cities/muzafarabad.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/muzafarabad',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Ratti Galli',
        lres:'/assets/images/lres/cities/ratti-galli.jpg',
        mres:'/assets/images/mres/cities/ratti-galli.jpg',
        hres:'/assets/images/hres/cities/ratti-galli.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/ratti-galli',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Chitta Katha',
        lres:'/assets/images/lres/cities/chitta-katha.jpg',
        mres:'/assets/images/mres/cities/chitta-katha.jpg',
        hres:'/assets/images/hres/cities/chitta-katha.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/chitta-katha',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ],
    'gilgit' : [
      {
        heading:'Hunza',
        lres:'/assets/images/lres/cities/hunza.jpg',
        mres:'/assets/images/mres/cities/hunza.jpg',
        hres:'/assets/images/hres/cities/hunza.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/hunza',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Phandar',
        lres:'/assets/images/lres/cities/phandar.jpg',
        mres:'/assets/images/mres/cities/phandar.jpg',
        hres:'/assets/images/hres/cities/phandar.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/phandar',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Shimshal',
        lres:'/assets/images/lres/cities/shimshal.jpg',
        mres:'/assets/images/mres/cities/shimshal.jpg',
        hres:'/assets/images/hres/cities/shimshal.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/shimshal',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Astore Deosai',
        lres:'/assets/images/lres/cities/astore-deosai.jpg',
        mres:'/assets/images/mres/cities/astore-deosai.jpg',
        hres:'/assets/images/hres/cities/astore-deosai.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/astore-deosai',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Skardu',
        lres:'/assets/images/lres/cities/skardu.jpg',
        mres:'/assets/images/mres/cities/skardu.jpg',
        hres:'/assets/images/hres/cities/skardu.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/skardu',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Rattu',
        lres:'/assets/images/lres/cities/rattu.jpg',
        mres:'/assets/images/mres/cities/rattu.jpg',
        hres:'/assets/images/hres/cities/rattu.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/rattu',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Naltar',
        lres:'/assets/images/lres/cities/naltar.jpg',
        mres:'/assets/images/mres/cities/naltar.jpg',
        hres:'/assets/images/hres/cities/naltar.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/naltar',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Haramoosh',
        lres:'/assets/images/lres/cities/haramoosh.jpg',
        mres:'/assets/images/mres/cities/haramoosh.jpg',
        hres:'/assets/images/hres/cities/haramoosh.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/haramoosh',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'Fairy Meadows',
        lres:'/assets/images/lres/cities/fairy-meadows.jpg',
        mres:'/assets/images/mres/cities/fairy-meadows.jpg',
        hres:'/assets/images/hres/cities/fairy-meadows.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/fairy-meadows',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        heading:'K-2',
        lres:'/assets/images/lres/cities/k2.jpg',
        mres:'/assets/images/mres/cities/k2.jpg',
        hres:'/assets/images/hres/cities/k2.jpg',
        alt:'Photo of scenic view of Gabeen Jabba',
        href:'/tours/k2',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ],
    'gwadar' : [
      {
        heading: 'Gwadar',
        lres:'/assets/images/lres/dests/gwadar.jpg',
        mres:'/assets/images/mres/dests/gwadar.jpg',
        hres:'/assets/images/hres/dests/gwadar.jpg',
        alt:'Photo of scenic view of Gwadar',
        href:'/tours/gwadar',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ]
}

module.exports = {cities};
