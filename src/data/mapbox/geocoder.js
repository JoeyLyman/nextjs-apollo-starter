// url: /geocoding/v5/{endpoint}/{search_text}.json
import axios from "axios";

// Mapbox API info: https://docs.mapbox.com/api/search/geocoding/#forward-geocoding
const mapboxToken = process.env.MAPBOX_TOKEN;
const baseUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places`;

// @param limit: max is 10 for the api
const getGeocoderResults = async (query, limit = 10) => {
  const url = `/${query}.json`;

  return axios.get(baseUrl + url, {
    params: {
      limit,
      access_token: mapboxToken,
      types: "country,region,postcode,district,place,locality,neighborhood", // only excluding: address, poi
    },
  });
};

export default getGeocoderResults;
