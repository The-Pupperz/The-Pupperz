import { useState } from 'react';

const [toggle , setToggle ] = useState(true)

function Switch() {

  return (
    //   Switch Container
    <div
      className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
    >
      {/* Switch */}
      <div
        className =  "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md"
      ></div>
    </div>
  );
}

export default Switch;