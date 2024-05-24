export function getDataFromAPI(BASE_URL, API_KEY, inputValue) {
    const fullUrl = constructUrl(BASE_URL, API_KEY, inputValue);
    return fetch(fullUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => {
        console.log('ERROR:', error);
        return Promise.reject(error);
      });
  }
  
  function constructUrl(BASE_URL, API_KEY, inputValue) {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });
    return `${BASE_URL}?${searchParams}`;
  }

