import React from "react";

const SingleSocialMedia = ({
  id,
  logo,
}: {
  id: string;
  logo: React.JSX.Element;
}) => {
  return (
    <div>
      <button className=" rounded-md bg-white" key={id}>
        {logo}
      </button>
    </div>
  );
};

export default SingleSocialMedia;
