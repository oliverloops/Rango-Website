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
import { HiChartBar } from "react-icons/hi";
//Layout components
import Navbar from "../layout/Navbar";
import ContactSection from "../layout/ContactSection";
import Footer from "../layout/Footer";
//UI components
import Process from "../components/Process";

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
      <div id="contact-form">
        <DownArrow />
      </div>
      <ContactSection />
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
          className="pt-4 md:pt-6 text-gray-600 text-md md:text-lg"
        >
          Somos una agencia de software y laboratorio creativo. En Rango
          contribuimos a construir el futuro, resolvemos problemas, diseñamos y
          creamos las mejores experiencias en la web para nuestros clientes.
        </motion.p>
      </div>
      <div className="col-start-1 md:col-start-2 row-start-1 place-self-center">
        <Image
          src="/rango_logo.png"
          width="300"
          height="300"
          alt="rango logo"
        />
      </div>
      <div className="flex flex-col md:flex-row col-start-1 row-start-3 md:row-start-2 place-self-start pl-8 md:pl-12">
        <Link href="#contact-form">
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
        <Link href="/jamstack">
          <a className="underline px-1 py-5 md:px-7 md:py-4">
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
              Potencia tu negocio con JAMstack
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
          className="pt-4 md:pt-6 text-gray-600 text-md md:text-lg"
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
            <p className="text-sm text-gray-600 text-center pt-2">
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
            <p className="text-sm text-gray-600 text-center pt-2">
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
            <p className="text-sm text-gray-600 text-center pt-2">
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
                <HiChartBar size={32} />
              </div>
            </div>
            <p className="text-sm text-gray-600 text-center pt-2">
              SEO y <br /> Analytics
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
          className="font-sans font-black text-gray-600  text-center text-2xl md:text-3xl"
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
          Realizamos diferentes pruebas al software, después de eso tu proyecto
          estará disponible a todos tus clientes
        </Process>
      </div>
    </>
  );
};

const ToolsBlock = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("pageAnimate");
  }, [controls, inView]);

  return (
    <div className="grid grid-col-1 grid-row-3 gap-4">
      <div className="col text-center justify-self-center">
        <motion.span
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
          className="flex justify-center text-yellow-300 p-2"
        >
          <GoServer size={34} />
        </motion.span>
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
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-lg pt-2"
        >
          Algunas de las tecnologías que utilizamos
        </motion.p>
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
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-600 text-3xl font-semibold"
        >
          Inspirados por JAMstack.
        </motion.p>
      </div>
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
        transition={{ duration: 0.7, delay: 0.4 }}
        className="col px-4 py-8"
      >
        <div className="grid grid-col-2 grid-row-auto md:grid-col-4 md:grid-row-3 text-center gap-2 p-4 md:p-8">
          <div className="col col-start-1 row-start-1 justify-self-center">
            <a href="https://vercel.com">
              <Image
                src="/vercel_logo.svg"
                width={"120px"}
                height={"80px"}
                alt="Vercel"
              />
            </a>
          </div>
          <div className="col col-start-1 row-start-3 md:row-start-2 self-center">
            <a href="https://www.prisma.io/">
              <Image
                src="/prisma_logo.svg"
                width={"120px"}
                height={"80px"}
                alt="Prisma"
              />
            </a>
          </div>
          <div className="col col-start-1 row-start-5 md:row-start-3 self-center">
            <a href="https://cloudinary.com/">
              <Image
                src="/cloudinary_logo.svg"
                width={"130px"}
                height={"80px"}
                alt="Cloudinary"
              />
            </a>
          </div>
          <div className="col col-start-2 row-start-1 self-center">
            <a href="https://nextjs.org/">
              <Image
                src="/next_logo.svg"
                width={"80px"}
                height={"60px"}
                alt="Next.js"
              />
            </a>
          </div>
          <div className="col col-start-2 row-start-3 md:row-start-2 self-center">
            <a href="https://svelte.dev/">
              <Image
                src="/svelte_logo.svg"
                width={"100px"}
                height={"60px"}
                alt="Svelte"
              />
            </a>
          </div>
          <div className="col col-start-2 row-start-5 md:row-start-3 self-center">
            <a href="https://www.digitalocean.com/">
              <Image
                src="/do_logo.svg"
                width={"130px"}
                height={"80px"}
                alt="Digital Ocean"
              />
            </a>
          </div>
          <div className="col col-start-1 md:col-start-3 row-start-2 md:row-start-1 self-center">
            <a href="https://www.sanity.io/">
              <Image
                src="/sanity_logo.svg"
                width={"100px"}
                height={"60px"}
                alt="Sanity"
              />
            </a>
          </div>
          <div className="col col-start-1 md:col-start-3 row-start-4 md:row-start-2 self-center">
            <a href="https://reactjs.org/">
              <Image
                src="/react_logo.svg"
                width={"80px"}
                height={"60px"}
                alt="React"
              />
            </a>
          </div>
          <div className="col col-start-1 md:col-start-3 row-start-6 md:row-start-3 self-center">
            <a href="https://www.netlify.com/">
              <Image
                src="/netlify_logo.svg"
                width={"130px"}
                height={"35px"}
                alt="Netlify"
              />
            </a>
          </div>
          <div className="col col-start-2 md:col-start-4 row-start-2 md:row-start-1 self-center">
            <a href="https://stripe.com/">
              <Image
                src="/stripe_logo.svg"
                width={"80px"}
                height={"60px"}
                alt="Stripe"
              />
            </a>
          </div>
          <div className="col col-start-2 md:col-start-4 row-start-4 md:row-start-2 self-center">
            <a href="https://www.mongodb.com/cloud/atlas">
              <Image
                src="/mongodb_logo.svg"
                width={"130px"}
                height={"80px"}
                alt="MongoDB"
              />
            </a>
          </div>
          <div className="col col-start-2 md:col-start-4 row-start-6 md:row-start-3 self-center">
            <a href="https://auth0.com/">
              <Image
                src="/auth0_logo.svg"
                width={"110px"}
                height={"80px"}
                alt="Auth0"
              />
            </a>
          </div>
        </div>
      </motion.div>
      <div className="text-center py-3 md:py-2">
        <Link href="jamstack">
          <a className="text-blue-400 font-semibold underline">
            ¿Cómo JAMstack potencía mi negocio? &rarr;
          </a>
        </Link>
      </div>
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
