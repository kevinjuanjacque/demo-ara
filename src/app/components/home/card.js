import React from 'react';

const CardHome = ({ category, title, description }) => {
  return (
    <article className="cursor-pointer h-72 w-56 rounded-md overflow-hidden bg-cover bg-no-repeat bg-[url(https://library.harvard.edu/sites/default/files/styles/staggered_card/public/open-house-engagement_0.jpg?h=21add1fa&itok=aopTVrAl)] ">
      <div className=" bg-secondaryOrange h-full w-full px-3 py-2 rounded-sm bg-opacity-70 hover:bg-opacity-20 transition-all duration-700">
        <div className="flex">
          <svg
            className="text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            width={24}
            height={24}
            strokeWidth={2}
          >
            {' '}
            <path d="M18.1 6c-1.1 2.913 -1.9 4.913 -2.4 6c-1.879 4.088 -3.713 6 -6 6c-2.4 0 -4.8 -2.4 -4.8 -6s2.4 -6 4.8 -6c2.267 0 4.135 1.986 6 6c.512 1.102 1.312 3.102 2.4 6"></path>{' '}
          </svg>
          <span className="text-white ">{category}</span>
        </div>
        <div className="h-[90%] gap-2 flex flex-col justify-end items-start">
          <h4 className="text-lg text-white">{title}</h4>
          <p className="text-base text-white">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default CardHome;
