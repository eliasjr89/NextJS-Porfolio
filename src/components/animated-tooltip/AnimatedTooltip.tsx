"use client";

import { TextGenerateEffect } from "../text-generate-effect/TextGenerateEffect";
import { useTranslation } from "@/hooks/useTranslations";
import React, { useState, useMemo, useCallback } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiVuedotjs,
  SiReact,
  SiAngular,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiJest,
  SiJenkins,
  SiDocker,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiPostman,
  SiPycharm,
  SiJsonwebtokens,
  SiJasmine,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
} from "react-icons/si";

const skillsData = [
  {
    id: 1,
    name: "JavaScript (ES6+)",
    designation: "frontend",
    Icon: SiJavascript,
  },
  { id: 2, name: "TypeScript", designation: "frontend", Icon: SiTypescript },
  { id: 3, name: "HTML5", designation: "frontend", Icon: SiHtml5 },
  { id: 4, name: "CSS3", designation: "frontend", Icon: SiCss3 },
  { id: 5, name: "SCSS", designation: "frontend", Icon: SiSass },
  { id: 6, name: "Vue.js", designation: "frontend", Icon: SiVuedotjs },
  { id: 7, name: "React.js", designation: "frontend", Icon: SiReact },
  { id: 8, name: "Angular", designation: "frontend", Icon: SiAngular },
  { id: 9, name: "Bootstrap", designation: "frontend", Icon: SiBootstrap },
  { id: 10, name: "Tailwind", designation: "frontend", Icon: SiTailwindcss },
  { id: 15, name: "Express.js", designation: "backend", Icon: SiExpress },
  { id: 16, name: "Flask", designation: "backend", Icon: SiFlask },
  {
    id: 18,
    name: "JWT (Authentication)",
    designation: "backend",
    Icon: SiJsonwebtokens,
  },
  { id: 19, name: "MongoDB", designation: "backend", Icon: SiMongodb },
  {
    id: 20,
    name: "PostgreSQL (basic)",
    designation: "backend",
    Icon: SiPostgresql,
  },
  { id: 21, name: "MySQL", designation: "backend", Icon: SiMysql },
  { id: 22, name: "Jest", designation: "testing", Icon: SiJest },
  { id: 23, name: "Jasmine", designation: "testing", Icon: SiJasmine },
  { id: 24, name: "Git", designation: "testing", Icon: SiGit },
  { id: 25, name: "GitHub", designation: "testing", Icon: SiGithub },
  { id: 26, name: "Bitbucket", designation: "testing", Icon: SiBitbucket },
  { id: 28, name: "Postman", designation: "testing", Icon: SiPostman },
  { id: 29, name: "Pycharm", designation: "testing", Icon: SiPycharm },
  { id: 31, name: "Docker", designation: "testing", Icon: SiDocker },
  { id: 32, name: "Jenkins", designation: "testing", Icon: SiJenkins },
  { id: 33, name: "TensorFlow", designation: "ai", Icon: SiTensorflow },
  { id: 34, name: "PyTorch", designation: "ai", Icon: SiPytorch },
  { id: 35, name: "OpenAI API", designation: "ai", Icon: SiOpenai },
];

export const AnimatedTooltip = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const groupedSkills = useMemo(() => {
    return skillsData.reduce<Record<string, typeof skillsData>>(
      (acc, skill) => {
        acc[skill.designation] = acc[skill.designation] || [];
        acc[skill.designation].push(skill);
        return acc;
      },
      {}
    );
  }, []);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const halfWidth = event.currentTarget.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    },
    [x]
  );

  return (
    <div className="max-w-4xl mx-auto px-4">
      {Object.entries(groupedSkills).map(([sectionKey, skills]) => (
        <section key={sectionKey} className="mb-12">
          <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100">
            <TextGenerateEffect
              words={
                t.skillSections[sectionKey as keyof typeof t.skillSections]
              } // 👈 traducción dinámica
              duration={0.5}
            />
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map(({ id, name, Icon }) => (
              <div
                key={id}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(id)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={handleMouseMove}
              >
                <div
                  className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-110 backdrop-blur-sm"
                  role="button"
                  aria-label={`Skill: ${name} (${
                    t.skillSections[sectionKey as keyof typeof t.skillSections]
                  })`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <AnimatePresence mode="popLayout">
                  {hoveredIndex === id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.6 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1,
                        },
                      }}
                      exit={{ opacity: 0, y: 20, scale: 0.6 }}
                      style={{ translateX, rotate, whiteSpace: "nowrap" }}
                      className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black/80 px-4 py-2 text-xs text-white shadow-xl backdrop-blur-sm"
                    >
                      <div className="font-semibold">{name}</div>
                      <div className="text-[10px] text-gray-300">
                        {
                          t.skillSections[
                            sectionKey as keyof typeof t.skillSections
                          ]
                        }
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
