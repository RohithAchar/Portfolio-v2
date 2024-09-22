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

const HomePage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-y-4">
        {/* HERO */}
        <section id="hero">
          <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6 mt-8">
            <div className="absolute top-0 left-0 bg-accent w-56 h-6 rounded-full blur-3xl" />
            <h3 className="text-xl font-semibold text-gray-200">
              Hello, I&apos;m
            </h3>
            <h1 className="text-5xl font-bold text-gradient">Rohith Achar</h1>
            <p className="text-sm text-gray-400">
              A passionate{" "}
              <span className="text-accent">fullstack developer</span>.
            </p>
            <button
              onClick={() => {}}
              className="border border-[#1D1D1D] py-4 px-6 rounded-lg w-40 text-sm text-accent/90"
            >
              Download CV
            </button>
          </div>
        </section>
        {/* ABOUT */}
        <section id="about">
          <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
            <h3 className="text-xl font-semibold text-gray-300">About</h3>
            <p className="text-sm text-gray-400">
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
            <p className="text-sm text-gray-400">
              Fast forward to today, I’m immersed in the world of{" "}
              <span className="font-semibold text-accent">web development</span>
              , and I’m truly enjoying the process of building and refining my
              skills. My journey has taught me the importance of{" "}
              <span className="font-semibold text-accent">
                perseverance and continuous learning
              </span>
            </p>
            <p className="text-sm text-gray-400">
              I’m excited to join a dynamic team and eager to apply my skills in
              solving real-world problems while continuously learning and
              growing as a developer.
            </p>
            <p className="text-sm text-gray-400">
              When I&apos;m not coding, you&apos;ll find me gaming, exploring
              new technologies, or watching anime.
            </p>
          </div>
        </section>
        {/* EDUCATION */}
        <section id="education">
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
        </section>
        {/* ABOUT */}
        <section id="about">
          <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
            <h3 className="text-xl font-semibold text-gray-300">Tools</h3>
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
            <h3 className="text-xl font-semibold text-gray-300">Projects</h3>
            <Card>
              <div className="flex gap-4">
                <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg">
                  <Image
                    fill
                    alt="image"
                    src={"/e-commerce-dashboard.png"}
                    className="min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg opacity-80"
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <p className="flex justify-between text-semibold text-accent/80">
                    E-commerce-admin <span>L</span>{" "}
                  </p>
                  <p className="text-sm font-normal text-accent/50">
                    A fullstack app to manage stores.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge>Nextjs</Badge>
                    <Badge>Shadcn</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>Prisma</Badge>
                    <Badge>Clerk</Badge>
                    <Badge>TailwindCSS</Badge>
                    <Badge>Zustand</Badge>
                    <Badge>Stripe</Badge>
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex gap-4">
                <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg">
                  <Image
                    fill
                    alt="image"
                    src={"/e-commerce-store.png"}
                    className="min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg opacity-80"
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <p className="flex justify-between text-semibold text-accent/80">
                    E-commerce-store <span>L</span>{" "}
                  </p>
                  <p className="text-sm font-normal text-accent/50">
                    A fullstack app e-commerce app.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge>Nextjs</Badge>
                    <Badge>TailwindCSS</Badge>
                    <Badge>Zustand</Badge>
                    <Badge>Stripe</Badge>
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex gap-4">
                <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg">
                  <Image
                    fill
                    alt="image"
                    src={"/knight-travail.png"}
                    className="min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg opacity-80"
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <p className="flex justify-between text-semibold text-accent/80">
                    The Knight Travail <span>L</span>{" "}
                  </p>
                  <p className="text-sm font-normal text-accent/50">
                    Implementation of the BFS algorithm to find the Knight’s
                    tour.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge>Javascript</Badge>
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
        {/* CONTACT */}
        <section id="projects">
          <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
            <h3 className="text-xl font-semibold text-gray-300">Projects</h3>
            <Card></Card>
          </div>
        </section>
        {/* FOOTER */}
        <section id="projects">
          <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
            <h3 className="text-xl font-semibold text-gray-300">Projects</h3>
            <Card></Card>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default HomePage;
