const baseAUrl = 'https://pixabay.com/api/';

export const getImagesByQuery = query => {
  const params = new URLSearchParams({
    key: '23365926-b4db738b99f20e424398823c4',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${baseAUrl}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  });
};
