import { useEffect, useState } from "react";
import partnerSvetofor from "@/assets/partners/svetofor.png";
import partnerX5 from "@/assets/partners/x5.png";
import partnerRzd from "@/assets/partners/rzd.png";
import partnerSibur from "@/assets/partners/sibur.png";
import partnerSber from "@/assets/partners/sber.png";
import partnerTechnonikol from "@/assets/partners/technonikol.png";
import partnerMvideo from "@/assets/partners/mvideo.png";
import partnerSportmaster from "@/assets/partners/sportmaster.png";
import partnerLeroymerlin from "@/assets/partners/leroymerlin.png";
import partnerOzon from "@/assets/partners/ozon.png";
import partnerGazprom from "@/assets/partners/gazprom.png";

const partners = [
  { src: partnerRzd, alt: "РЖД" },
  { src: partnerX5, alt: "X5 Group" },
  { src: partnerSvetofor, alt: "Светофор" },
  { src: partnerSibur, alt: "Сибур" },
  { src: partnerSber, alt: "Сбер" },
  { src: partnerTechnonikol, alt: "ТехноНИКОЛЬ" },
  { src: partnerMvideo, alt: "М.Видео" },
  { src: partnerSportmaster, alt: "Спортмастер" },
  { src: partnerLeroymerlin, alt: "Леруа Мерлен" },
  { src: partnerOzon, alt: "OZON" },
  { src: partnerGazprom, alt: "Газпром" },
];

const PartnersCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
          Нам доверяют
        </h3>
        <p className="text-muted-foreground text-center mb-10">
          Крупнейшие компании России выбирают нас своим логистическим партнёром
        </p>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div 
            className={`flex gap-16 items-center ${isHovered ? 'animate-pause' : ''}`}
            style={{
              animation: 'scroll 30s linear infinite',
              width: 'max-content',
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`${partner.alt}-${index}`}
                className="flex-shrink-0 h-16 md:h-20 flex items-center justify-center px-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img 
                  src={partner.src} 
                  alt={partner.alt} 
                  className="h-full w-auto object-contain max-w-[160px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-pause {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export default PartnersCarousel;
