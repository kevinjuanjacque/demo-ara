import PdfViewer from './components/preview';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="pt-24 ">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="flex justify-center items-start ">
        <div className="w-full max-w-4xl">
          <Breadcrumb className="mb-5">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/Ciencias-sociales">
                  Ciencias Sociales
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Gemini-LIGHTS: Herbig Ae/Be...</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex justify-center items-center gap-12 mb-5">
            <img
              className=" aspect-square h-full rounded-full"
              src="https://books.google.com/books/content?id=yaf4EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl"
            ></img>
            <h1 className="text-4xl font-bold">
              Gemini-LIGHTS: Herbig Ae/Be and Massive T Tauri Protoplanetary
              Disks Imaged with Gemini Planet Imager
            </h1>
          </div>
          <div className="mb-10 px-10 flex gap-5 justify-center">
            <Badge className="bg-secondaryOrange hover:bg-orange-600">
              Ciencias Sociales
            </Badge>
            <Badge className="bg-secondaryOrange hover:bg-orange-600">
              Cultura
            </Badge>
            <Badge className="bg-secondaryOrange hover:bg-orange-600">
              Derechos humanos
            </Badge>
            <Badge className="bg-secondaryOrange hover:bg-orange-600">
              Trabajo
            </Badge>
          </div>
          <div className="w-full   flex flex-col justify-center items-center">
            <div className="max-w-4xl w-full flex">
              <h2 className=" text-lg font-semibold ">Detalle</h2>
              <md-divider className="w-full flex border-b-[1px] border-gray-300" />
            </div>
            <div className="max-w-4xl mb-10">
              <Table className="w-full">
                <TableHeader></TableHeader>
                <TableBody>
                  <TableRow>
                    <TableHead className="font-medium">
                      Autor {'(es)'}
                    </TableHead>
                    <TableCell>
                      Rich, Evan A.; Monnier, John D.; Aarnio, Alicia; Laws,
                      Anna S. E.; Setterholm, Benjamin R.; Wilner, David J.;
                      Calvet, Nuria; Harries, Tim; Miller, Chris; Davies, Claire
                      L.; Adams, Fred C.; Andrews, Sean M.; Bae, Jaehan;
                      Espaillat, Catherine; Greenbaum, Alexandra Z.; Hinkley,
                      Sasha; Kraus, Stefan; Hartmann, Lee; Isella, Andrea;
                      McClure, Melissa; Oppenheimer, Rebecca; Pérez Muñoz, Laura
                      María; Zhu, Zhaohuan;
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">Reseña</TableHead>
                    <TableCell>
                      We present the complete sample of protoplanetary disks
                      from the Gemini- Large Imaging with the Gemini Planet
                      Imager Herbig/T Tauri Survey, which observed bright Herbig
                      Ae /Be stars and T Tauri stars in near-infrared polarized
                      light to search for signatures of disk evolution and
                      ongoing planet formation. The 44 targets were chosen based
                      on their near- and mid-infrared colors, with roughly equal
                      numbers of transitional , pre-transitional, and full
                      disks. Our approach explicitly did not favor well-known,
                      “famous” disks or those observed by the
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-medium">
                      Fecha de publicacion
                    </TableHead>
                    <TableCell>20 - 01 - 2025</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <PdfViewer
            url={
              'https://repositorio.uchile.cl/bitstream/handle/2250/195285/Gemini-LIGHTS.pdf?sequence=1&isAllowed=y'
            }
          />
        </div>
      </div>
    </div>
  );
}
