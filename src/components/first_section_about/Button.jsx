import React from 'react';

function Button(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
        <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]" >
            Contact me!!
        </button>
    </a>
  );
}

export default Button;