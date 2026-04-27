'use client';
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Box,
  Building2,
  CheckCircle2,
  ClipboardList,
  Cuboid,
  FileText,
  FileTextIcon,
  Layers3,
  Mail,
  MapPin,
  Clock3,
  Menu,
  Phone,
  Target,
  UsersRound,
} from "lucide-react";

const base44Images = {
  hero:
    "https://media.base44.com/images/public/698a3c580c288f79d8b0a371/bcf47d566_ChatGPTImageMar26202601_54_57AM.png",
  // Place the transparent Consulate PNG in your Next.js public folder as:
  // public/consulate-transparent.png
  bimBuildingTransparent: "/images/consulate-transparent.png",
  ortofoto:
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/a552e7eda_image.png",
  ortofotoProcessing:
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/577877c01_image.png",
  ortofotoAnalysis:
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/a2f947c70_image.png",
  bimBuilding:
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/9c80ff914_image.png",
  clashGeneral:
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/326c952fb_image.png",
  clashAnalysis:
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/418a36d5e_image.png",
  clashResolution:
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/8de53340b_image.png",
};

const serviceGroups = [
  {
    category: "Diseño",
    description:
      "Servicios enfocados en crear, desarrollar y definir el inmueble desde su concepto inicial hasta una propuesta arquitectónica clara.",
    services: [
      {
        icon: Building2,
        title: "Diseño de Inmueble",
        bullets: [
          "Conceptualización del espacio",
          "Distribución funcional",
          "Propuesta integral del inmueble",
        ],
        image: base44Images.hero,
      },
      {
        icon: Layers3,
        title: "Diseño Arquitectónico",
        bullets: [
          "Anteproyecto arquitectónico",
          "Desarrollo de planos",
          "Criterios estéticos y funcionales",
        ],
        image: base44Images.bimBuilding,
      },
    ],
  },
  {
    category: "Modelado BIM",
    description:
      "Modelos digitales precisos para visualizar, cuantificar, coordinar y documentar el proyecto con información confiable.",
    services: [
      {
        icon: Box,
        title: "Modelado BIM y 3D",
        bullets: ["Arquitectura, estructura y MEP", "Cuantificación", "Visualización"],
        image: base44Images.bimBuilding,
      },
      {
        icon: Cuboid,
        title: "Modelado de Disciplinas",
        bullets: ["Arquitectura", "Estructura", "Instalaciones MEP"],
        image: base44Images.clashGeneral,
      },
    ],
  },
  {
    category: "Coordinación y Documentación",
    description:
      "Procesos técnicos para validar condiciones existentes, detectar interferencias y generar entregables útiles para obra y operación.",
    services: [
      {
        icon: Building2,
        title: "Levantamiento por nube de puntos",
        bullets: ["Escaneo láser 3D", "Procesamiento", "Registro y alineación"],
        image: base44Images.ortofoto,
      },
      {
        icon: UsersRound,
        title: "Coordinación de Ingeniería",
        bullets: [
          "Integración de disciplinas",
          "Revisión de interferencias",
          "Optimización de soluciones técnicas",
        ],
        image: base44Images.clashAnalysis,
      },
      {
        icon: FileText,
        title: "Documentación As-Built",
        bullets: ["Planos", "Conversión CAD", "Informes de calidad"],
        image: base44Images.clashResolution,
      },
    ],
  },
];

