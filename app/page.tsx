"use client";

import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Cuboid,
  FileText,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

/* =========================================================
   IMÁGENES
   ========================================================= */

const images = {
  logo: "/images/logo.png",
  logo2: "/images/logo 2.png",
  heroBlueprint: "/images/asd.png",
  nube: "/images/nube.png",
  arquitectura: "/images/arquitectura.jpg",
  mep: "/images/MEP.jpg",
  topografia: "/images/topografia.jpg",
  ortofotografia: "/images/ortofotografia.jpg",
  bimBuilding: "/images/bim-building.png",
  clashResolution: "/images/clash-resolution.png",
};

/* =========================================================
   CONTROLES DE TAMAÑO

   Tarjetas normales:
   - SERVICE_CARD_WIDTH_CLASS controla el ancho.
   - SERVICE_CARD_HEIGHT_CLASS controla la altura de la imagen.

   Servicio destacado:
   - FEATURED_SECTION_WIDTH_CLASS controla el ancho total.
   - FEATURED_IMAGE_HEIGHT_CLASS controla la altura de la imagen.

   Puedes agregar cardWidthClass y cardHeightClass a cualquier
   servicio para personalizar su tamaño individualmente.
   ========================================================= */

const SERVICE_CARD_WIDTH_CLASS = "w-full max-w-[380px]";
const SERVICE_CARD_HEIGHT_CLASS = "h-[240px] md:h-[260px]";

const FEATURED_SECTION_WIDTH_CLASS = "max-w-7xl";
const FEATURED_IMAGE_HEIGHT_CLASS =
  "h-[280px] sm:h-[380px] lg:h-[520px]";

/* =========================================================
   CONTACTO
   ========================================================= */

const CONTACT = {
  email: "info@asbuiltco.com",
  projectsEmail: "proyectos@asbuiltco.com",
  phone: "(662) 374 8782",
  secondPhone: "(662) 367 3378",
  phoneHref: "tel:+526623748782",
  secondPhoneHref: "tel:+526623673378",
  whatsapp: "https://wa.me/526623748782",
  location: "Hermosillo, Sonora",
};

/* =========================================================
   SERVICIOS
   ========================================================= */

type Service = {
  title: string;
  description: string;
  idealFor: string;
  bullets: string[];
  image: string;
  cardWidthClass?: string;
  cardHeightClass?: string;
};

type ServiceGroup = {
  category: string;
  description: string;
  services: Service[];
};

const featuredService: Service = {
  title: "Levantamiento por nube de puntos",
  description:
    "Documentamos la geometría del inmueble mediante escaneo láser 3D y procesamos la información para obtener una referencia del estado existente.",
  idealFor:
    "Remodelaciones, documentación de inmuebles existentes y proyectos que necesitan una base de información para modelado.",
  bullets: [
    "Escaneo láser 3D",
    "Procesamiento de nubes de puntos",
    "Registro y alineación de escaneos",
  ],
  image: images.nube,
};

