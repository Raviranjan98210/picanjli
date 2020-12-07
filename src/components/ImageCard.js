import React from "react";

const ImageCard = ({ image }) => {
  if (!image) {
    return "Loading....";
  }
  const { webformatURL, views, likes, downloads } = image;
  const tags = image.tags.split(",");

  return (
    <div className="max-w-xs mx-10 rounded overflow-hidden shadow-lg">
      <img
        src={webformatURL}
        alt="unsplash images"
        className="w-full object-cover h-60"
      />

      <div className="px-6 py-4">
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag) => (
          <span className="inline-block bg-indigo-400 mt-2 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
            # {tag.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
