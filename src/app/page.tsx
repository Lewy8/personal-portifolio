'use client'

import Navbar from "@/components/navigation/navbar";
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IconCloud } from "@/components/ui/icon-cloud";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";
import { motion } from "framer-motion";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
];


export default function Home() {

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl mb-6">
              <Image
                src="/lewy.png"
                alt="Lewis Nhuguti"
                width={256}
                height={256}
                className="object-cover"
                priority
              />
            </div>

            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 
                        text-transparent bg-clip-text 
                        bg-gradient-to-r from-slate-600 to-purple-600 
                        dark:from-blue-400 dark:to-purple-400">
                <TextAnimate animation="slideUp" by="word">
                  Hello, I'm Lewis Nhuguti
                </TextAnimate>
              </h1>
              <h4 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                <TextAnimate animation="slideUp" by="word">
                  A Mobile application and web developer.
                </TextAnimate>
              </h4>

            </div>
          </motion.div>

          {/* Tech Cloud Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <IconCloud images={images} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center space-x-4 mt-12"
        >
          <Link href="mailto:lewisnhuguti@gmail.com">
            <button className="bg-gradient-to-r 
              from-slate-600 
              via-slate-800
              to-purple-900 
              text-white 
              px-6 
              py-3 
              rounded-tr-lg 
              rounded-bl-lg 
              shadow-[4px_4px_0px_0px_rgba(210,23,101,1)] 
              transition-all 
              duration-500 
              ease-in-out 
              hover:translate-x-[3px] 
              hover:shadow-none
              hover:from-slate-700 
              hover:via-slate-900 
              hover:to-purple-950 
              transform 
              hover:scale-105">
              <span className="whitespace-pre-wrap px-2 text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Contact Now
              </span>
            </button>
          </Link>

          <Link href="/cv-lewisnhuguti.pdf" target="_blank">
            <button className="bg-gradient-to-r 
              from-purple-900 
              via-slate-800
              to-slate-900 
              text-white 
              px-6 
              py-3 
              rounded-tr-lg 
              rounded-bl-lg 
              shadow-[4px_4px_0px_0px_rgba(210,23,101,1)] 
              transition-all 
              duration-500 
              ease-in-out 
              hover:translate-x-[3px] 
              hover:shadow-none
              hover:from-purple-950 
              hover:via-slate-900 
              hover:to-slate-950 
              transform 
              hover:scale-105">
              <span className="whitespace-pre-wrap px-2 text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Resume
              </span>
            </button>
          </Link>

        </motion.div>

      </motion.div>
    </div>
  );
}
