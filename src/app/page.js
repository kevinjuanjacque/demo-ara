import CardHome from './components/home/card';
import { Cifra } from './components/home/cifra';
import Publications from './components/home/publication';
import Chatbot from './components/shared/chatbot';

export default function Home() {
  return (
    <div className=" h-full pt-16">
      <main className=" flex flex-col gap-16 justify-center items-center ">
        <section className=" w-full bg-no-repeat bg-cover bg-[url('/images/banner.jpg')] h-96 text-white">
          <div className=" bg-primary bg-opacity-85 h-[50%] ">
            <h2 className="text-4xl text-center pt-5">
              Bienvenidos a <span className="font-bold">Proyecto ARA</span>
            </h2>
            <form className=" flex items-center justify-center gap-2 pt-5">
              <input
                className=" rounded-lg bg-white text-lg px-2 py-1 w-64 text-black"
                placeholder="Busquemos algo"
              />
              <button className="bg-secondaryOrange  text-lg text-white py-1 px-2 rounded-md transition duration-300 transform hover:bg-orange-600 hover:scale-105">
                Buscar
              </button>
            </form>
          </div>
          <div className=" h-52 w-full flex flex-col items-center justify-end">
            <div className=" w-[80%] h-16 bg-white flex flex-col justify-center items-center">
              <h2 className="text-black text-4xl text-center font-bold">
                Descubre
              </h2>
            </div>
          </div>
        </section>
        <section>
          <h3 className="font-light text-black text-2xl text-center mt-6">
            Revisa nuestras colecciones de recursos
          </h3>

          <div className=" flex flex-wrap items-center justify-center mt-5 gap-16 mb-5">
            <CardHome
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              title="Titulo"
              category={'Matematicas'}
            />
            <CardHome
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              title="Titulo"
              category={'Artes'}
            />
            <CardHome
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              title="Titulo"
              category={'Ciencias'}
            />
            <CardHome
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              title="Titulo"
              category={'Ciencias Sociales'}
            />
            <CardHome
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              title="Titulo"
              category={'Gobierno'}
            />
            <CardHome
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              title="Titulo"
              category={'Medicina'}
            />
          </div>
        </section>

        <section className="bg-[url(/images/bg-cifras.jpg)] bg-cover bg-no-repeat w-full flex flex-col justify-center items-center text-white min-h-[45rem] pb-16 max">
          <h2 className="text-4xl text-center pt-5 mb-12 font-bold">
            Recursos
          </h2>
          <div className=" flex gap-28 flex-wrap justify-center h-[80%] items-center px-16 max-w-4xl">
            <Cifra title={'Tesis'} num={10}>
              <img
                src="https://www.ucentral.cl/ucentral/site/artic/20211227/imag/foto_0000001320211227152112/docto.png"
                alt=""
              />
            </Cifra>
            <Cifra title={'Guias'} num={10}>
              <img
                src="https://www.ucentral.cl/ucentral/site/artic/20211227/imag/foto_0000001320211227152112/docto.png"
                alt=""
              />
            </Cifra>
            <Cifra title={'Lores'} num={30}>
              <img
                src="https://www.ucentral.cl/ucentral/site/artic/20211227/imag/foto_0000001320211227152112/docto.png"
                alt=""
              />
            </Cifra>
            <Cifra title={'Ipsus'} num={20}>
              <img
                src="https://www.ucentral.cl/ucentral/site/artic/20211227/imag/foto_0000001320211227152112/docto.png"
                alt=""
              />
            </Cifra>
            <Cifra title={'Pruebas'} num={5}>
              <img
                src="https://www.ucentral.cl/ucentral/site/artic/20211227/imag/foto_0000001320211227152112/docto.png"
                alt=""
              />
            </Cifra>
          </div>
        </section>

        <section className="max-w-4xl">
          <h2 className="text-4xl text-center pt-5 mb-5 font-bold">
            Ultimas Publicaciones
          </h2>
          <div className=" flex gap-12 flex-wrap justify-center items-center">
            <Publications />
            <Publications />
            <Publications />
            <Publications />
            <Publications />
          </div>
        </section>
      </main>
      <Chatbot />
    </div>
  );
}
