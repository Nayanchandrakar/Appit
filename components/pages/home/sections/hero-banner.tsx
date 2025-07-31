"use client"

import { Container } from "@/components/global/container"
import Image from "next/image"
import { motion } from "motion/react"

export const HeroBanner = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <Container className="relative h-[450px] lg:h-[500px] flex  items-center justify-center lg:justify-between overflow-visible mt-12 px-20 sm:px-6 md:px-10 lg:px-30">
      <motion.div
        className="mb-[25rem] relative hidden lg:inline-block"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        <Image
          alt="hero-image"
          src="/hero/banner1.png"
          width={1000}
          height={1000}
          className=" w-[12.5rem] lg:w-[14rem]"
          priority
        />
        <div className="bg-gradient-to-b from-transparent via-transparent to-black  size-full absolute inset-0" />
      </motion.div>

      <motion.div
        className="relative"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        <Image
          alt="hero-image"
          src="/hero/banner2.png"
          width={1000}
          height={1000}
          className="w-[18rem] lg:w-[16.5rem]"
          priority
        />
        <div className="bg-gradient-to-b from-transparent via-transparent to-black  size-full absolute inset-0" />
      </motion.div>

      <motion.div
        className="relative mb-[25rem] hidden lg:inline-block"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        <Image
          alt="hero-image"
          src="/hero/banner3.png"
          width={1000}
          height={1000}
          className="w-[12.5rem] lg:w-[14rem]"
          priority
        />
        <div className="bg-gradient-to-b from-transparent via-transparent to-black  size-full absolute inset-0" />
      </motion.div>
    </Container>
  )
}
