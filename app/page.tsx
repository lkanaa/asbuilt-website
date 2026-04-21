'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Box, 
  Scan, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin,
  ChevronDown
} from 'lucide-react';
import { toast } from 'sonner';
import ProjectCard from '@/components/ProjectCard';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  React.useEffect(() => {
    const lastSubmit = localStorage.getItem('asbuilt_form_submitted');

    if (!lastSubmit) return;

    const today = new Date().toDateString();

    if (lastSubmit === today) {
      setAlreadySubmitted(true);
    }
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const today = new Date().toDateString();
  const lastSubmit = localStorage.getItem('asbuilt_form_submitted');

  if (lastSubmit === today) {
    toast.error('Ya enviaste un mensaje hoy. Por favor espera hasta mañana.');
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Error sending message');
    }

    localStorage.setItem('asbuilt_form_submitted', today);
    setAlreadySubmitted(true);
    toast.success('¡Gracias! Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  } catch (error) {
    toast.error('Hubo un error al enviar el mensaje. Intenta de nuevo.');
  } finally {
    setIsSubmitting(false);
  }
};

  const services = [
    {
      icon: Scan,
      title: 'Levantamiento por Nube de Puntos',
      description: 'Captura de alta precisión con equipo FARO Focus S, obteniendo millones de puntos de datos con exactitud milimétrica para documentar condiciones existentes.',
      features: ['Escaneo Láser 3D', 'Procesamiento de Nube de Puntos', 'Registro y Alineación', 'Exportación a Múltiples Formatos']
    },
    {
      icon: Box,
      title: 'Modelado 3D',
      description: 'Creación de modelos tridimensionales precisos a partir de datos de escaneo, transformando la realidad en información digital utilizable.',
      features: ['Modelado BIM', 'Detección de Conflictos', 'Cuantificación', 'Visualización 3D']
    },
    {
      icon: FileText,
      title: 'Documentación',
      description: 'Documentación as-built detallada y planos de construcción que brindan claridad y precisión durante todo el ciclo de vida de tu proyecto.',
      features: ['Planos As-Built', 'Conversión CAD', 'Documentación de Registro', 'Informes de Calidad']
    }
  ];

  const additionalServices = [
    { title: 'Diseño de Inmueble', description: 'Diseño interior y distribución de espacios optimizada' },
    { title: 'Diseño Arquitectónico', description: 'Proyectos arquitectónicos completos y detallados' },
    { title: 'Coordinación de Ingeniería', description: 'Gestión integral de disciplinas de ingeniería' },
    { title: 'Modelado de Disciplinas', description: 'Modelado especializado por cada disciplina técnica' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Ortofotometría',
      description: 'Captura y procesamiento de datos para crear mapas ortofotográficos de alta precisión, utilizando tecnología avanzada de escaneo y fotogrametría para documentación territorial y análisis de superficie.',
      services: [],
      technologies: [],
      images: [
        { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/a552e7eda_image.png', alt: 'Ortofotometría - Vista aérea' },
        { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/577877c01_image.png', alt: 'Ortofotometría - Procesamiento' },
        { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/a2f947c70_image.png', alt: 'Ortofotometría - Análisis' }
      ],
      features: [
        'Captura de datos de alta precisión',
        'Procesamiento de imágenes ortofotográficas',
        'Documentación territorial detallada'
      ]
    },
    {
      id: 2,
      title: 'Modelado de Edificios con Diferentes Ingenierías',
      description: 'Desarrollo de modelos BIM integrados que consolidan arquitectura, estructura, instalaciones mecánicas, eléctricas, hidráulicas y especiales en un entorno digital unificado, permitiendo la coordinación eficiente entre disciplinas, detección temprana de interferencias y una gestión precisa del proyecto a lo largo de todo su ciclo de vida.',
      services: ['BIM'],
      technologies: ['BIM 360', 'Navisworks', 'Coordinación Multidisciplinaria', 'Clash Detection'],
      images: [
        { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/9c80ff914_image.png', alt: 'Consulado Americano Hermosillo' }
      ],
      features: [
        'Coordinación BIM de múltiples disciplinas',
        'Detección y resolución de conflictos',
        'Documentación ejecutiva del proyecto',
        'Gestión de equipos técnicos'
      ]
    },
    {
      id: 3,
      title: 'Detección de Colisión de Ingenierías',
      description: 'Análisis exhaustivo de interferencias y colisiones entre los modelos de distintas disciplinas de ingeniería —estructural, mecánica, eléctrica, plomería y especiales— mediante herramientas de clash detection en entorno BIM. Este proceso identifica y resuelve conflictos virtuales antes de la construcción, evitando costosos retrabajos en obra y garantizando una ejecución ordenada y sin imprevistos.',
      services: ['BIM'],
      technologies: ['AutoCAD MEP', 'Revit MEP', 'Coordinación de Instalaciones'],
      images: [
        { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/326c952fb_image.png', alt: 'Detección de Colisión - Vista general' },
        { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/418a36d5e_image.png', alt: 'Detección de Colisión - Análisis de interferencias' },
        { url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698a3c580c288f79d8b0a371/8de53340b_image.png', alt: 'Detección de Colisión - Resolución de conflictos' }
      ],
      features: [
        'Identificación de interferencias entre disciplinas',
        'Resolución virtual de conflictos antes de obra',
        'Coordinación de instalaciones MEP y estructura',
        'Reducción de retrabajos y costos en construcción'
      ]
    },
  ];



  return (
    <div className="min-h-screen text-white overflow-x-hidden relative" style={{ background: 'linear-gradient(to right, #000000 0%, #0a0a0a 8%, #050505 20%, #050505 80%, #0a0a0a 92%, #000000 100%)' }}>
      {/* Global topo pattern overlay */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        backgroundImage: `url('https://media.base44.com/images/public/698a3c580c288f79d8b0a371/c737e86a2_45ed6c1879d0c6dd328c725b5bd63226.png')`,
        backgroundSize: '350px 350px',
        backgroundRepeat: 'repeat',
        opacity: 0.08
      }} />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-400 rounded-lg flex items-center justify-center">
              <Box className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight">As-Built</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <a 
              href="#services" 
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-sm text-gray-400 hover:text-orange-400 transition-all duration-300 relative group"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="#portfolio" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-sm text-gray-400 hover:text-orange-400 transition-all duration-300 relative group"
            >
              Portafolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-sm text-gray-400 hover:text-orange-400 transition-all duration-300 relative group"
            >
              Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-sm text-gray-400 hover:text-orange-400 transition-all duration-300 relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Button 
                            onClick={scrollToContact}
                            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
                          >
                            Comenzar
                          </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20">
        {/* Hero background image */}
        <div className="absolute inset-0 z-[1]" style={{
          backgroundImage: `url('https://media.base44.com/images/public/698a3c580c288f79d8b0a371/bcf47d566_ChatGPTImageMar26202601_54_57AM.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.75) 50%, rgba(5,5,5,0.92) 100%)' }} />

        <div className="relative z-[3] max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Servicios de Modelado 3D
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              BIM • Escaneo • Documentación
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Transformamos tus espacios en modelos digitales precisos. 
            Solicita tu cotización hoy.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full px-10 py-7 text-xl font-semibold group shadow-lg shadow-orange-500/30"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-6 text-sm text-gray-400"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Respuesta en 24h
            </span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3]"
        >
          <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
        </motion.div>
      </section>

      

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              Lo Que Ofrecemos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Servicios Principales
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Desde el escaneo inicial hasta la documentación final, proporcionamos servicios 
              completos que garantizan precisión y eficiencia en cada etapa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experiencia comprobada en proyectos de gran escala, desde diseño conceptual 
              hasta coordinación técnica y supervisión de múltiples disciplinas.
            </p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>



      {/* Additional Services Section */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              Servicios Adicionales
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              También Ofrecemos
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              Ponte en Contacto
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comencemos Tu Proyecto
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ¿Listo para transformar tu espacio en un modelo digital preciso? 
              Completa el formulario a continuación y nuestro equipo te contactará en 24 horas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {alreadySubmitted ? (
                <div className="bg-white/[0.03] border border-orange-500/30 rounded-3xl p-8 md:p-10 text-center">
                  <CheckCircle2 className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">¡Mensaje enviado!</h3>
                  <p className="text-gray-400">Ya enviaste un mensaje hoy. Te contactaremos pronto. Puedes volver a escribirnos mañana.</p>
                </div>
              ) : (
              <motion.form 
                onSubmit={handleSubmit} 
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 hover:border-orange-500/20 transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Nombre Completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  setFormData({ ...formData, name: e.target.value })
}
                      required
                      placeholder="Juan García"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Correo Electrónico *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="juan@empresa.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-300">Nombre de la Empresa</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Empresa S.A."
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300">Número de Teléfono</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+34 600 000 000"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-orange-500"
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-8">
                  <Label htmlFor="message" className="text-gray-300">Detalles del Proyecto *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    placeholder="Cuéntanos sobre tu proyecto, plazos y cualquier requisito específico..."
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500 resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white h-14 rounded-xl text-lg font-medium"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <motion.div 
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-orange-500/20 transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Correo</div>
                      <a href="mailto:info@as-built.com" className="text-white hover:text-orange-400 transition-colors">
                        info@as-built.com
                      </a>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Teléfono</div>
                      <a href="tel:+34912345678" className="text-white hover:text-orange-400 transition-colors">
                        +34 912 345 678
                      </a>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Oficina</div>
                      <address className="text-white not-italic">
                        Calle Innovación 123<br />
                        28001 Madrid, España
                      </address>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                <h3 className="text-xl font-semibold mb-3">Respuesta Rápida</h3>
                <p className="text-gray-400 text-sm">
                  Normalmente respondemos a todas las consultas en 24 horas. Para proyectos urgentes, 
                  llámanos directamente para asistencia inmediata.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-400 rounded-lg flex items-center justify-center">
                <Box className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold">As-Built</span>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-sm text-gray-500 hover:text-orange-400 transition-colors"
              >
                Servicios
              </a>
              <a 
                href="#portfolio" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-sm text-gray-500 hover:text-orange-400 transition-colors"
              >
                Portafolio
              </a>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-sm text-gray-500 hover:text-orange-400 transition-colors"
              >
                Nosotros
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-sm text-gray-500 hover:text-orange-400 transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2026 As-Built. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}