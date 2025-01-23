const NavBar = () => {
  return (
    <nav className="bg-primary fixed z-10 top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            <a
              href="/"
              className="text-white text-lg font-bold flex gap-3 items-center  justify-center"
            >
              <img
                className=" rounded-full w-10 h-10 aspect-auto bg-white"
                src="/images/ucen-logo.png"
              ></img>
              ARA
            </a>
          </div>

          {/* <!-- Links principales --> */}
          <div className="hidden md:flex space-x-4">
            <a href="/inicio" className="text-gray-300 hover:text-white">
              Inicio
            </a>
            <a href="/Ayuda" className="text-gray-300 hover:text-white">
              Ayuda
            </a>
            <a href="/contacto" className="text-gray-300 hover:text-white">
              Contacto
            </a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a
              href="/inicio"
              className="text-black hover:bg-gray-300 bg-white py-1 px-3 rounded-xl font-semibold"
            >
              Entrar
            </a>
          </div>

          {/* <!-- Botón para menú móvil --> */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {/* <!-- Icono de hamburguesa --> */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Menú móvil --> */}
      <div id="mobile-menu" className="md:hidden hidden">
        <a
          href="/inicio"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Inicio
        </a>
        <a
          href="/ayuda"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Ayuda
        </a>
        <a
          href="/contacto"
          className="block px-4 py-2 text-gray-300 hover:text-white"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
