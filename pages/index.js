import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Icons
import { BsArrowDown } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { GoServer } from "react-icons/go";
import { MdWeb } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
//Layout components
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
//UI components
import Process from "../components/Process";
import Form from "../components/Form";

const Home = () => {
  return (
    <>
      <div className="pb-2 md:pb-10">
        <Navbar />
      </div>
      <MainBlock />
      <DownArrow />
      <ServicesBlock />
      <DownArrow />
      <ProcessBlock />
      <DownArrow />
      <ToolsBlock />
      <ContactBlock />
      <Footer />
    </>
  );
};

const MainBlock = () => (
  <div className="pt-4 md:py-12 md:pt-12">
    <div className="grid grid-cols-1 md:grid-cols-2 grid-auto-rows justify-items-start py-12 md:py-18 gap-2">
      <div className="col-start-1 row-start-2 md:row-start-1 p-4 md:p-8 pl-8 md:pl-12">
        <motion.h1
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="font-sans font-black text-3xl md:text-5xl"
        >
          Construímos tus ambiciosos productos digitales.
        </motion.h1>
        <motion.p
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 1.25 }}
          className="pt-4 md:pt-6 text-md md:text-lg"
        >
          Rango es una agencia de software. En Rango nosotros construímos el
          futuro, resolvemos problemas y creamos las mejores experiencias en web
          y móvil.
        </motion.p>
      </div>
      <div className="col-start-1 md:col-start-2 row-start-1 place-self-center">
        <Image
          src="/rango_logo.png"
          width="320"
          height="320"
          alt="rango logo"
        />
      </div>
      <div className="col-start-1 row-start-3 md:row-start-2 place-self-center md:place-self-start md:pl-12">
        <Link href="#">
          <a>
            <motion.button
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: {
                  opacity: 0,
                  translateY: 50,
                },
                pageAnimate: {
                  opacity: 1,
                  translateY: 0,
                },
              }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="bg-yellow-300 rounded-full py-4 px-7"
            >
              Contratános
            </motion.button>
          </a>
        </Link>
        <Link href="#">
          <a className="underline px-5">
            <motion.span
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: {
                  opacity: 0,
                  translateY: 50,
                },
                pageAnimate: {
                  opacity: 1,
                  translateY: 0,
                },
              }}
              transition={{ duration: 0.7, delay: 1.75 }}
            >
              Nuestro portafolio
            </motion.span>
          </a>
        </Link>
      </div>
    </div>
  </div>
);

const ServicesBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("pageAnimate");
  }, [controls, inView]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-auto-rows justify-items-start py-8 md:py-12 gap-2">
      <div className="col-start-1 row-start-1 p-8 pl-8 md:pl-12">
        <motion.h1
          ref={ref}
          initial="pageInitial"
          animate={controls}
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-sans font-black text-3xl md:text-5xl"
        >
          <span className="marker-text-1">Hacemos</span> tus{" "}
          <span className="marker-text-2">ideas</span>{" "}
          <span className="marker-text-3">realidad </span> con alguno de
          nuestros servicios.
        </motion.h1>
        <motion.p
          ref={ref}
          initial="pageInitial"
          animate={controls}
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="pt-4 md:pt-6 text-md md:text-lg"
        >
          Ya sea que necesites un sitio web que se adapte a tus necesidades,
          mejorar alguna de tus plataformas o llevar tu visionaría idea a la
          realidad, nosotros lo hacemos por ti.
        </motion.p>
      </div>
      <div className="col-start-1 md:col-start-2 row-start-2 md:row-start-1 place-self-center">
        <div className="grid grid-auto-cols grid-auto-rows justify-items-center gap-4 md:gap-6">
          <motion.div
            ref={ref}
            initial="pageInitial"
            animate={controls}
            variants={{
              pageInitial: {
                opacity: 0,
                translateY: 100,
              },
              pageAnimate: {
                opacity: 1,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="col-start-1 row-start-1 shadow-md hover:shadow-xl rounded-2xl p-7 md:p-6"
          >
            <div className="flex flex-col justify-center bg-green-100 text-green-500 rounded-full w-16 h-16 md:w-20 md:h-20">
              <div className="flex justify-center self-center">
                <BiCodeAlt size={32} />
              </div>
            </div>
            <p className="text-sm text-center pt-2">
              Desarrollo <br /> Frontend
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="pageInitial"
            animate={controls}
            variants={{
              pageInitial: {
                opacity: 0,
                translateY: 100,
              },
              pageAnimate: {
                opacity: 1,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="col-start-2 row-start-1 shadow-md hover:shadow-xl rounded-2xl p-7 md:p-6"
          >
            <div className="flex flex-col justify-center bg-purple-100 text-purple-500 rounded-full w-16 h-16 md:w-20 md:h-20">
              <div className="flex justify-center self-center">
                <GoServer size={32} />
              </div>
            </div>
            <p className="text-sm text-center pt-2">
              Desarrollo <br /> Backend
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="pageInitial"
            animate={controls}
            variants={{
              pageInitial: {
                opacity: 0,
                translateY: 100,
              },
              pageAnimate: {
                opacity: 1,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="col-start-1 row-start-2 shadow-md hover:shadow-xl rounded-2xl p-7 md:p-6"
          >
            <div className="flex flex-col justify-center bg-red-100 text-red-600 rounded-full w-16 h-16 md:w-20 md:h-20">
              <div className="flex justify-center self-center">
                <MdWeb size={32} />
              </div>
            </div>
            <p className="text-sm text-center pt-2">
              Diseño <br /> UI/UX
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="pageInitial"
            animate={controls}
            variants={{
              pageInitial: {
                opacity: 0,
                translateY: 100,
              },
              pageAnimate: {
                opacity: 1,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="col-start-2 row-start-2 shadow-md hover:shadow-xl rounded-2xl p-7 md:p-6"
          >
            <div className="flex flex-col justify-center bg-blue-100 text-blue-500 rounded-full w-16 h-16 md:w-20 md:h-20">
              <div className="flex justify-center self-center">
                <AiOutlineMobile size={32} />
              </div>
            </div>
            <p className="text-sm  text-center pt-2">
              Desarrollo <br /> Móvil
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ProcessBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("pageAnimate");
  }, [controls, inView]);

  return (
    <>
      <div className="flex justify-center p-8 md:p-16">
        <motion.h1
          ref={ref}
          initial="pageInitial"
          animate={controls}
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-sans font-black text-center text-2xl md:text-3xl"
        >
          ¿Cuál es nuestro proceso?
        </motion.h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around px-3 md:px-14 py-2 md:py-16">
        <Process step={1}>
          Diseñamos la interfaz y la experiencia de uso para que puedas sugerir
          cambios, correciones y retroalimentación
        </Process>
        <Process step={2}>
          LLevamos el diseño y requerimientos de tu proyecto a la realidad
          usando nuestro stack de tecnologías
        </Process>
        <Process step={3}>
          Realizamos diferentes pruebas al software, después de eso tu idea
          estará disponible a todos tus clientes
        </Process>
      </div>
    </>
  );
};

const ToolsBlock = () => {
  return (
    <div className="grid grid-col-1 grid-row-3 gap-4">
      <div className="col text-center justify-self-center">
        <span className="flex justify-center text-yellow-300 p-2">
          <GoServer size={34} />
        </span>
        <p className="text-gray-300 text-lg pt-2">Tecnologías que usamos</p>
        <p className="text-gray-600 text-3xl font-semibold">
          Solo lo mejor o nada.
        </p>
      </div>
      <div className="col px-4 py-8">
        <div className="grid grid-col-1 grid-row-auto md:grid-col-4 md:grid-row-3 text-center gap-2 p-8">
          <div className="col col-start-1 row-start-1">
            <Image
              src="/vercel_logo.svg"
              width={"120px"}
              height={"80px"}
              alt="Vercel"
            />
          </div>
          <div className="col col-start-1 row-start-2">
            <Image
              src="/airtable_logo.svg"
              width={"130px"}
              height={"80px"}
              alt="Airtable"
            />
          </div>
          <div className="col col-start-1 row-start-3">
            <Image
              src="/cloudinary_logo.svg"
              width={"130px"}
              height={"80px"}
              alt="Cloudinary"
            />
          </div>
          <div className="col col-start-2 row-start-1">
            <Image
              src="/next_logo.svg"
              width={"80px"}
              height={"60px"}
              alt="Next.js"
            />
          </div>
          <div className="col col-start-2 row-start-2">
            <Image
              src="/netlify_logo.svg"
              width={"130px"}
              height={"35px"}
              alt="Netlify"
            />
          </div>
          <div className="col col-start-2 row-start-3">
            <Image
              src="/do_logo.svg"
              width={"130px"}
              height={"80px"}
              alt="Digital Ocean"
            />
          </div>
          <div className="col col-start-3 row-start-1">
            <Image
              src="/react_logo.svg"
              width={"80px"}
              height={"60px"}
              alt="React"
            />
          </div>
          <div className="col col-start-3 row-start-2">
            <Image
              src="/sanity_logo.svg"
              width={"100px"}
              height={"60px"}
              alt="Sanity"
            />
          </div>
          <div className="col col-start-3 row-start-3">
            <Image
              src="/svelte_logo.svg"
              width={"100px"}
              height={"60px"}
              alt="Svelte"
            />
          </div>
          <div className="col col-start-4 row-start-1">
            <Image
              src="/stripe_logo.svg"
              width={"80px"}
              height={"60px"}
              alt="Stripe"
            />
          </div>
          <div className="col col-start-4 row-start-2">
            <Image
              src="/prisma_logo.svg"
              width={"110px"}
              height={"80px"}
              alt="Prisma"
            />
          </div>
          <div className="col col-start-4 row-start-3">
            <Image
              src="/auth0_logo.svg"
              width={"110px"}
              height={"80px"}
              alt="Auth0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [domEl, inObserver] = useInView();

  useEffect(() => {
    if (inView) controls.start("pageAnimate");
  }, [controls, inView]);

  useEffect(() => {
    if (inObserver) controls.start("pageAnimate");
  }, [controls, inObserver]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-0 md:gap-2 px-6 py-14">
      <div className="col-start-1 row-start-2 md:row-start-1 md:row-end-3 px-0 md:px-8 py-4 md:py-0">
        <Form />
      </div>
      <div className="col-start-1 md:col-start-2 row-start-1 p-2 md:p-0 w-full md:w-3/4">
        <motion.h1
          ref={ref}
          initial="pageInitial"
          animate={controls}
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-sans font-black text-2xl md:text-3xl"
        >
          Contactános
        </motion.h1>
        <motion.p
          ref={ref}
          initial="pageInitial"
          animate={controls}
          variants={{
            pageInitial: {
              opacity: 0,
              translateY: 100,
            },
            pageAnimate: {
              opacity: 1,
              translateY: 0,
            },
          }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-sans text-md md:text-lg py-4"
        >
          Envíanos un correo con tus datos y cuentanos un poco más sobre tu
          idea, nos encantaría trabajar contigo.
        </motion.p>
      </div>
      <motion.div
        ref={domEl}
        initial="pageInitial"
        animate={controls}
        variants={{
          pageInitial: {
            opacity: 0,
            translateY: 100,
          },
          pageAnimate: {
            opacity: 1,
            translateY: 0,
          },
        }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="hidden md:block md:col-start-2 md:row-start-2 md:p-4"
      >
        <Image
          src="/contact_us.png"
          width="332"
          height="230"
          alt="contactanos"
        />
      </motion.div>
    </div>
  );
};

const DownArrow = () => (
  <div className="flex justify-center px-8 py-7 md:py-14">
    <svg className="animate-bounce w-6 h-6">
      <BsArrowDown size={26} />
    </svg>
  </div>
);
export default Home;
