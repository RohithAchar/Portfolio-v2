"use client";

import { FaNode, FaReact } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiPostgresql, SiPrisma } from "react-icons/si";
import Image from "next/image";

import Container from "../components/ui/container";
import Card from "../components/card";
import LogoCard from "../components/logo-card";
import Badge from "../components/ui/badge";
import CursorFollow from "../components/cursorFollow";
import Contact from "../components/contact";

const HomePage = () => {
  return (
    <Container>
      <CursorFollow />
      <div className="flex flex-col gap-y-4 md:flex-row max-w-screen-lg mx-auto md:mt-8">
        {/* HERO */}
        <div className="md:w-full text-nowrap md:h-full md:sticky top-8">
          <section id="hero">
            <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6 mt-8">
              <div className="md:hidden absolute top-0 left-0 bg-accent w-56 h-6 rounded-full blur-3xl opacity-65" />
              <h3 className="text-xl font-semibold text-gray-200">
                Hello, I&apos;m 👋
              </h3>
              <h1 className="text-5xl font-bold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                Rohith Achar
              </h1>
              <p className="text-sm md:text-base text-gray-400">
                A passionate{" "}
                <span className="text-accent">fullstack developer.</span>
              </p>
              <a
                href={`${process.env.RESUME_DOWNLOAD_URL}`}
                className="border text-center border-[#1D1D1D] py-4 px-6 rounded-lg w-40 text-sm text-accent/90"
              >
                Download CV
              </a>
            </div>
          </section>
          <div className="hidden md:block">
            <Contact />
          </div>
        </div>
        {/* ABOUT */}
        <div className="md:max-w-lg md:mx-auto md:mt-8">
          <section id="about">
            <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
              <h3 className="text-xl font-semibold text-gray-100">About</h3>
              <p className="text-sm md:text-base text-gray-400">
                Back in my childhood, I developed a passion for{" "}
                <span className="font-semibold text-accent">gaming</span>, often
                tweaking the graphics settings to fix lag and enhance the
                experience. This early interest in technology led me to pursue a{" "}
                <span className="font-semibold text-accent">BCA</span> degree,
                where I started learning the basics of programming. However,{" "}
                <span className="text-accent">
                  I faced challenges in solving coding problems
                </span>{" "}
                during my second year. Determined to improve, I enrolled in the{" "}
                <span className="font-semibold text-accent">
                  Wipro TalentNext Program
                </span>
                , where I gained valuable insights into problem-solving
                approaches.
              </p>
              <p className="text-sm md:text-base text-gray-400">
                Fast forward to today, I’m immersed in the world of{" "}
                <span className="font-semibold text-accent">
                  web development
                </span>
                , and I’m truly enjoying the process of building and refining my skills. My journey has taught me the
                importance of{" "}
                <span className="font-semibold text-accent">
                  perseverance and continuous learning.
                </span>
              </p>
              <p className="text-sm md:text-base text-gray-400">
                I’m excited to join a dynamic team and eager to apply my skills
                in solving real-world problems while continuously learning and
                growing as a developer.
              </p>
              <p className="text-sm md:text-base text-gray-400">
                When I&apos;m not coding, you&apos;ll find me gaming, exploring
                new technologies, or watching anime.
              </p>
            </div>
          </section>
          {/* EDUCATION */}
          {/* <section id="education">
          <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
            <h3 className="text-xl font-semibold text-gray-300">Education</h3>
            <Card>
              <div className="flex gap-4">
                <p className="text-sm text-gray-400">2020-2022</p>
                <div>
                  <p className="text-sm text-gray-200">BCK</p>
                  <p className="text-sm text-gray-400">asdhjasdkj asdjalksdj</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex gap-4">
                <p className="text-sm text-gray-400">2020-2022</p>
                <div>
                  <p className="text-sm text-gray-200">BCK</p>
                  <p className="text-sm text-gray-400">asdhjasdkj asdjalksdj</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex gap-4">
                <p className="text-sm text-gray-400">2020-2022</p>
                <div>
                  <p className="text-sm text-gray-200">BCK</p>
                  <p className="text-sm text-gray-400">asdhjasdkj asdjalksdj</p>
                </div>
              </div>
            </Card>
          </div>
        </section> */}
          {/* ABOUT */}
          <section id="about">
            <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
              <h3 className="text-xl font-semibold text-gray-100">Tools</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <LogoCard>
                  <IoLogoJavascript size={25} />
                  <p className="text-sm text-accent/50">Javascript</p>
                </LogoCard>
                <LogoCard>
                  <FaNode size={25} />
                  <p className="text-sm text-accent/50">Nodejs</p>
                </LogoCard>
                <LogoCard>
                  <FaReact size={25} />
                  <p className="text-sm text-accent/50">React</p>
                </LogoCard>
                <LogoCard>
                  <RiNextjsLine size={25} />
                  <p className="text-sm text-accent/50">Nextjs</p>
                </LogoCard>
                <LogoCard>
                  <RiTailwindCssLine size={25} />
                  <p className="text-sm text-accent/50">Tailwind CSS</p>
                </LogoCard>
                <LogoCard>
                  <SiPostgresql size={25} />
                  <p className="text-sm text-accent/50">PostgreSQL</p>
                </LogoCard>
                <LogoCard>
                  <SiPrisma size={25} />
                  <p className="text-sm text-accent/50">Prisma</p>
                </LogoCard>
                <LogoCard>
                  <SiExpress size={25} />
                  <p className="text-sm text-accent/50">Expressjs</p>
                </LogoCard>
              </div>
            </div>
          </section>
          {/* PROJECT */}
          <section id="projects">
            <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
              <h3 className="text-xl font-semibold text-gray-100">Projects</h3>
              <a
                className="group"
                href="https://e-commerce-admin-lovat-kappa.vercel.app/"
                target="_blank"
              >
                <Card>
                  <div className="flex gap-4">
                    <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg">
                      <Image
                        fill
                        alt="image"
                        src={"/e-commerce-dashboard.png"}
                        className="object-cover min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg opacity-80 md:group-hover:opacity-100 transition"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="flex justify-between items-center text-semibold text-accent/80 md:group-hover:text-accent transition">
                        E-commerce-admin{" "}
                        <span className="opacity-50 md:group-hover:opacity-100 transition">
                          ↗
                        </span>{" "}
                      </p>
                      <p className="text-sm font-normal text-accent/50">
                        A fullstack app to manage stores.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge>Typescript</Badge>
                    <Badge>Nextjs</Badge>
                    <Badge>Shadcn</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>Prisma</Badge>
                    <Badge>Clerk</Badge>
                    <Badge>TailwindCSS</Badge>
                    <Badge>Zustand</Badge>
                    <Badge>Stripe</Badge>
                  </div>
                </Card>
              </a>
              <a
                href="https://e-commerce-store-six-pearl.vercel.app/"
                target="_blank"
                className="group"
              >
                <Card>
                  <div className="flex gap-4">
                    <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg">
                      <Image
                        fill
                        alt="image"
                        src={"/e-commerce-store.png"}
                        className="object-cover min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg opacity-80 md:group-hover:opacity-100 transition"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="flex justify-between text-semibold text-accent/80 md:group-hover:text-accent transition">
                        E-commerce-store{" "}
                        <span className="opacity-50 md:group-hover:opacity-100 transition">
                          ↗
                        </span>{" "}
                      </p>
                      <p className="text-sm font-normal text-accent/50">
                        A fullstack app e-commerce app.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge>Typescript</Badge>
                    <Badge>Nextjs</Badge>
                    <Badge>TailwindCSS</Badge>
                    <Badge>Zustand</Badge>
                    <Badge>Stripe</Badge>
                  </div>
                </Card>
              </a>
              <a
                href="https://rohithachar.github.io/Knights-Travails/"
                target="_blank"
                className="group"
              >
                <Card>
                  <div className="flex gap-4">
                    <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg">
                      <Image
                        fill
                        alt="image"
                        src={"/knight-travail.png"}
                        className="object-cover min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg opacity-80 md:group-hover:opacity-100 transition"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="flex justify-between text-semibold text-accent/80 md:group-hover:text-accent transition">
                        The Knight Travail{" "}
                        <span className="opacity-50 md:group-hover:opacity-100 transition">
                          ↗
                        </span>{" "}
                      </p>
                      <p className="text-sm font-normal text-accent/50">
                        Implementation of the BFS algorithm to find the Knight’s
                        tour.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge>Javascript</Badge>
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                  </div>
                </Card>
              </a>
            </div>
          </section>
          {/* CONTACT */}
          <div className="md:hidden">
            <Contact />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
