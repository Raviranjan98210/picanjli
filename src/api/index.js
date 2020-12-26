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
  getImages: (
    term,
    page,
    perPage = "20",
    imageType = "all",
    orientation = "all"
  ) =>
    instance({
      method: "GET",
      url: "/",
      params: {
        q: term,
        page: page,
        per_page: perPage,
        image_type: imageType,
        safesearch: true,
        orientation,
      },
    }),

  imageByOrientation: (page, orientation) =>
    instance({
      method: "GET",
      url: "/",
      params: {
        page,
        orientation,
        safesearch: true,
      },
    }),
  imageByCategory: (page, category) =>
    instance({
      method: "GET",
      url: "/",
      params: {
        page,
        category,
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
