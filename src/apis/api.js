const URI = 'https://ens-bid-api.herokuapp.com';
const VERSION = 'v1'

const route = (path, uri = URI, version = VERSION) => (`${uri}/${version}/${path}`);

/*const fetchPOST = async (route, payload) => {
  try {
    const res = await fetch(route, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    
    if (res.status !== 200) {
      throw Error(result.message);
    }

    //console.log("response", result);

    return result;
  } catch (error) {
    console.log('POST API ERROR: ', route, error);
    return error;
  }
}*/

const fetchGET = async (route, queryParams) => {
  try {
    let query = null;
    if (queryParams !== undefined && queryParams !== null) {
      query = Object.keys(queryParams)
      .map((key) => (`${key}=${queryParams[key]}`))
      .join('&');
    }

    const uri = (query === null) ? route : `${route}?${query}`;
    const res = await fetch(uri);
    const result = await res.json();
    
    if (res.status !== 200) {
      throw Error(result.message);
    }

    return result;
  } catch (error) {
    console.log('GET API ERROR: ', route, error);
    return error;
  }
}

export const getDomainSearchResult = (payload) => fetchGET(route('domain/recommend'), payload);
