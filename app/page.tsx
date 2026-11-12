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
  logo: "/images/logo.png",
  logo2: "/images/logo 2.png",
  hero: "/images/hero.png",
  heroBlueprint: "/images/asd.png",
  bimBuildingTransparent: "/images/consulate-transparent.png",
  disenoInmueble: "/images/disenoInmueble.jpeg",
  nube: "/images/nube.png",
  nubeFondo: "/images/nubeFondo.png",
  ortofoto: "/images/ortofoto.png",
  arquitectura: "/images/arquitectura.jpg",
  mep: "/images/MEP.jpg",
  topografia: "/images/topografia.jpg",
  ortofotografia: "/images/ortofotografia.jpg",
  //ortofotoProcessing: "/images/ortofoto-processing.png",
  //ortofotoAnalysis: "/images/ortofoto-analysis.png",
  bimBuilding: "/images/bim-building.png",
  clashGeneral: "/images/clash-general.png",
  clashAnalysis: "/images/clash-analysis.png",
  clashResolution: "/images/clash-resolution.png",
  arqdesign: "/images/arq-design.png",
  whatsApp: "/images/whatsApp.png",
  documentacion: "/images/documentacion.jpg",

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
  cardWidthClass?: string;
  cardHeightClass?: string;
  featured?: boolean;
  idealFor?: string;
};

type ServiceGroup = {
  category: string;
  description: string;
  services: Service[];
};

const serviceGroups: ServiceGroup[] = [
  {
    category: "",
    description:
      "Servicios enfocados en crear, desarrollar y definir el inmueble desde su concepto inicial hasta una propuesta arquitectónica clara.",
    services:
      [
        {
          title: "Levantamiento por nube de puntos",
          description:
            "Documentamos la geometría del inmueble mediante escaneo láser 3D y procesamos la información para obtener una referencia del estado existente.",
          bullets: [
            "Escaneo láser 3D",
            "Procesamiento de nubes de puntos",
            "Registro y alineación de escaneos",
          ],
          image: images.nube,

          // Activa el diseño con imagen izquierda y texto derecha.
          featured: true,

          idealFor:
            "Remodelaciones, documentación de inmuebles existentes y proyectos que necesitan una base de información para modelado.",

          // Ancho total del bloque destacado.
          cardWidthClass: "w-full max-w-full",

          // Altura de la imagen según el tamaño de pantalla.
          cardHeightClass: "h-[280px] sm:h-[380px] lg:h-[520px]",
        },
        // {
        //   title: "Diseño de Inmueble",
        //   description:
        //   "Definimos la distribución, concepto y funcionalidad del inmueble para convertir una idea inicial en una propuesta clara y viable.",
        //   bullets: [
        //     "Conceptualización del espacio",
        //      "Distribución funcional",
        //      "Propuesta integral del inmueble",
        //    ],
        //    image: images.hero,
        //   },
        //   {
        //    title: "Diseño Arquitectónico",
        //    description:
        //      "Desarrollamos criterios arquitectónicos, planos y soluciones visuales para comunicar el proyecto con claridad desde sus primeras etapas.",
        //    bullets: [
        //      "Anteproyecto arquitectónico",
        //      "Plantas, cortes y fachadas",
        //      "Diseño estético y funcional",
        //    ],
        //    image: images.arqdesign,
        //  },
        {
          title: "Documentación As-Built",

          description:
            "Generamos documentación técnica que representa las condiciones reales de una construcción, facilitando su operación, mantenimiento y futuras modificaciones.",
          bullets: [
            "Planos de estado actual",
            "Conversión y actualización CAD",
            "Informes y documentación técnica",
          ],
          image: images.documentacion,

        },
        {
          title: "Modelado BIM",
          description:
            "Creamos modelos digitales inteligentes para visualizar, cuantificar y gestionar información arquitectónica, estructural y de instalaciones.",
          bullets: [
            "Modelado 3D por disciplinas",
            "Cuantificación de elementos",
            "Gestión de información BIM",
          ],
          image: images.bimBuilding,
        },
      ],
  },
  {
    category: "Diseño",
    description:
      "Modelos digitales precisos para visualizar, cuantificar, coordinar y documentar el proyecto con información confiable.",
    services: [
      {
        title: "Arquitectura",
        description:
          "Desarrollamos soluciones arquitectónicas que integran funcionalidad, estética y aprovechamiento del espacio en proyectos de construcción.",
        bullets: [
          "Diseño y distribución de espacios",
          "Desarrollo de planos arquitectónicos",
          "Soluciones espaciales y constructivas",
        ],
        image: images.arquitectura,
      },
      {
        title: "Diseño MEP",
        description:
          "Diseñamos y desarrollamos sistemas mecánicos, eléctricos e hidrosanitarios para garantizar su correcta integración dentro del inmueble.",
        bullets: [
          "Diseño de instalaciones mecánicas",
          "Diseño de sistemas eléctricos",
          "Diseño hidrosanitario y pluvial",
        ],
        image: images.mep,
      },
    ],
  },
  {
    category: "Geomática",
    description:
      "Modelos digitales precisos para visualizar, cuantificar, coordinar y documentar el proyecto con información confiable.",
    services: [
      {
        title: "Topografía",
        description:
          "Realizamos levantamientos y mediciones del terreno para obtener información precisa sobre sus dimensiones, elevaciones y características físicas.",
        bullets: [
          "Levantamientos topográficos",
          "Nivelación y altimetría",
          "Generación de planos topográficos",
        ],
        image: images.topografia,
      },
      {
        title: "Ortofotografía",
        description:
          "Generamos imágenes aéreas corregidas geométricamente que permiten medir, analizar y documentar superficies y terrenos con precisión.",
        bullets: [
          "Captura aérea mediante drones",
          "Procesamiento fotogramétrico",
          //"Generación de ortomosaicos georreferenciados",
        ],
        image: images.ortofotografia,
      },
    ],
  },
  //  EJEMPLO DE OTRA CATEGORIA
  //  {
  //    category: "Modelado BIM",
  //    description:
  //      "Modelos digitales precisos para visualizar, cuantificar, coordinar y documentar el proyecto con información confiable.",
  //    services: [
  //      {
  //        title: "Documentación As-Built",
  //        description:
  //          "Generamos documentación final clara, verificable y lista para construcción, operación, mantenimiento o cierre técnico.",
  //        bullets: ["Planos", "Conversión CAD", "Informes de calidad"],
  //        image: images.clashResolution,
  //      },
  //    ],
  //  },
];