const serviceGroups: ServiceGroup[] = [
  {
    category: "BIM y documentación",
    description:
      "Convertimos la información del inmueble en modelos y documentos que apoyan el desarrollo del proyecto.",
    services: [
      {
        title: "Documentación As-Built",
        description:
          "Elaboramos planos y documentación técnica que representan las condiciones existentes del inmueble.",
        idealFor: "Remodelación, mantenimiento y gestión del inmueble.",
        bullets: [
          "Planos de estado actual",
          "Conversión y actualización CAD",
          "Documentación técnica",
        ],
        image: images.clashResolution,
      },
      {
        title: "Modelado BIM",
        description:
          "Desarrollamos modelos digitales que integran geometría e información de las disciplinas del proyecto.",
        idealFor: "Visualización, cuantificación y coordinación.",
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
      "Soluciones arquitectónicas y de instalaciones para responder a las necesidades de cada inmueble.",
    services: [
      {
        title: "Arquitectura",
        description:
          "Diseñamos espacios que integran distribución, funcionalidad y expresión arquitectónica.",
        idealFor: "Diseño de espacios y desarrollo arquitectónico.",
        bullets: [
          "Diseño y distribución de espacios",
          "Planos arquitectónicos",
          "Soluciones espaciales y constructivas",
        ],
        image: images.arquitectura,
      },
      {
        title: "Diseño MEP",
        description:
          "Desarrollamos sistemas mecánicos, eléctricos e hidrosanitarios y coordinamos su integración con el inmueble.",
        idealFor: "Diseño y coordinación de instalaciones.",
        bullets: [
          "Instalaciones mecánicas",
          "Sistemas eléctricos",
          "Sistemas hidrosanitarios y pluviales",
        ],
        image: images.mep,
      },
    ],
  },
  {
    category: "Geomática",
    description:
      "Información del terreno y del sitio para apoyar la planificación y el diseño.",
    services: [
      {
        title: "Topografía",
        description:
          "Medimos y representamos las dimensiones, elevaciones y características físicas del terreno.",
        idealFor: "Planificación, diseño y ejecución de proyectos.",
        bullets: [
          "Levantamientos topográficos",
          "Nivelación y altimetría",
          "Planos topográficos",
        ],
        image: images.topografia,
      },
      {
        title: "Ortofotografía",
        description:
          "Procesamos fotografías aéreas para generar imágenes georreferenciadas y corregidas geométricamente.",
        idealFor: "Análisis de terrenos y documentación del sitio.",
        bullets: [
          "Captura aérea mediante drones",
          "Procesamiento fotogramétrico",
        ],
        image: images.ortofotografia,
      },
    ],
  },
];

const projectTypes = [
  featuredService.title,
  ...serviceGroups.flatMap((group) =>
    group.services.map((service) => service.title)
  ),
  "Otro / Necesito orientación",
];

/* =========================================================
   MUESTRAS VISUALES

   Estas tarjetas NO se presentan como proyectos ejecutados.

   Sustitúyelas por casos reales cuando tengas:
   - Nombre autorizado del proyecto.
   - Ubicación.
   - Alcance.
   - Entregables.
   - Fotografías autorizadas.
   ========================================================= */

const visualExamples = [
  {
    title: "Información del inmueble existente",
    category: "Nube de puntos",
    description:
      "Referencia visual del tipo de información utilizada para documentar la geometría de un inmueble.",
    image: images.nube,
    service: featuredService.title,
  },
  {
    title: "Representación digital del proyecto",
    category: "Modelado BIM",
    description:
      "Referencia visual de un modelo digital para comunicar la geometría y organización del proyecto.",
    image: images.bimBuilding,
    service: "Modelado BIM",
  },
  {
    title: "Desarrollo arquitectónico",
    category: "Arquitectura",
    description:
      "Referencia visual para mostrar la representación y comunicación de una propuesta arquitectónica.",
    image: images.arquitectura,
    service: "Arquitectura",
  },
];

/* =========================================================
   PROCESO
   ========================================================= */

type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const process: ProcessStep[] = [
  {
    icon: ClipboardList,
    title: "Revisamos tu necesidad",
    description:
      "Nos compartes la ubicación, el objetivo y la información disponible de tu proyecto.",
  },
  {
    icon: Layers3,
    title: "Definimos el alcance",
    description:
      "Acordamos el servicio, los entregables y la información necesaria para preparar la cotización.",
  },
  {
    icon: Cuboid,
    title: "Desarrollamos el trabajo",
    description:
      "Ejecutamos el levantamiento, diseño o modelado según el alcance contratado.",
  },
  {
    icon: CheckCircle2,
    title: "Entregamos y revisamos",
    description:
      "Compartimos los archivos acordados y revisamos contigo los resultados del servicio.",
  },
];

/* =========================================================
   PREGUNTAS FRECUENTES
   ========================================================= */

const faqs = [
  {
    question: "¿Qué necesito enviar para solicitar una cotización?",
    answer:
      "Comparte la ubicación, el tipo de inmueble, una superficie aproximada si la conoces y una descripción de lo que necesitas. Si tienes planos o fotografías, podemos coordinar su envío por correo o WhatsApp.",
  },
  {
    question: "¿Puedo contactarlos si no sé qué servicio necesito?",
    answer:
      "Sí. Cuéntanos el objetivo de tu proyecto y la información que tienes disponible para revisar qué servicio puede ajustarse a tu necesidad.",
  },
  {
    question: "¿En qué formatos se entregan los archivos?",
    answer:
      "Los formatos se definen durante la cotización de acuerdo con el servicio, el alcance y las herramientas que utiliza tu equipo.",
  },
  {
    question: "¿Atienden proyectos fuera de Hermosillo?",
    answer:
      "Puedes consultarnos por proyectos en México. La disponibilidad, los traslados y las necesidades de trabajo en sitio se revisan para cada ubicación.",
  },
];

/* =========================================================
   COMPONENTES REUTILIZABLES
   ========================================================= */

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FB7185]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#F4F4F5] md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-[#C4C4CC] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

const PRIMARY_BUTTON_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-[#b5121b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#940f17] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FB7185]";

const SECONDARY_BUTTON_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#1C1C20] px-6 py-3.5 text-sm font-bold text-[#F4F4F5] transition hover:border-white/40 hover:bg-[#252529] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FB7185]";

const INPUT_CLASS =
  "w-full rounded-xl border border-white/20 bg-[#0B0B0D] px-4 py-3 text-[#F4F4F5] outline-none transition placeholder:text-zinc-500 focus:border-[#FB7185] focus:ring-2 focus:ring-[#FB7185]/20";

/* =========================================================
   PÁGINA
   ========================================================= */

export default function AsBuiltHomepageRedesign() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [statusType, setStatusType] = useState<
    "success" | "error"
  >("success");

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const selectService = (serviceTitle: string) => {
    setFormData((current) => ({
      ...current,
      projectType: serviceTitle,
    }));

    setStatusMessage("");
    setMenuOpen(false);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

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
        throw new Error(
          result?.error || "No se pudo enviar el mensaje."
        );
      }

      setStatusType("success");
      setStatusMessage(
        "¡Gracias! Recibimos tu consulta. Nos pondremos en contacto contigo para revisar los siguientes pasos."
      );

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch {
      setStatusType("error");
      setStatusMessage(
        "No pudimos enviar el mensaje. Intenta nuevamente o contáctanos por WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigation = [
    { label: "Muestras", href: "#muestras" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <main
      id="inicio"
      className="min-h-screen bg-[#0B0B0D] text-[#F4F4F5]"
    >
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        section[id] {
          scroll-margin-top: 110px;
        }

        input,
        textarea,
        select {
          color-scheme: dark;
        }

        ::selection {
          background: #b5121b;
          color: #ffffff;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>

      {/* ENLACE PARA NAVEGACIÓN CON TECLADO */}

      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#1C1C20] focus:p-4 focus:text-white"
      >
        Saltar al contenido
      </a>

      {/* HEADER */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#141416]/95 backdrop-blur-lg">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8"
        >
          <a
            href="#inicio"
            aria-label="As-Built: inicio"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={images.logo2}
              alt="As-Built"
              className="h-12 w-auto object-contain md:h-14"
            />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[#C4C4CC] transition hover:text-[#FDA4AF]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className={`${PRIMARY_BUTTON_CLASS} hidden lg:inline-flex`}
          >
            Cotizar proyecto
            <ArrowRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="rounded-lg border border-white/20 bg-[#1C1C20] p-2.5 text-white transition hover:bg-[#252529] lg:hidden"
          >
            {menuOpen ? (
              <X
                className="h-6 w-6"
                aria-hidden="true"
              />
            ) : (
              <Menu
                className="h-6 w-6"
                aria-hidden="true"
              />
            )}
          </button>
        </nav>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/10 bg-[#141416] px-6 py-5 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 font-semibold text-[#D4D4D8] transition hover:bg-[#252529] hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className={`${PRIMARY_BUTTON_CLASS} mt-3`}
              >
                Cotizar proyecto
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}

      <section
        id="contenido"
        className="relative overflow-hidden border-b border-white/10 bg-[#0B0B0D]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(181,18,27,0.10),transparent_55%)]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#FB7185]">
              Arquitectura · BIM · Documentación As-Built
            </p>

            <h1 className="max-w-3xl text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-[#F4F4F5]">
              Del inmueble existente a{" "}
              <span className="text-[#FB7185]">
                modelos y planos
              </span>{" "}
              para tu proyecto.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#C4C4CC]">
              Levantamiento 3D, modelado BIM y documentación
              técnica para despachos de arquitectura,
              constructoras y propietarios.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className={PRIMARY_BUTTON_CLASS}
              >
                Solicitar cotización
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="mt-8 flex items-start gap-2 text-sm text-[#C4C4CC]">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-[#FB7185]"
                aria-hidden="true"
              />
              <span>
                Desde Hermosillo, Sonora. Consulta cobertura
                para tu proyecto en México.
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#1C1C20]">
              <img
                src={images.heroBlueprint}
                alt="Representación técnica de un modelo arquitectónico"
                className="h-[300px] w-full object-contain p-6 sm:h-[420px] lg:h-[500px]"
              />
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/10 bg-[#141416] p-4">
              <FileText
                className="mt-0.5 h-5 w-5 shrink-0 text-[#FB7185]"
                aria-hidden="true"
              />
              <p className="text-sm leading-6 text-[#C4C4CC]">
                El alcance, los formatos y los entregables
                se definen de acuerdo con las necesidades
                de tu equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA DE TRABAJO */}

      <section className="border-b border-white/10 bg-[#141416]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-3 lg:px-8">
          {[
            {
              icon: ClipboardList,
              title: "Alcance definido",
              text: "Acordamos qué necesita tu proyecto.",
            },
            {
              icon: Layers3,
              title: "Información organizada",
              text: "Modelos y documentación según el servicio.",
            },
            {
              icon: MessageCircle,
              title: "Contacto directo",
              text: "Consulta por formulario, correo o WhatsApp.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex items-start gap-4"
            >
              <div className="rounded-xl border border-white/10 bg-[#1C1C20] p-3">
                <Icon
                  className="h-5 w-5 text-[#FB7185]"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2 className="font-bold text-[#F4F4F5]">
                  {title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#C4C4CC]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MUESTRAS VISUALES */}

      

      {/* SERVICIO DESTACADO */}

      <section
        id="levantamiento"
        className="border-y border-white/10 bg-[#101012] px-6 py-20 lg:px-8"
      >
        <div
          className={`mx-auto grid ${FEATURED_SECTION_WIDTH_CLASS} items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]`}
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#1C1C20]">
            <img
              src={featuredService.image}
              alt="Visualización de una nube de puntos de un inmueble"
              loading="lazy"
              className={`${FEATURED_IMAGE_HEIGHT_CLASS} w-full object-cover`}
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FB7185]">
              Servicio destacado
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#F4F4F5] md:text-4xl">
              {featuredService.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#C4C4CC]">
              {featuredService.description}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#1C1C20] p-5">
              <p className="text-sm font-bold text-[#F4F4F5]">
                ¿Para qué puede servirte?
              </p>
              <p className="mt-2 text-sm leading-6 text-[#C4C4CC]">
                {featuredService.idealFor}
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {featuredService.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm text-[#D4D4D8]"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-[#FB7185]"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              onClick={() =>
                selectService(featuredService.title)
              }
              className={`${PRIMARY_BUTTON_CLASS} mt-8`}
            >
              Cotizar levantamiento
              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE SERVICIOS */}

      <section
        id="servicios"
        className="bg-[#0B0B0D] px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Servicios"
            title="Apoyo técnico para cada etapa del proyecto"
            description="Selecciona el servicio que necesitas o cuéntanos tu objetivo para revisar juntos el alcance."
          />

          <div className="space-y-14">
            {serviceGroups.map((group) => (
              <section key={group.category}>
                <div className="mb-7 border-b border-white/10 pb-5">
                  <h3 className="text-2xl font-bold text-[#F4F4F5]">
                    {group.category}
                  </h3>

                  <p className="mt-2 max-w-3xl leading-7 text-[#C4C4CC]">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  {group.services.map((service) => (
                    <article
                      key={service.title}
                      className={`flex ${
                        service.cardWidthClass ??
                        SERVICE_CARD_WIDTH_CLASS
                      } flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141416] transition-colors duration-200 hover:border-white/25`}
                    >
                      <img
                        src={service.image}
                        alt={`Referencia visual de ${service.title}`}
                        loading="lazy"
                        className={`${
                          service.cardHeightClass ??
                          SERVICE_CARD_HEIGHT_CLASS
                        } w-full object-cover`}
                      />

                      <div className="flex flex-1 flex-col p-6">
                        <h4 className="text-xl font-bold text-[#F4F4F5]">
                          {service.title}
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-[#C4C4CC]">
                          {service.description}
                        </p>

                        <div className="mt-4">
                          <p className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
                            Ideal para
                          </p>

                          <p className="mt-1 text-sm leading-6 text-[#D4D4D8]">
                            {service.idealFor}
                          </p>
                        </div>

                        <ul className="mt-5 space-y-2">
                          {service.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-2 text-sm leading-6 text-[#C4C4CC]"
                            >
                              <CheckCircle2
                                className="mt-1 h-4 w-4 shrink-0 text-[#FB7185]"
                                aria-hidden="true"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto pt-6">
                          <a
                            href="#contacto"
                            onClick={() =>
                              selectService(service.title)
                            }
                            aria-label={`Consultar el servicio de ${service.title}`}
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#FB7185] transition hover:text-[#FDA4AF] hover:underline"
                          >
                            Consultar este servicio
                            <ArrowRight
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}

      <section
        id="proceso"
        className="border-y border-white/10 bg-[#101012] px-6 py-20 text-white lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FB7185]">
              Proceso
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#F4F4F5] md:text-4xl">
              Desde la primera consulta hasta la entrega
            </h2>

            <p className="mt-4 leading-7 text-[#C4C4CC]">
              Un alcance claro permite organizar el trabajo
              y definir qué información recibirá tu equipo.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-[#1C1C20] p-6 transition-colors hover:border-white/25"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="rounded-xl border border-white/10 bg-[#141416] p-3">
                      <Icon
                        className="h-6 w-6 text-[#FB7185]"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-sm font-bold text-[#A1A1AA]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F4F4F5]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#C4C4CC]">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contacto"
              className={PRIMARY_BUTTON_CLASS}
            >
              Cuéntanos sobre tu proyecto
              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}

      <section className="bg-[#0B0B0D] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Antes de comenzar"
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-[#141416] p-5 transition-colors open:border-white/25"
              >
                <summary className="cursor-pointer font-bold leading-6 text-[#F4F4F5]">
                  {faq.question}
                </summary>

                <p className="mt-4 text-sm leading-7 text-[#C4C4CC]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}

      <section
        id="contacto"
        className="bg-[#0B0B0D] px-6 py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#141416] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-6 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FB7185]">
              Contacto
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#F4F4F5] md:text-4xl">
              Cuéntanos qué necesita tu proyecto
            </h2>

            <p className="mt-4 leading-7 text-[#C4C4CC]">
              Comparte una breve descripción y te indicaremos
              la información necesaria para preparar una
              cotización.
            </p>

            <p className="mt-3 text-sm text-[#A1A1AA]">
              Los campos marcados con * son obligatorios.
            </p>

            <form
              onSubmit={handleSubmit}
              aria-busy={isSubmitting}
              className="mt-8"
            >
              <fieldset
                disabled={isSubmitting}
                className="grid gap-5 disabled:opacity-70"
              >
                <legend className="sr-only">
                  Datos de contacto y del proyecto
                </legend>

                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-[#F4F4F5]"
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
                    className={INPUT_CLASS}
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-[#F4F4F5]"
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
                      className={INPUT_CLASS}
                      placeholder="nombre@empresa.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm font-semibold text-[#F4F4F5]"
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
                      className={INPUT_CLASS}
                      placeholder="Tu número de contacto"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="mb-2 block text-sm font-semibold text-[#F4F4F5]"
                  >
                    Servicio de interés *
                  </label>

                  <select
                    id="contact-service"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className={INPUT_CLASS}
                  >
                    <option value="">
                      Selecciona un servicio
                    </option>

                    {projectTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-[#F4F4F5]"
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
                    aria-describedby="message-help"
                    className={`${INPUT_CLASS} resize-y`}
                    placeholder="Ubicación, tipo de inmueble y objetivo del proyecto..."
                  />

                  <p
                    id="message-help"
                    className="mt-2 text-xs leading-5 text-[#A1A1AA]"
                  >
                    Si tienes planos o fotografías, podemos
                    coordinar su envío por correo o WhatsApp.
                  </p>
                </div>

                <details className="rounded-xl border border-white/10 bg-[#101012] p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-[#C4C4CC]">
                    Agregar empresa — opcional
                  </summary>

                  <div className="mt-4">
                    <label
                      htmlFor="contact-company"
                      className="mb-2 block text-sm font-semibold text-[#F4F4F5]"
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
                      className={INPUT_CLASS}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </details>

                <button
                  type="submit"
                  className={`${PRIMARY_BUTTON_CLASS} w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit`}
                >
                  {isSubmitting
                    ? "Enviando consulta..."
                    : "Enviar consulta"}

                  {!isSubmitting && (
                    <ArrowRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </fieldset>

              <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className={
                  statusMessage
                    ? `mt-5 rounded-xl border px-4 py-3 text-sm leading-6 ${
                        statusType === "success"
                          ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
                          : "border-red-400/25 bg-red-400/10 text-red-200"
                      }`
                    : "sr-only"
                }
              >
                {statusMessage}
              </div>
            </form>
          </div>

          <aside className="border-t border-white/10 bg-[#101012] p-6 md:p-10 lg:border-l lg:border-t-0">
            <h3 className="text-2xl font-bold text-[#F4F4F5]">
              También podemos hablar directamente
            </h3>

            <p className="mt-4 leading-7 text-[#C4C4CC]">
              Si prefieres explicar tu proyecto por mensaje,
              escríbenos por WhatsApp o correo.
            </p>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`${PRIMARY_BUTTON_CLASS} mt-6 w-full`}
            >
              <MessageCircle
                className="h-5 w-5"
                aria-hidden="true"
              />
              Contactar por WhatsApp
            </a>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <Mail
                  className="mt-1 h-5 w-5 shrink-0 text-[#FB7185]"
                  aria-hidden="true"
                />

                <div className="min-w-0">
                  <p className="mb-2 text-sm font-bold text-[#F4F4F5]">
                    Correos de contacto
                  </p>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="block break-words text-sm leading-7 text-[#C4C4CC] transition hover:text-[#FDA4AF] hover:underline"
                  >
                    {CONTACT.email}
                  </a>

                  <a
                    href={`mailto:${CONTACT.projectsEmail}`}
                    className="block break-words text-sm leading-7 text-[#C4C4CC] transition hover:text-[#FDA4AF] hover:underline"
                  >
                    {CONTACT.projectsEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  className="mt-1 h-5 w-5 shrink-0 text-[#FB7185]"
                  aria-hidden="true"
                />

                <div>
                  <p className="mb-2 text-sm font-bold text-[#F4F4F5]">
                    Teléfonos
                  </p>

                  <a
                    href={CONTACT.phoneHref}
                    className="block text-sm leading-7 text-[#C4C4CC] transition hover:text-[#FDA4AF] hover:underline"
                  >
                    {CONTACT.phone}
                  </a>

                  <a
                    href={CONTACT.secondPhoneHref}
                    className="block text-sm leading-7 text-[#C4C4CC] transition hover:text-[#FDA4AF] hover:underline"
                  >
                    {CONTACT.secondPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-[#FB7185]"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-sm font-bold text-[#F4F4F5]">
                    {CONTACT.location}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#C4C4CC]">
                    Consulta disponibilidad para la ubicación
                    de tu proyecto.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#08080A] px-6 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <img
              src={images.logo2}
              alt="As-Built"
              loading="lazy"
              className="h-14 w-auto object-contain"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#C4C4CC]">
              Arquitectura, levantamiento 3D, modelado BIM y
              documentación técnica para tu proyecto.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-[#F4F4F5]">
              Explora
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-[#C4C4CC]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition hover:text-white hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[#F4F4F5]">
              Contacto
            </h2>

            <div className="mt-4 space-y-3 text-sm text-[#C4C4CC]">
              <a
                href={`mailto:${CONTACT.email}`}
                className="block transition hover:text-white hover:underline"
              >
                {CONTACT.email}
              </a>

              <a
                href={CONTACT.phoneHref}
                className="block transition hover:text-white hover:underline"
              >
                {CONTACT.phone}
              </a>

              <p>{CONTACT.location}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-[#A1A1AA]">
          © {new Date().getFullYear()} As-Built. Todos los
          derechos reservados.
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}

      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversación con As-Built en WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#166534] text-white shadow-lg transition hover:bg-[#14532d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 md:bottom-6 md:right-6"
      >
        <MessageCircle
          className="h-7 w-7"
          aria-hidden="true"
        />
      </a>
    </main>
  );
}