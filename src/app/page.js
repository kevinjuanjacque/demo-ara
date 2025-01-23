import { Card, CardContent, CardTitle } from '@/components/ui/card';
import CardHome from './components/home/card';
import { Cifra } from './components/home/cifra';
import Publications from './components/home/publication';
import Chatbot from './components/shared/chatbot';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';

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
        </section>
        <section className="w-full flex flex-col justify-center items-center px-2 md:px-0">
          <Tabs defaultValue="discovery" className="w-full max-w-4xl">
            <TabsList className="">
              <TabsTrigger value="discovery" className="text-xl font-semibold">
                Descubre
              </TabsTrigger>
              <TabsTrigger value="Top" className="text-xl font-semibold">
                Mas evaluados
              </TabsTrigger>
              <TabsTrigger value="search" className="text-xl font-semibold">
                Buscador
              </TabsTrigger>
            </TabsList>
            <Separator className="my-7" />
            <TabsContent value="discovery">
              <Card>
                <CardTitle>
                  <h3 className="font-light text-black text-2xl text-center mt-6">
                    Revisa nuestras colecciones de recursos
                  </h3>
                </CardTitle>
                <div className=" flex flex-wrap items-center justify-center mt-5 gap-16 mb-5 max-w-4xl">
                  <CardHome
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    title="Algebra"
                    category={'Matematicas'}
                  />
                  <CardHome
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    title="Diseño de paisajes"
                    category={'Artes'}
                  />
                  <CardHome
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    title="Quimica farmaceutica"
                    category={'Ciencias'}
                  />
                  <CardHome
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    title="Psicologia"
                    category={'Ciencias Sociales'}
                  />
                  <CardHome
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    title="Abogados"
                    category={'Gobierno'}
                  />
                  <CardHome
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    title="Deporte y Salud"
                    category={'Medicina'}
                  />
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="Top">
              <Card>
                <CardTitle>
                  <h3 className="font-light text-black text-2xl text-center mt-6">
                    Revisa los recursos con mejor puntuacion
                  </h3>
                </CardTitle>
                <div className=" flex flex-wrap items-center justify-center mt-5 gap-2 mb-5 max-w-4xl">
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
              </Card>
            </TabsContent>
            <TabsContent value="search">
              <Card>
                <CardTitle>
                  <h3 className="font-light text-black text-2xl text-center mt-6">
                    Buscador avanzado
                  </h3>
                </CardTitle>
                <CardContent className="">
                  <Label>Palabra calve</Label>
                  <Input placeholder="Tipo de documento, temas" />
                  <Separator className="my-5" />
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 flex flex-col gap-2">
                      <Label>Autor</Label>
                      <Input placeholder="Nombre de autor" />
                      <Label>Categoria</Label>
                      <Input placeholder="Categoria" />
                      <Label>Tipo de recurso</Label>
                      <Input placeholder="PDF, Video, PPT" />
                    </div>
                    <div className="h-full">
                      <Separator orientation="vertical" className="mx-5" />
                    </div>
                    <div>
                      <Label>Fecha de publicacion</Label>
                      <Calendar
                        mode="range"
                        selected={{
                          from: new Date('01-01-2025'),
                          to: new Date(),
                        }}
                        className="rounded-md border"
                      />
                    </div>
                  </div>
                  <Separator className="my-5" />
                  <Button className="w-full"> Buscar </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