const process = [
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

const tools = ["Revit", "Navisworks", "BIM 360", "AutoCAD MEP", "Recap", "CAD/BIM"];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-500" />
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
  const [statusType, setStatusType] = useState("success");

  useEffect(() => {
    const lastSubmit = localStorage.getItem("asbuilt_form_submitted");
    const today = new Date().toDateString();

    if (lastSubmit === today) {
      setAlreadySubmitted(true);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
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
    <main className="min-h-screen scroll-smooth bg-white text-slate-950">
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

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3 text-white">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10">
              <Box className="h-6 w-6 text-cyan-400" />
            </div>
            <span className="text-2xl font-black tracking-tight">As-Built</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
            <a href="#servicios" className="transition hover:text-cyan-300">
              Servicios
            </a>
            <a href="#proceso" className="transition hover:text-cyan-300">
              Proceso
            </a>
            <a href="#contacto" className="transition hover:text-cyan-300">
              Contacto
            </a>
          </div>

          <a
            href="#contacto"
            className="clickable-motion hidden rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 md:inline-flex"
          >
            Cotizar
          </a>

          <button
            className="rounded-xl border border-white/10 p-2 text-white md:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <section className="relative min-h-[760px] overflow-hidden bg-[#031a3d] lg:min-h-[820px]">
        {/* Deep architectural blue background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(14,165,233,0.34),transparent_30%),radial-gradient(circle_at_22%_18%,rgba(6,182,212,0.14),transparent_25%),linear-gradient(135deg,#020817_0%,#031a3d_45%,#062f63_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,8,23,0.96)_0%,rgba(2,8,23,0.86)_34%,rgba(2,8,23,0.38)_58%,rgba(2,8,23,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,8,23,0.38)_82%)]" />

        {/* Right-side transparent BIM model */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] flex w-full items-center justify-end overflow-hidden lg:w-[67%]">
          <div className="relative mr-[-9vw] mt-10 w-[1080px] max-w-[86vw] lg:mr-[-4vw] xl:mr-[-2vw]">
            <div className="absolute bottom-[6%] left-[10%] h-32 w-[76%] rounded-full bg-cyan-400/24 blur-3xl" />
            <div className="absolute bottom-[2%] left-[14%] h-20 w-[70%] rounded-full bg-black/45 blur-2xl" />
            <img
              src={base44Images.bimBuildingTransparent}
              alt="Modelo BIM del Consulado Americano Hermosillo"
              className="relative z-10 h-auto w-full object-contain drop-shadow-[0_36px_40px_rgba(0,0,0,0.42)]"
            />
          </div>
        </div>

        {/* Mobile image fade control */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-slate-950/10 via-slate-950/10 to-slate-950/35 lg:hidden" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24 lg:min-h-[820px] lg:px-8">
          <div className="max-w-[660px] pt-10">
            <div className="mb-16 hidden items-center gap-4 text-white lg:flex">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/30 bg-white/5 shadow-lg shadow-cyan-950/40 backdrop-blur">
                <Box className="h-7 w-7 text-cyan-300" />
              </div>
              <div>
                <p className="text-xl font-black uppercase tracking-[0.22em]">As-Built</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                  BIM & Digital Solutions
                </p>
              </div>
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[5.65rem]">
              Modelos <span className="bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent">As-Built</span> precisos para arquitectura, ingeniería y construcción
            </h1>

            <div className="mt-8 h-1 w-20 rounded-full bg-cyan-400" />

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">
              Transformamos levantamientos, nubes de puntos y documentación existente en modelos BIM y entregables técnicos listos para coordinación, obra y toma de decisiones.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="clickable-motion inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-600 px-7 py-4 text-center font-black text-white shadow-2xl shadow-cyan-500/25 hover:from-cyan-300 hover:to-sky-500"
              >
                <FileTextIcon className="h-5 w-5" />
                Solicitar cotización
              </a>

              <a
                href="#servicios"
                className="clickable-motion inline-flex items-center justify-center gap-8 rounded-xl border border-white/25 bg-slate-950/20 px-7 py-4 text-center font-black text-white backdrop-blur hover:border-cyan-300 hover:bg-white/5"
              >
                Ver servicios
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-14 grid gap-5 text-white sm:grid-cols-3">
              {[
                [Target, "Precisión técnica"],
                [Cuboid, "Flujo BIM profesional"],
                [MapPin, "Cobertura en México"],
              ].map(([Icon, label], index) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 ${index > 0 ? "sm:border-l sm:border-white/20 sm:pl-6" : ""}`}
                >
                  <Icon className="h-7 w-7 shrink-0 text-cyan-300" />
                  <span className="text-sm font-semibold text-slate-100 lg:text-base">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-7 md:grid-cols-4 lg:px-8">
          {[
            [CheckCircle2, "Precisión técnica"],
            [Cuboid, "Flujo BIM profesional"],
            [Clock3, "Respuesta en 24h"],
            [MapPin, "Cobertura en México"],
          ].map(([Icon, label]) => (
            <div
              key={label}
              className="flex items-center gap-3 border-slate-200 md:border-r md:last:border-r-0"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cyan-50 text-cyan-600">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-bold text-slate-800">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="servicios" className="scroll-reveal bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Servicios"
            title="Del diseño conceptual a la documentación técnica final"
            description="Desarrollamos soluciones de diseño, modelado BIM, coordinación de ingeniería y documentación As-Built para convertir cada etapa del proyecto en información clara, precisa y útil para tomar decisiones."
          />

          <div className="space-y-12">
            {serviceGroups.map((group) => (
              <section
                key={group.category}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="mb-7 max-w-3xl">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-500">
                    {group.category}
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {group.description}
                  </p>
                </div>

                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                  {group.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <article
                        key={service.title}
                        className="scroll-reveal group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={service.image}
                            alt=""
                            className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/45 to-transparent" />
                          <div className="absolute bottom-4 left-5 grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-cyan-300 shadow-lg">
                            <Icon className="h-7 w-7" />
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-black text-slate-950">
                            {service.title}
                          </h3>
                          <ul className="mt-5 space-y-3 text-sm font-medium text-slate-600">
                            {service.bullets.map((bullet) => (
                              <li key={bullet} className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="scroll-reveal bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Proceso" title="Nuestro proceso" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-50 text-cyan-600">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-4xl font-black text-slate-100">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="scroll-reveal bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Software" title="Herramientas que usamos" />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {tools.map((tool) => (
              <div
                key={tool}
                className="rounded-2xl border border-cyan-200 bg-white px-5 py-4 text-center font-black text-slate-800 shadow-sm"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-reveal bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              Contacto
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Comencemos tu proyecto
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Envíanos planos, ubicación o una breve descripción del alcance. Te responderemos con los siguientes pasos.
            </p>

            {alreadySubmitted ? (
              <div className="mt-8 rounded-3xl border border-cyan-300/40 bg-cyan-50 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-cyan-600" />
                <h3 className="mt-4 text-xl font-black text-slate-950">¡Mensaje enviado!</h3>
                <p className="mt-2 text-slate-600">
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
                    className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Nombre completo"
                  />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Correo electrónico"
                  />
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Empresa"
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Teléfono"
                  />
                </div>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="rounded-xl border border-slate-200 px-4 py-3 text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
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
                  className="min-h-36 rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  placeholder="Detalles del proyecto"
                />

                {statusMessage ? (
                  <p
                    className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                      statusType === "success"
                        ? "bg-cyan-50 text-cyan-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {statusMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="clickable-motion w-full rounded-xl bg-slate-950 px-7 py-4 font-bold text-white shadow-lg hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </div>

          <aside className="relative overflow-hidden bg-slate-950 p-8 text-white md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.25),transparent_35%)]" />
            <div className="relative flex h-full flex-col justify-center gap-8">
              <div className="flex gap-4">
                <Mail className="h-7 w-7 text-cyan-300" />
                <div>
                  <p className="font-black">info@asbuiltco.com</p>
                  <p className="mt-1 text-sm text-slate-300">Correo de contacto</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-7 w-7 text-cyan-300" />
                <div>
                  <p className="font-black">+52 (662) 181-8698</p>
                  <p className="mt-1 text-sm text-slate-300">Teléfono / WhatsApp</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="h-7 w-7 text-cyan-300" />
                <div>
                  <p className="font-black">Hermosillo, Sonora</p>
                  <p className="mt-1 text-sm text-slate-300">Cobertura para proyectos en México</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Box className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-black">As-Built</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Modelos As-Built precisos para arquitectura, ingeniería y construcción.
            </p>
          </div>

          {[
            [
              "Servicios",
              [
                "Diseño de Inmueble",
                "Diseño Arquitectónico",
                "Modelado BIM y 3D",
                "Modelado de Disciplinas",
                "Levantamiento 3D",
                "Coordinación de Ingeniería",
                "Documentación As-Built",
              ],
            ],
            ["Nosotros", ["Quiénes somos", "Nuestro enfoque", "Clientes"]],
            ["Contacto", ["info@asbuiltco.com", "+52 (662) 181-8698", "Hermosillo, Sonora"]],
          ].map(([title, links]) => (
            <div key={title}>
              <h3 className="font-black">{title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 As-Built. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
