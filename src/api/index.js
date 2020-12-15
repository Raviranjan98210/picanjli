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
  getImages: (term, page) =>
    instance({
      method: "GET",
      url: "/",
      params: {
        q: term,
        page: page,
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
