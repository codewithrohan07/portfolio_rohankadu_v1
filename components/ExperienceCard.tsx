import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" h-32 w-32 xl:h-[150px] xl:w-[150px] rounded-full object-center object-cover opacity-60"
        src="https://pbs.twimg.com/profile_images/1454916106473201671/KUpptfZd_400x400.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Web Designing Agency</h4>
        <p className="font-bold text-2xl mt-1">gochigochi</p>
        <div className="flex space-x-2 my-2">
          {/* Tech use */}
          {/* Tech use */}
          {/* Tech use */}
        </div>
        <p>date started,... - date left</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Points</li>
          <li>Points</li>
          <li>Points</li>
          <li>Points</li>
        </ul>
      </div>
    </article>
  );
}