const MAIN_SERVICE_TITLE = "Levantamiento por nube de puntos";

const HIGHLIGHTED_SERVICE_TITLES = [
  MAIN_SERVICE_TITLE,
  "Documentación As-Built",
  "Modelado BIM",
];

const allServices = serviceGroups.flatMap(
  (group) => group.services
);

const mainService = allServices.find(
  (service) => service.title === MAIN_SERVICE_TITLE
);

const secondaryHighlightedServices = [
  "Documentación As-Built",
  "Modelado BIM",
].flatMap((title) => {
  const service = allServices.find(
    (item) => item.title === title
  );

  return service ? [service] : [];
});

type ProcessStep = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const process: ProcessStep[] = [
  {
    icon: ClipboardList,
    title: "Revisamos tu proyecto",
    text: "Nos ponemos en contacto con usted para revisar detalles con el equipo de trabajo y organizamos una cotizacion",
  },
  {
    icon: Layers3,
    title: "Elaboramos en una estrategia de trabajo",
    text: "Capturamos y recibimos toda la inforación para proceder.",
  },
  {
    icon: Cuboid,
    title: "Nos enfocamos en el proyecto",
    text: "Ejecutamos el servicio contratado con el máximo detalle posible.",
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

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className={`scroll-reveal flex ${service.cardWidthClass ?? SERVICE_CARD_WIDTH_CLASS
        } flex-col items-center`}
    >
      <article
        className={`group relative ${service.cardHeightClass ?? SERVICE_CARD_HEIGHT_CLASS
          } w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:shadow-white/10`}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={service.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-[0.86] transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-75" />

        <div className="absolute inset-x-5 bottom-5 z-10 translate-y-3 rounded-2xl border border-white/10 bg-black/90 p-4 text-left opacity-0 shadow-xl shadow-black/30 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
          <li
            key={bullet}
            className="flex items-center justify-center gap-2"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#b5121b]" />

            <span>{bullet}</span>
          </li>
        ))}
      </ul>
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
    <main className="min-h-screen scroll-smooth bg-zinc-900 text-white">
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
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8 text-base">
          <a href="#" className="flex items-center gap-3">
            <img
              src={images.logo}
              alt="As-Built"
              className="h-16 w-auto rounded-md object-contain"
            />
          </a>

          <div className="hidden items-center gap-3 text-2xl font-black text-black/85 md:flex">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-xl px-4 py-5 transition hover:text-[#b5121b]"
            >
              Servicios
            </a>

            <a
              href="#proceso"
              className="inline-flex items-center justify-center rounded-xl px-4 py-5 transition hover:text-[#b5121b]"
            >
              Proceso
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-xl px-4 py-5 transition hover:text-[#b5121b]"
            >
              Contacto
            </a>
          </div>

          <a
            href="#contacto"
            className="clickable-motion hidden rounded-xl border b px-14 py-5 text-base font-black text-white shadow-lg shadow-black/15 hover:bg-[#b5121b] md:inline-flex bg-[#b5121b]"
          >
            Cotizar proyecto
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

      <section className="border-y bg-black">
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
        className="relative isolate bg-[#c6c6dc] px-6 py-20 lg:px-8"
        style={{
          backgroundImage: `
      linear-gradient(
        rgba(255, 255, 255, 0.70),
        rgba(255, 255, 255, 0.70)
      ),
      url("${images.nubeFondo}")
    `,
          backgroundSize: "100% 100%, 100% auto",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* =================================================
        ENCABEZADO DE SERVICIOS
        ================================================= */}

          <div className="mx-auto mb-12 max-w-4xl rounded-[2rem] border border-white/15 bg-[#202024]/85 px-6 py-8 shadow-xl shadow-black/20 md:px-10 md:py-10 [&>div]:mb-0">
            <SectionTitle
              eyebrow="Servicios"
              title="Del diseño conceptual a la documentación técnica final"
              description="Desarrollamos soluciones de diseño, modelado BIM, coordinación de ingeniería y documentación As-Built para convertir cada etapa del proyecto en información clara, precisa y útil para tomar decisiones."
            />
          </div>

          <div className="space-y-16">
            {/* =================================================
          SERVICIOS DESTACADOS
          Un solo marco para los tres servicios.
          ================================================= */}

            {mainService && (
              <section className="overflow-hidden rounded-[2rem] border border-white/15 bg-[#101012] p-6 shadow-2xl shadow-black/25 md:p-8">
                {/* Nombre de la categoría especial */}

                <div className="mb-8 text-center">
                  
                </div>

                {/* =============================================
              SERVICIO PRINCIPAL
              Imagen izquierda y texto derecha.
              ============================================= */}

                <article className="scroll-reveal grid items-center gap-8 text-left lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                  {/* Imagen izquierda */}

                  <div
                    className={`${mainService.cardHeightClass ??
                      "h-[280px] sm:h-[380px] lg:h-[520px]"
                      } w-full overflow-hidden rounded-3xl border border-white/10 bg-black`}
                  >
                    <img
                      src={mainService.image}
                      alt="Levantamiento de un inmueble mediante nube de puntos"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Texto derecha */}

                  <div className="min-w-0">
                    <h4 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white lg:text-4xl">
                      {mainService.title}
                    </h4>

                    <p className="mt-6 text-base leading-8 text-zinc-300 lg:text-lg">
                      {mainService.description}
                    </p>

                    {mainService.idealFor && (
                      <div className="mt-6 rounded-2xl border border-white/10 bg-[#1C1C20] p-5">
                        <h5 className="text-sm font-bold text-white">
                          ¿Para qué puede servirte?
                        </h5>

                        <p className="mt-2 text-sm leading-6 text-zinc-300">
                          {mainService.idealFor}
                        </p>
                      </div>
                    )}

                    <ul className="mt-6 space-y-3">
                      {mainService.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-sm leading-6 text-zinc-200"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#FB7185]"
                            aria-hidden="true"
                          />

                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contacto"
                      className="clickable-motion mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-[#b5121b] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#940f17] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FB7185]"
                    >
                      Cotizar levantamiento

                      <ArrowRight
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>

                {/* =============================================
              DOCUMENTACIÓN AS-BUILT Y MODELADO BIM

              Permanecen dentro del mismo marco.
              Conservan su formato original de tarjetas.
              ============================================= */}

                {secondaryHighlightedServices.length > 0 && (
                  <div className="mt-12 border-t border-white/10 pt-10 md:mt-14">
                    <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-7 text-zinc-300">
                      Complementamos la información del inmueble
                      con documentación técnica y modelos
                      digitales para el desarrollo de tu proyecto.
                    </p>

                    <div
                      className={`mx-auto flex ${SERVICE_CARD_GRID_WIDTH_CLASS} flex-wrap justify-center gap-8`}
                    >
                      {secondaryHighlightedServices.map((service) => (
                        <ServiceCard
                          key={service.title}
                          service={service}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* =================================================
          RESTO DE CATEGORÍAS

          Cada categoría conserva su propio marco.
          Se excluyen los tres servicios mostrados arriba.
          ================================================= */}

            {serviceGroups.map((group) => {
              const regularServices = group.services.filter(
                (service) =>
                  !HIGHLIGHTED_SERVICE_TITLES.includes(service.title)
              );

              // Evita crear un marco vacío para el primer grupo.
              if (regularServices.length === 0) {
                return null;
              }

              return (
                <section
                  key={group.category}
                  className="rounded-[2rem] border border-white/15 bg-[#27272A]/95 p-6 text-center shadow-2xl shadow-black/25 md:p-8"
                >
                  {/* Encabezado de la categoría */}

                  <div className="mx-auto mb-10 max-w-3xl text-center">
                    {group.category && (
                      <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#b5121b]">
                        {group.category}
                      </h3>
                    )}

                    <p className="mt-3 text-base leading-7 text-zinc-300">
                      {group.description}
                    </p>
                  </div>

                  {/* Tarjetas originales */}

                  <div
                    className={`mx-auto flex ${SERVICE_CARD_GRID_WIDTH_CLASS} flex-wrap justify-center gap-8`}
                  >
                    {regularServices.map((service) => (
                      <ServiceCard
                        key={service.title}
                        service={service}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
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

      <section
        id="contacto"
        className="scroll-reveal bg-[#0B0B0D] px-6 py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#141416] lg:grid-cols-[1.15fr_0.85fr]">
          {/* ==========================================
        FORMULARIO
        ========================================== */}

          <div className="p-6 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b5121b]">
              Contacto
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
              Cuéntanos qué necesita tu proyecto
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
              Comparte una breve descripción y revisaremos la
              información necesaria para preparar tu cotización.
            </p>

            {alreadySubmitted ? (
              <div
                role="status"
                className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <CheckCircle2
                  className="h-10 w-10 text-emerald-300"
                  aria-hidden="true"
                />

                <h3 className="mt-4 text-xl font-bold text-white">
                  ¡Recibimos tu consulta!
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  Ya enviaste un mensaje hoy. Si necesitas agregar
                  información o compartir planos, puedes escribirnos
                  por WhatsApp.
                </p>

                <a
                  href="https://wa.me/526623748782?text=Hola%2C%20envi%C3%A9%20una%20consulta%20desde%20su%20p%C3%A1gina%20y%20quiero%20compartir%20m%C3%A1s%20informaci%C3%B3n%20de%20mi%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-3 rounded-xl bg-[#166534] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#14532D]"
                >
                  <img
                    src={images.whatsApp}
                    alt=""
                    className="h-6 w-6 object-contain"
                  />

                  Continuar por WhatsApp

                  <ArrowRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                aria-busy={isSubmitting}
                className="mt-8"
              >
                <p className="mb-5 text-xs text-zinc-400">
                  Los campos marcados con * son obligatorios.
                </p>

                <fieldset
                  disabled={isSubmitting}
                  className="grid gap-5 disabled:opacity-70"
                >
                  <legend className="sr-only">
                    Datos de contacto y del proyecto
                  </legend>

                  {/* Nombre */}

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-white"
                    >
                      Nombre completo *
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      maxLength={120}
                      className="w-full rounded-xl border border-white/20 bg-[#0B0B0D] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#FB7185] focus:ring-2 focus:ring-[#FB7185]/20"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Correo y teléfono */}

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-sm font-semibold text-white"
                      >
                        Correo electrónico *
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        maxLength={254}
                        className="w-full rounded-xl border border-white/20 bg-[#0B0B0D] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#FB7185] focus:ring-2 focus:ring-[#FB7185]/20"
                        placeholder="nombre@empresa.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-sm font-semibold text-white"
                      >
                        Teléfono — opcional
                      </label>

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        maxLength={30}
                        className="w-full rounded-xl border border-white/20 bg-[#0B0B0D] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#FB7185] focus:ring-2 focus:ring-[#FB7185]/20"
                        placeholder="Tu número de contacto"
                      />
                    </div>
                  </div>

                  {/* Servicio */}

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="mb-2 block text-sm font-semibold text-white"
                    >
                      Servicio de interés *
                    </label>

                    <select
                      id="contact-service"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-white/20 bg-[#0B0B0D] px-4 py-3 text-white outline-none transition [color-scheme:dark] focus:border-[#FB7185] focus:ring-2 focus:ring-[#FB7185]/20"
                    >
                      <option value="">
                        Selecciona un servicio
                      </option>

                      {serviceGroups
                        .flatMap((group) => group.services)
                        .map((service) => (
                          <option
                            key={service.title}
                            value={service.title}
                          >
                            {service.title}
                          </option>
                        ))}

                      <option value="Otro / Necesito orientación">
                        Otro / Necesito orientación
                      </option>
                    </select>
                  </div>

                  {/* Mensaje */}

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-semibold text-white"
                    >
                      ¿Qué necesitas? *
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      maxLength={5000}
                      rows={5}
                      aria-describedby="contact-message-help"
                      className="w-full resize-y rounded-xl border border-white/20 bg-[#0B0B0D] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#FB7185] focus:ring-2 focus:ring-[#FB7185]/20"
                      placeholder="Cuéntanos la ubicación, el tipo de inmueble y el objetivo de tu proyecto..."
                    />

                    <p
                      id="contact-message-help"
                      className="mt-2 text-xs leading-6 text-zinc-400"
                    >
                      ¿Tienes planos o fotografías? Podemos
                      coordinar su envío por correo o WhatsApp.
                    </p>
                  </div>

                  {/* Empresa opcional */}

                  <details className="rounded-xl border border-white/10 bg-[#101012] p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-zinc-300">
                      Agregar empresa — opcional
                    </summary>

                    <div className="mt-4">
                      <label
                        htmlFor="contact-company"
                        className="mb-2 block text-sm font-semibold text-white"
                      >
                        Empresa
                      </label>

                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleInputChange}
                        maxLength={160}
                        className="w-full rounded-xl border border-white/20 bg-[#0B0B0D] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-[#FB7185] focus:ring-2 focus:ring-[#FB7185]/20"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </details>

                  {/* Enviar */}

                  <button
                    type="submit"
                    className="clickable-motion inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#b5121b] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#940f17] disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
                  >
                    {isSubmitting
                      ? "Enviando consulta..."
                      : "Solicitar cotización"}

                    {!isSubmitting && (
                      <ArrowRight
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </fieldset>

                {/* Estado del envío */}

                <div
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                  className={
                    statusMessage
                      ? `mt-5 rounded-xl border px-4 py-3 text-sm leading-6 ${statusType === "success"
                        ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
                        : "border-red-400/25 bg-red-400/10 text-red-200"
                      }`
                      : "sr-only"
                  }
                >
                  {statusMessage}
                </div>
              </form>
            )}
          </div>

          {/* ==========================================
        CONTACTO DIRECTO
        ========================================== */}

          <aside className="border-t border-white/10 bg-[#101012] p-6 md:p-10 lg:border-l lg:border-t-0">
            <h3 className="text-2xl font-bold text-white">
              ¿Prefieres hablar directamente?
            </h3>

            <p className="mt-4 leading-7 text-zinc-300">
              Escríbenos por WhatsApp para contarnos qué necesitas
              y compartir la información de tu proyecto.
            </p>

            {/* CTA principal de WhatsApp */}

            <div className="mt-7 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/5 p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white p-2">
                  <img
                    src={images.whatsApp}
                    alt="WhatsApp"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <p className="font-bold text-white">
                    Hablemos de tu proyecto
                  </p>

                  <p className="mt-1 text-xs leading-5 text-zinc-300">
                    Contacto directo por WhatsApp
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/526623748782?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20para%20mi%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 text-sm font-black text-[#052E16] transition hover:bg-[#4ADE80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
              >
                <img
                  src={images.whatsApp}
                  alt=""
                  className="h-10 w-10 shrink-0 object-contain"
                />


                Cotizar por WhatsApp

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </a>

              <p className="mt-3 text-xs leading-6 text-zinc-400">
                Puedes compartir ubicación, fotografías o planos
                para explicar el alcance.
              </p>
            </div>

            {/* Otros medios de contacto */}

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <Mail
                  className="mt-1 h-5 w-5 shrink-0 text-[#b5121b]"
                  aria-hidden="true"
                />

                <div className="min-w-0">
                  <p className="mb-2 text-sm font-bold text-white">
                    Correos de contacto
                  </p>

                  <a
                    href="mailto:info@asbuiltco.com"
                    className="block break-words text-sm leading-7 text-zinc-300 transition hover:text-[#FDA4AF] hover:underline"
                  >
                    info@asbuiltco.com
                  </a>

                  <a
                    href="mailto:proyectos@asbuiltco.com"
                    className="block break-words text-sm leading-7 text-zinc-300 transition hover:text-[#FDA4AF] hover:underline"
                  >
                    proyectos@asbuiltco.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  className="mt-1 h-5 w-5 shrink-0 text-[#b5121b]"
                  aria-hidden="true"
                />

                <div>
                  <p className="mb-2 text-sm font-bold text-white">
                    Teléfonos
                  </p>

                  <a
                    href="tel:+526623748782"
                    className="block text-sm leading-7 text-zinc-300 transition hover:text-[#FDA4AF] hover:underline"
                  >
                    (662) 374 8782
                  </a>

                  <a
                    href="tel:+526623673378"
                    className="block text-sm leading-7 text-zinc-300 transition hover:text-[#FDA4AF] hover:underline"
                  >
                    (662) 367 3378
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-[#b5121b]"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-sm font-bold text-white">
                    Hermosillo, Sonora
                  </p>

                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    Consulta disponibilidad para la ubicación
                    de tu proyecto en México.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      tsx
      <footer className="border-t border-zinc-200 bg-white px-6 py-12 text-zinc-900 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          {/* Logo y descripción */}

          <div>
            <img
              src={images.logo}
              alt="As-Built"
              loading="lazy"
              className="h-16 w-auto object-contain"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-600">
              Modelos As-Built precisos para arquitectura,
              ingeniería y construcción.
            </p>
          </div>

          {/* Servicios */}

          <div>
            <h3 className="font-black text-zinc-900">
              Servicios
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              {[
                "Levantamiento por nube de puntos",
                "Documentación As-Built",
                "Modelado BIM",
                "Arquitectura",
                "Diseño MEP",
                "Topografía",
                "Ortofotografía",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="transition hover:text-[#b5121b] hover:underline"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegación */}

          <div>
            <h3 className="font-black text-zinc-900">
              Explora
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              {[
                { label: "Servicios", href: "#servicios" },
                { label: "Nuestro proceso", href: "#proceso" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition hover:text-[#b5121b] hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}

          <div>
            <h3 className="font-black text-zinc-900">
              Contacto
            </h3>

            <div className="mt-4 space-y-3 text-sm text-zinc-600">
              <a
                href="mailto:info@asbuiltco.com"
                className="block transition hover:text-[#b5121b] hover:underline"
              >
                info@asbuiltco.com
              </a>

              <a
                href="mailto:proyectos@asbuiltco.com"
                className="block transition hover:text-[#b5121b] hover:underline"
              >
                proyectos@asbuiltco.com
              </a>

              <a
                href="tel:+526623748782"
                className="block transition hover:text-[#b5121b] hover:underline"
              >
                (662) 374 8782
              </a>

              <a
                href="tel:+526623673378"
                className="block transition hover:text-[#b5121b] hover:underline"
              >
                (662) 367 3378
              </a>

              <p>Hermosillo, Sonora</p>


            </div>
          </div>
        </div>

        {/* Derechos reservados */}

        <div className="mx-auto mt-10 max-w-7xl border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} As-Built. Todos los derechos
          reservados.
        </div>
      </footer>
    </main>
  );
}
