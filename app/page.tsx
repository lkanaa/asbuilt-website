'use client';

import React, { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ClipboardList,
  Cuboid,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
} from "lucide-react";

const images = {
  logo: "/images/logo.jpeg",
  hero: "/images/hero.png",
  heroBlueprint: "/images/asd.png",
  bimBuildingTransparent: "/images/consulate-transparent.png",
  ortofoto: "/images/ortofoto.png",
  ortofotoProcessing: "/images/ortofoto-processing.png",
  ortofotoAnalysis: "/images/ortofoto-analysis.png",
  bimBuilding: "/images/bim-building.png",
  clashGeneral: "/images/clash-general.png",
  clashAnalysis: "/images/clash-analysis.png",
  clashResolution: "/images/clash-resolution.png",
  arqdesign: "/images/arq-design.png",
};

/**
 * HERO MANUAL POSITION CONTROLS
 *
 * Use negative values to move up:
 * "-translate-y-2", "-translate-y-4", "-translate-y-6", "-translate-y-8", "-translate-y-10"
 *
 * Use positive values to move down:
 * "translate-y-2", "translate-y-4", "translate-y-6", "translate-y-8", "translate-y-10"
 */
const HERO_PARAGRAPH_OFFSET_CLASS = "translate-y-0";
const HERO_BUTTONS_OFFSET_CLASS = "translate-y-0";

/**
 * SERVICE CARD RESPONSIVE SIZE CONTROLS
 *
 * These use CSS clamp():
 * clamp(minimum size, preferred responsive size, maximum size)
 *
 * Example:
 * max-w-[clamp(18rem,28vw,30rem)]
 * - 18rem = smallest card width
 * - 28vw = grows based on viewport width
 * - 30rem = largest card width
 *
 * To make cards bigger:
 * - increase the first number for mobile/small screens
 * - increase the vw number for stronger scaling
 * - increase the last number for desktop max size
 */
const SERVICE_CARD_WIDTH_CLASS = "w-full max-w-[clamp(18rem,28vw,30rem)]";
const SERVICE_CARD_HEIGHT_CLASS = "h-[clamp(15rem,20vw,23rem)]";
const SERVICE_CARD_GRID_WIDTH_CLASS = "max-w-[1540px]";

type Service = {
  title: string;
  description: string;
  bullets: string[];
  image: string;
};

type ServiceGroup = {
  category: string;
  description: string;
  services: Service[];
};

const serviceGroups: ServiceGroup[] = [
  {
    category: "Diseño",
    description:
      "Servicios enfocados en crear, desarrollar y definir el inmueble desde su concepto inicial hasta una propuesta arquitectónica clara.",
    services: [
      {
        title: "Diseño de Inmueble",
        description:
          "Definimos la distribución, concepto y funcionalidad del inmueble para convertir una idea inicial en una propuesta clara y viable.",
        bullets: [
          "Conceptualización del espacio",
          "Distribución funcional",
          "Propuesta integral del inmueble",
        ],
        image: images.hero,
      },
      {
        title: "Diseño Arquitectónico",
        description:
          "Desarrollamos criterios arquitectónicos, planos y soluciones visuales para comunicar el proyecto con claridad desde sus primeras etapas.",
        bullets: [
          "Anteproyecto arquitectónico",
          "Desarrollo de planos",
          "Criterios estéticos y funcionales",
        ],
        image: images.arqdesign,
      },
    ],
  },
  {
    category: "Modelado BIM",
    description:
      "Modelos digitales precisos para visualizar, cuantificar, coordinar y documentar el proyecto con información confiable.",
    services: [
      {
        title: "Modelado BIM y 3D",
        description:
          "Creamos modelos digitales precisos para visualizar, cuantificar y coordinar información arquitectónica, estructural y MEP.",
        bullets: ["Arquitectura, estructura y MEP", "Cuantificación", "Visualización"],
        image: images.bimBuilding,
      },
      {
        title: "Modelado de Disciplinas",
        description:
          "Modelamos disciplinas técnicas para integrar arquitectura, estructura e instalaciones dentro de un flujo BIM coordinado.",
        bullets: ["Arquitectura", "Estructura", "Instalaciones MEP"],
        image: images.clashGeneral,
      },
    ],
  },
  {
    category: "Coordinación y Documentación",
    description:
      "Procesos técnicos para validar condiciones existentes, detectar interferencias y generar entregables útiles para obra y operación.",
    services: [
      {
        title: "Levantamiento por nube de puntos",
        description:
          "Procesamos información capturada en sitio para generar bases confiables de modelado, coordinación y documentación técnica.",
        bullets: ["Escaneo láser 3D", "Procesamiento", "Registro y alineación"],
        image: images.ortofoto,
      },
      {
        title: "Coordinación de Ingeniería",
        description:
          "Coordinamos disciplinas y revisamos interferencias para reducir errores, retrabajos y conflictos antes de llegar a obra.",
        bullets: [
          "Integración de disciplinas",
          "Revisión de interferencias",
          "Optimización de soluciones técnicas",
        ],
        image: images.clashAnalysis,
      },
      {
        title: "Documentación As-Built",
        description:
          "Generamos documentación final clara, verificable y lista para construcción, operación, mantenimiento o cierre técnico.",
        bullets: ["Planos", "Conversión CAD", "Informes de calidad"],
        image: images.clashResolution,
      },
    ],
  },
];

