import axios from "axios";

const instance = axios.create({
  baseURL: "https://pixabay.com/api",
  params: {
    key: process.env.REACT_APP_PIXABAY_API_KEY,
    image_type: "photo",
    pretty: true,
  },
});

export default {
  getImages: (term, page, perPage = "20", orientation = "all") =>
    instance({
      method: "GET",
      url: "/",
      params: {
        q: term,
        page: page,
        per_page: perPage,
        safesearch: true,
        orientation,
      },
    }),

  imagesByOrientation: (page, orientation) =>
    instance({
      method: "GET",
      url: "/",
      params: {
        page,
        orientation,
        safesearch: true,
      },
    }),
  imagesByCategory: (page, category) =>
    instance({
      method: "GET",
      url: "/",
      params: {
        page,
        category,
        safesearch: true,
      },
    }),
  imagesByColor: (page, color) =>
    instance({
      method: "GET",
      url: "/",
      params: {
        page,
        colors: color,
        safesearch: true,
      },
    }),
  imagesByType: (page, type) =>
    instance({
      method: "GET",
      url: "/",
      params: {
        page,
        image_type: type,
        safesearch: true,
      },
    }),

  getImage: (imageId) =>
    instance({
      method: "GET",
      url: "/",
      params: {
        id: imageId,
      },
    }),
};
