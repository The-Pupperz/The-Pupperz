import React, { useState } from "react";

const Avatar = ({ item }) => {
  const [src, setSrc] = useState("");

  const createSrc = (name) => {
    // Extract first character of first and last name
    const firstInitial = name.charAt(0);
    const lastInitial = name.split(" ")[1].charAt(0);

    // Concatenate the initials
    const initials = firstInitial + lastInitial;

    // Set the source of the image
    setSrc(`https://ui-avatars.com/api/?name=${initials}&background=7159c1&color=fff&size=128`);
  };

  // Call the createSrc function when the component mounts
  React.useEffect(() => {
    createSrc(item);
  }, [item]);

  return <img src={src} alt={item} />;
};

export default Avatar;