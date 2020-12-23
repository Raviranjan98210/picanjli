import React from "react";
import Avatar from "@material-ui/core/Avatar";
import GetAppIcon from "@material-ui/icons/GetApp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StarIcon from "@material-ui/icons/Star";
import CardContent from "./CardContent";

const DetailCard = ({ imageDetail }) => {
  const {
    userImageURL,
    downloads,
    likes,
    views,
    favorites,
    user,
  } = imageDetail;
  return (
    <div className="md:grid hidden grid-cols-2   justify-center rounded-3xl shadow-lg bg-indigo-400 bg-gradient-to-r from-gradientPrimary to-gradientSecondary h-1/2 my-12 pb-12 ">
      <div
        style={{ width: "100px", height: "110px" }}
        className="border-b-4 h-10/12  rounded-full  col-span-2  justify-self-center transform -translate-y-14  border-white uppercase text-white font-bold"
      >
        <Avatar
          src={userImageURL}
          alt={user}
          style={{
            width: "100px",
            height: "100px",
          }}
        >
          {user.charAt(0)}
        </Avatar>
      </div>

      <h1 className="col-span-2 -mt-10 justify-self-center  text-white uppercase text-2xl font-bold tracking-wide font-mono">
        {user}
      </h1>

      <CardContent
        iconSize="15px"
        Icon={GetAppIcon}
        heading="Downloads"
        value={downloads}
      />
      <CardContent
        iconSize="15px"
        Icon={FavoriteIcon}
        heading="Likes"
        value={likes}
      />
      <CardContent
        iconSize="15px"
        Icon={VisibilityIcon}
        heading="Views"
        value={views}
      />
      <CardContent
        iconSize="15px"
        Icon={StarIcon}
        heading="Favorites"
        value={favorites}
      />
    </div>
  );
};

export default DetailCard;
