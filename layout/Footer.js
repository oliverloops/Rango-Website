import Link from "next/link";
//Icons
import { GrTwitter, GrLinkedin, GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="flex flex-col pt-8 px-8 md:px-12">
    <div className="flex justify-between">
      <div className="flex">
        <div className="flex flex-col text-center py-6 px-8">
          <p className="font-bold">Nosotros</p>
          <span className="flex flex-col py-2">
            <Link href="#">
              <a className="underline hover:text-yellow-400">Acerca de</a>
            </Link>
            <Link href="#">
              <a className="underline hover:text-yellow-400 pt-2">Servicios</a>
            </Link>
          </span>
        </div>
        <div className="flex flex-col text-center py-6 px-8">
          <p className="font-bold">Legal</p>
          <span className="py-2">
            <Link href="#">
              <a className="underline hover:text-yellow-400">
                Política de privacidad
              </a>
            </Link>
          </span>
        </div>
      </div>

      <div className="flex py-6 px-8">
        <Link href="#">
          <a className="bg-yellow-300 text-white rounded-full w-10 h-10 p-2 mx-1">
            <GrTwitter size={24} />
          </a>
        </Link>
        <Link href="#">
          <a className="bg-yellow-300 text-white rounded-full w-10 h-10 p-2 mx-1">
            <FaLinkedinIn size={24} />
          </a>
        </Link>
        <Link href="#">
          <a className="bg-yellow-300 text-white rounded-full w-10 h-10 p-2 mx-1">
            <GrGithub size={24} />
          </a>
        </Link>
      </div>
    </div>
    <div className="flex justify-center pt-6 pb-2">
      <small className="font-light">Rango Labs ©2021</small>
    </div>
  </footer>
);

export default Footer;
