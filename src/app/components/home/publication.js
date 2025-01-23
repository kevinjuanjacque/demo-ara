import Link from 'next/link';
import React from 'react';

const Publications = () => {
  return (
    <Link href={'articulo/demo'}>
      <article className="group hover:shadow-md cursor-pointer hover:scale-105 transition-all duration-200 relative h-80 w-72 flex flex-col justify-around px-4 py-2 border-l-2 border-b-2 border-r-[0.5px] border-t-[0.5px]  rounded-md">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <h4 className=" font-bold text-lg group-hover:underline ">
          Sección 1.10.33 de "de Finibus Bonorum et Malorum", escrito por Cicero
          en el 45 antes de Cristo
        </h4>
        <p>
          Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint occaecati cupiditate non provident
        </p>
      </article>
    </Link>
  );
};

export default Publications;
