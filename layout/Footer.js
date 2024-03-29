import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//Icons
import { GrTwitter, GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("pageAnimate");
  }, [controls, inView]);

  return (
    <>
      <div className="h-0.5 bg-gray-300"></div>
      <footer className="flex flex-col pt-8 px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:flex-row">
            <motion.div
              ref={ref}
              initial="pageInitial"
              animate={controls}
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
              transition={{ duration: 0.7 }}
              className="place-self-center"
            >
              <Image
                src="/rango_logo.svg"
                width="80"
                height="80"
                alt="rango logo"
              />
            </motion.div>
            <div className="flex flex-col text-center py-6 px-8">
              <motion.p
                ref={ref}
                initial="pageInitial"
                animate={controls}
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
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-bold"
              >
                Nosotros
              </motion.p>
              <motion.div
                ref={ref}
                initial="pageInitial"
                animate={controls}
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
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col py-2"
              >
                <Link href="/about">
                  <a className="underline hover:text-yellow-400">Acerca de</a>
                </Link>
                <Link href="/services">
                  <a className="underline hover:text-yellow-400 pt-2">
                    Servicios
                  </a>
                </Link>
              </motion.div>
            </div>
            <div className="flex flex-col text-center py-6 px-8">
              <motion.p
                ref={ref}
                initial="pageInitial"
                animate={controls}
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
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-bold"
                className="font-bold"
              >
                Legal
              </motion.p>
              <motion.div
                ref={ref}
                initial="pageInitial"
                animate={controls}
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
                transition={{ duration: 0.7, delay: 0.4 }}
                className="py-2"
              >
                <Link href="#">
                  <a className="underline hover:text-yellow-400">
                    Política de privacidad
                  </a>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center py-6 px-8">
            <motion.div
              ref={ref}
              initial="pageInitial"
              animate={controls}
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
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex"
            >
              <Link href="https://twitter.com/RangoHQ">
                <a className="bg-yellow-300 text-white rounded-full w-10 h-10 p-2 mx-1">
                  <GrTwitter size={24} />
                </a>
              </Link>
            </motion.div>
            <motion.div
              ref={ref}
              initial="pageInitial"
              animate={controls}
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
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex"
            >
              <Link href="https://www.linkedin.com/company/rangolabs">
                <a className="bg-yellow-300 text-white rounded-full w-10 h-10 p-2 mx-1">
                  <FaLinkedinIn size={24} />
                </a>
              </Link>
            </motion.div>
            <motion.div
              ref={ref}
              initial="pageInitial"
              animate={controls}
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
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex"
            >
              <Link href="https://github.com/RangoHQ">
                <a className="bg-yellow-300 text-white rounded-full w-10 h-10 p-2 mx-1">
                  <GrGithub size={24} />
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial="pageInitial"
          animate={controls}
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex justify-center pt-6 pb-2"
        >
          <small>
            Crafted with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
            &nbsp; at Rango Creative Lab ©2021
          </small>
        </motion.div>
      </footer>
      <div className="h-2 bg-yellow-300"></div>
    </>
  );
};

export default Footer;
