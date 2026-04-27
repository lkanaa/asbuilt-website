'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(nextImage, 4000);
      return () => clearInterval(interval);
    }
  }, [currentImageIndex, project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-2 gap-8 items-center ${
        index % 2 === 1 ? '' : ''
      }`}
    >
      {/* Image Carousel */}
      <div className={`relative ${index % 2 === 1 ? 'order-2 lg:order-1' : 'order-2'}`}>
        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex].url}
              alt={project.images[currentImageIndex].alt}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          
          {project.images.length > 1 && (
            <>
              {/* Left half click area */}
              <div
                onClick={prevImage}
                className="absolute left-0 top-0 bottom-0 w-1/2 cursor-pointer group/left"
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover/left:opacity-100 transition-opacity rounded-full p-3">
                  <ChevronLeft className="w-6 h-6" />
                </div>
              </div>
              
              {/* Right half click area */}
              <div
                onClick={nextImage}
                className="absolute right-0 top-0 bottom-0 w-1/2 cursor-pointer group/right"
              >
                <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover/right:opacity-100 transition-opacity rounded-full p-3">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </div>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? 'bg-orange-400 w-6'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Technology badges below carousel */}
        {project.technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="bg-orange-500/10 border-orange-500/30 text-orange-400 hover:bg-orange-500/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className={`space-y-6 ${index % 2 === 1 ? 'order-1 lg:order-2' : 'order-1'}`}>
        <div>
          {/* Service tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.services.map((service, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 border border-orange-500/30"
              >
                {service}
              </span>
            ))}
          </div>
          
          <h3 className="text-3xl font-bold mb-3">
            {project.title}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="space-y-3">
          {project.features.map((feature, fIdx) => (
            <div key={fIdx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}