<<<<<<< HEAD
// export const API_URLS = {
//     GET_YOUNGKIDS_API_URL: '/youngKidsData.json',
//     GET_MIDDLESCHOOL_API_URL: '/middleSchoolData.json',
//     GET_PARENT_API_URL: '/parentsData.json',
//   };

export const API_URLS = {
  GET_CATEGORY_API_URL: (category: string) => {
    switch (category) {
      case 'youngkids':
        return '/youngKidsData.json';
      case 'middleschool':
        return '/middleSchoolData.json';
      case 'parents':
        return '/parentsData.json';
      default:
        return ''; // Or you can return a default API or handle it as needed
    }
  },
};
=======

// export const API_URLS = {
//     GET_YOUNGKIDS_API_URL: '/youngKidsData.json',
//     GET_MIDDLESCHOOL_API_URL: '/middleSchoolData.json',
//     GET_PARENT_API_URL: '/parentsData.json',
//   };

export const API_URLS = {
  GET_CATEGORY_API_URL: (category: string) => {
    switch (category) {
      case 'youngkids':
        return '/youngKidsData.json';
      case 'middleschool':
        return '/middleSchoolData.json';
      case 'parents':
        return '/parentsData.json';
      default:
        return ''; // Or you can return a default API or handle it as needed
    }
  },
};

>>>>>>> origin/main