type ProcessStep = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const process: ProcessStep[] = [
  {
    icon: ClipboardList,
    title: "Revisamos tu proyecto",
    text: "Analizamos alcance, objetivos y requerimientos técnicos.",
  },
  {
    icon: Layers3,
    title: "Capturamos o recibimos la información",
    text: "Trabajamos con escaneo 3D, planos, fotografías o documentación existente.",
  },
  {
    icon: Cuboid,
    title: "Modelamos y coordinamos",
    text: "Generamos modelos BIM y coordinamos disciplinas para validación.",
  },
  {
    icon: CheckCircle2,
    title: "Entregamos archivos listos para uso",
    text: "Entregables precisos para obra, operación o documentación final.",
  },
];

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b5121b]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">
          {description}
        </p>
      ) : null}

      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-white" />
    </div>
  );
}

export default function AsBuiltHomepageRedesign() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error">("success");

  useEffect(() => {
    const lastSubmit = localStorage.getItem("asbuilt_form_submitted");
    const today = new Date().toDateString();

    if (lastSubmit === today) {
      setAlreadySubmitted(true);
    }
  }, []);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const today = new Date().toDateString();
    const lastSubmit = localStorage.getItem("asbuilt_form_submitted");

    if (lastSubmit === today) {
      setAlreadySubmitted(true);
      setStatusType("error");
      setStatusMessage("Ya enviaste un mensaje hoy. Por favor espera hasta mañana.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || "Error sending message");
      }

      localStorage.setItem("asbuilt_form_submitted", today);
      setAlreadySubmitted(true);
      setStatusType("success");
      setStatusMessage("¡Gracias! Nos pondremos en contacto pronto.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      setStatusType("error");
      setStatusMessage("Hubo un error al enviar el mensaje. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen scroll-smooth bg-black text-white">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .clickable-motion {
          transition: transform 220ms ease, box-shadow 220ms ease, background-color 220ms ease, border-color 220ms ease;
        }

        .clickable-motion:hover {
          transform: translateY(-3px) scale(1.015);
        }

        .clickable-motion:active {
          transform: translateY(0) scale(0.97);
        }

        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(34px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @supports (animation-timeline: view()) {
          .scroll-reveal {
            opacity: 0;
            animation: revealUp 0.75s ease-out forwards;
            animation-timeline: view();
            animation-range: entry 8% cover 28%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .clickable-motion,
          .clickable-motion:hover,
          .clickable-motion:active,
          .scroll-reveal {
            transform: none;
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 text-black shadow-sm backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <img
              src={images.logo}
              alt="As-Built"
              className="h-16 w-auto rounded-md object-contain"
            />
          </a>

          <div className="hidden items-center gap-9 text-base font-black text-black/85 md:flex">
            <a href="#servicios" className="transition hover:text-[#b5121b]">
              Servicios
            </a>
            <a href="#proceso" className="transition hover:text-[#b5121b]">
              Proceso
            </a>
            <a href="#contacto" className="transition hover:text-[#b5121b]">
              Contacto
            </a>
          </div>

          <a
            href="#contacto"
            className="clickable-motion hidden rounded-xl border border-black bg-black px-6 py-3 text-base font-black text-white shadow-lg shadow-black/15 hover:bg-zinc-800 md:inline-flex"
          >
            Cotizar
          </a>

          <button
            className="rounded-xl border border-black/15 p-2 text-black md:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <section className="relative min-h-[calc(100svh-104px)] overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(255,255,255,0.8),transparent_34%),radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.72),transparent_28%),linear-gradient(135deg,#ffffff_0%,#f4f4f4_48%,#dedede_100%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.85)_1px,transparent_1.2px)] [background-size:22px_22px]" />
        </div>

        <div className="pointer-events-none absolute right-[-8%] top-1/2 hidden h-[78%] w-[58%] -translate-y-1/2 opacity-[0.18] lg:block">
          <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(circle,rgba(0,0,0,0.92)_1.15px,transparent_1.35px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_center,black_0%,black_48%,transparent_76%)]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-end overflow-hidden">
          <img
            src={images.heroBlueprint}
            alt="Modelo arquitectónico As-Built en líneas técnicas"
            className="h-full w-full object-contain object-right drop-shadow-[0_28px_34px_rgba(0,0,0,0.16)]"
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-104px)] max-w-[1680px] items-start px-6 py-20 lg:px-10 xl:px-14 2xl:px-16">
          <div className="max-w-[760px]">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-[#b5121b]">
              BIM · As-Built · Documentación técnica
            </p>

            <h1 className="font-black leading-[0.98] tracking-[-0.055em] text-black text-[clamp(2.45rem,4.7vw,5.1rem)]">
              Modelos{" "}
              <span className="text-[#b5121b]">
                As-Built
              </span>{" "}
              precisos para arquitectura, ingeniería y construcción
            </h1>

            <div className={HERO_PARAGRAPH_OFFSET_CLASS}>
              <p className="mt-9 max-w-3xl text-xl font-semibold leading-9 text-zinc-700 lg:text-2xl">
                Transformamos levantamientos, nubes de puntos y documentación existente en modelos BIM y entregables técnicos listos para coordinación, obra y toma de decisiones.
              </p>
            </div>

            <div className={`mt-11 flex flex-col gap-4 sm:flex-row ${HERO_BUTTONS_OFFSET_CLASS}`}>
              <a
                href="#contacto"
                className="clickable-motion inline-flex items-end justify-center rounded-xl bg-black px-9 py-4 text-center text-xl font-black text-white shadow-xl shadow-black/25 hover:bg-zinc-800"
              >
                Solicitar cotización
              </a>

              <a
                href="#servicios"
                className="clickable-motion inline-flex items-end justify-center gap-8 rounded-xl border border-black/70 bg-white/50 px-9 py-4 text-center text-xl font-black text-black backdrop-blur hover:border-black hover:bg-white"
              >
                Ver servicios
                <ArrowRight className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-7 md:grid-cols-4 lg:px-8">
          {[
            { icon: CheckCircle2, label: "Precisión técnica" },
            { icon: Cuboid, label: "Flujo BIM profesional" },
            { icon: Clock3, label: "Respuesta en 24h" },
            { icon: MapPin, label: "Cobertura en México" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 border-white/10 md:border-r md:last:border-r-0"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-bold text-white">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="servicios"
        className="scroll-reveal bg-[linear-gradient(180deg,#000000_0%,#111111_52%,#000000_100%)] px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Servicios"
            title="Del diseño conceptual a la documentación técnica final"
            description="Desarrollamos soluciones de diseño, modelado BIM, coordinación de ingeniería y documentación As-Built para convertir cada etapa del proyecto en información clara, precisa y útil para tomar decisiones."
          />

          <div className="space-y-16">
            {serviceGroups.map((group) => (
              <section
                key={group.category}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center shadow-2xl shadow-black/20 backdrop-blur md:p-8"
              >
                <div className="mx-auto mb-10 max-w-3xl text-center">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b5121b]">
                    {group.category}
                  </p>
                  <p className="mt-3 text-base leading-7 text-zinc-300">
                    {group.description}
                  </p>
                </div>

                <div className={`mx-auto flex ${SERVICE_CARD_GRID_WIDTH_CLASS} flex-wrap justify-center gap-8`}>
                  {group.services.map((service) => (
                    <div
                      key={service.title}
                      className={`scroll-reveal flex ${SERVICE_CARD_WIDTH_CLASS} flex-col items-center`}
                    >
                      <article
                        className={`group relative ${SERVICE_CARD_HEIGHT_CLASS} w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:shadow-white/10`}
                      >
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                          <img
                            src={service.image}
                            alt=""
                            className="h-full w-full object-cover opacity-[0.86] grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                          />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-75" />

                        <div className="absolute inset-x-5 bottom-5 z-10 translate-y-3 rounded-2xl border border-white/10 bg-black/92 p-4 text-left opacity-0 shadow-xl shadow-black/30 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <p className="text-sm font-medium leading-6 text-zinc-200">
                            {service.description}
                          </p>
                        </div>
                      </article>

                      <h3 className="mt-5 max-w-[320px] text-center text-xl font-black leading-tight text-white">
                        {service.title}
                      </h3>

                      <ul className="mt-4 space-y-2 text-center text-sm font-semibold text-zinc-300">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center justify-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#b5121b]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="scroll-reveal bg-black px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Proceso" title="Nuestro proceso" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/20 transition hover:border-white/30"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-4xl font-black text-white/10">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-black text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-reveal bg-[linear-gradient(180deg,#000000_0%,#111111_100%)] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b5121b]">
              Contacto
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">
              Comencemos tu proyecto
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-300">
              Envíanos planos, ubicación o una breve descripción del alcance. Te responderemos con los siguientes pasos. También puedes contactarnos directamente al{" "}
              <a
                href="https://wa.me/+526623748782"
                className="font-black text-white underline decoration-[#b5121b] decoration-2 underline-offset-4 transition hover:text-zinc-300"
              >
                +52 (662) 374 8782
              </a>
              .
            </p>

            {alreadySubmitted ? (
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-white" />
                <h3 className="mt-4 text-xl font-black text-white">¡Mensaje enviado!</h3>
                <p className="mt-2 text-zinc-300">
                  Ya enviaste un mensaje hoy. Te contactaremos pronto. Puedes volver a escribirnos mañana.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white focus:ring-4 focus:ring-white/10"
                    placeholder="Nombre completo"
                  />

                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white focus:ring-4 focus:ring-white/10"
                    placeholder="Correo electrónico"
                  />

                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white focus:ring-4 focus:ring-white/10"
                    placeholder="Empresa"
                  />

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white focus:ring-4 focus:ring-white/10"
                    placeholder="Teléfono"
                  />
                </div>

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-zinc-300 outline-none transition focus:border-white focus:ring-4 focus:ring-white/10"
                >
                  <option value="">Tipo de proyecto</option>
                  <option value="Diseño de Inmueble">Diseño de Inmueble</option>
                  <option value="Diseño Arquitectónico">Diseño Arquitectónico</option>
                  <option value="Modelado BIM y 3D">Modelado BIM y 3D</option>
                  <option value="Modelado de Disciplinas">Modelado de Disciplinas</option>
                  <option value="Levantamiento por nube de puntos">Levantamiento por nube de puntos</option>
                  <option value="Coordinación de Ingeniería">Coordinación de Ingeniería</option>
                  <option value="Documentación As-Built">Documentación As-Built</option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="min-h-36 rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-white focus:ring-4 focus:ring-white/10"
                  placeholder="Detalles del proyecto"
                />

                {statusMessage ? (
                  <p
                    className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                      statusType === "success"
                        ? "bg-white/10 text-white"
                        : "bg-[#b5121b]/15 text-red-200"
                    }`}
                  >
                    {statusMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="clickable-motion w-full rounded-xl bg-white px-7 py-4 font-black text-black shadow-lg shadow-black/25 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </div>

          <aside className="relative overflow-hidden border-l border-white/10 bg-black p-8 text-white md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_35%)]" />

            <div className="relative flex h-full flex-col justify-center gap-8">
              <div className="flex gap-4">
                <Mail className="h-7 w-7 text-white" />
                <div>
                  <p className="font-black">info@asbuiltco.com</p>
                  <p className="mt-1 text-sm text-zinc-300">Correo de contacto</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-7 w-7 text-white" />
                <div>
                  <p className="font-black">+52 (662) 374 8782</p>
                  <p className="mt-1 text-sm text-zinc-300">Teléfono</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-7 w-7 text-white" />
                <div>
                  <p className="font-black">WhatsApp</p>
                  <p className="mt-1 text-sm text-zinc-300">Disponibles en WhatsApp/p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="h-7 w-7 text-white" />
                <div>
                  <p className="font-black">Hermosillo, Sonora</p>
                  <p className="mt-1 text-zinc-300">Cobertura para proyectos en México</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="bg-black px-6 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <img
              src={images.logo}
              alt="As-Built"
              className="h-16 w-auto rounded-md object-contain"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
              Modelos As-Built precisos para arquitectura, ingeniería y construcción.
            </p>
          </div>

          {[
            {
              title: "Servicios",
              links: [
                "Diseño de Inmueble",
                "Diseño Arquitectónico",
                "Modelado BIM y 3D",
                "Modelado de Disciplinas",
                "Levantamiento 3D",
                "Coordinación de Ingeniería",
                "Documentación As-Built",
              ],
            },
            {
              title: "Nosotros",
              links: ["Quiénes somos", "Nuestro enfoque", "Clientes"],
            },
            {
              title: "Contacto",
              links: ["info@asbuiltco.com", "+52 (662 374 8782", "Hermosillo, Sonora"],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <h3 className="font-black text-white">{title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-zinc-500">
          © 2026 As-Built. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
