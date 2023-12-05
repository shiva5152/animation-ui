import React from "react";

const SingleSocialMedia = ({
  id,
  logo,
}: {
  id: string;
  logo: React.JSX.Element;
}) => {
  return (
    <div key={id}>
      <button className=" rounded-md bg-white">{logo}</button>
    </div>
  );
};

export default SingleSocialMedia;
