// eslint-disable-next-line import/prefer-default-export
export function getProfileInfo() {
  return {
    Name: 'Yazan Tarifi',
    SmallDescription: 'Android Developer',
    Description: 'A code-minded front-end software engineer focused on building beautiful interfaces & experiences and Convert Ideas, Design To System With Frontend Side (Android Apps, React Websites, Next.js Websites) also The Backend Side With (SpringBoot, Ktor, Nest.js, Laravel), Always Trying To Build Tools To Help and Improve My Work',
    SkillsList: [
      'Android Apps',
      'Restful Api',
      'Websites',
    ],
  };
}

export function getProjectsList() {
  return [
    {
      type: 'android',
      name: 'Autohub',
      typeText: 'Android Application - Open Source',
      description: 'An Github Client Built To Test Vortex Infrastructure For Android Applications With A Lot Of Features To Manage Github Accounts Personal Accounts, Repositories, Search Repository, Popular Repos, Orgs, Gists, Github Auth, With Kotlin Programming Language',
      link: 'https://github.com/Yazan98/Github-Client',
      createdAt: 'Github - 2019',
      mainImage: '/autohub.png',
      previewImage: '/autohub_preview.png',
      images: [
        '/autohub_1.png',
        '/autohub_2.png',
        '/autohub_3.png',
        '/autohub_4.png',
      ],
      tags: [
        'MVVM',
        'Vortex',
        'Kotlin',
        'Retrofit',
        'RxJava',
        'Kotlin Courotines',
        'Multi Modular App',
      ],
    },
    {
      type: 'android',
      name: 'Drasati',
      typeText: 'Android Application - Closed Source',
      description: 'An organizing platform for school students that aims to gather students and link them with audible lessons by providing a tree plan with the possibility to speak with teachers if a difference occurs on a certain point with the support feature of all classes',
      link: '',
      createdAt: '2018',
      mainImage: '/drasati_main.png',
      previewImage: '/drasati_preview.png',
      images: [
        '/drasati_1.png',
        '/drasati_2.png',
        '/drasati_3.png',
      ],
      tags: [
        'MVVM',
        'Vortex',
        'Kotlin',
        'Retrofit',
        'RxJava',
        'Kotlin Courotines',
        'Multi Modular App',
      ],
    },
    {
      type: 'android',
      name: 'Wintrop',
      typeText: 'Android Application - Open Source',
      description: 'Weather Application Powered By Vortex , Latest Android Technologies With Managed Structure To Show Weather Status For Amman, Irbid, Aqaba',
      link: 'https://github.com/Yazan98/Wintrop',
      createdAt: '2019',
      mainImage: '/wintrop_main.png',
      previewImage: '/wintrop_preview.png',
      images: [
        '/wintrop_1.png',
        '/wintrop_2.png',
        '/wintrop_3.png',
      ],
      tags: [
        'MVVM',
        'Vortex',
        'Kotlin',
        'Retrofit',
        'RxJava',
        'Kotlin Courotines',
        'Multi Modular App',
      ],
    },
    {
      type: 'android',
      name: 'Destiny',
      typeText: 'Android Application - Open Source',
      description: 'Restaurant Application Powered By Vortex Infrastructure With Latest Technologies, Realm Database, Restful Api, Trainig Project and Testing For Vortex Testing',
      link: 'https://github.com/Yazan98/Destiny',
      createdAt: 'Github - 2019',
      mainImage: '',
      previewImage: '/destiny_preview.png',
      images: [],
      tags: [
        'MVVM',
        'Vortex',
        'Kotlin',
        'Retrofit',
        'RxJava',
        'Kotlin Courotines',
        'Multi Modular App',
      ],
    },
  ];
}

export function getProjectsListByFilter(filter = 'all') {
  const apps = getProjectsList();
  const appsFiltered = [];
  for (let i = 0; i < apps.length; i++) {
    if (apps[i].type === filter) {
      appsFiltered.push(apps[i]);
    }
  }
  return appsFiltered;
}
