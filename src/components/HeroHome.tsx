import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";

const serviceQuickLinks = [
  "Konsultasi Perpajakan",
  "Tax Planning",
  "Penyusunan SPT",
  "Pemeriksaan Pajak",,
  "Penyusunan Laporan Keuangan"
];

const HeroHome = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-charcoal-light" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-sm font-medium">Welcome to Fen Tax Strategy</span>
            </div>

            {/* Main heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ketepatan Strategi,{" "}
              <span className="text-gradient-gold">Kepastian Pajak,</span>{" "}
              dan Bisnis Terjaga
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Kantor konsultan pajak terdaftar di Kementerian Keuangan yang memberikan layanan konsultasi, perencanaan, kepatuhan, dan pendampingan perpajakan secara komprehensif.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button variant="gold" size="xl" className="group">
                Mulai Konsultasi
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <Link to="/about">Tentang Kami</Link>
              </Button>
            </div>

            {/* Rating badges */}
            <div className="flex flex-wrap gap-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground font-semibold">4.9 / 5</p>
                <p className="text-muted-foreground text-sm">Dari klien kami</p>
              </div>
              <div className="w-px bg-border" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground font-semibold">Terdaftar Resmi</p>
                <p className="text-muted-foreground text-sm">Kementerian Keuangan</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 relative opacity-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            {/* Main image container */}
            <div className="relative">
              {/* Decorative rays */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-0">
                <svg width="60" height="200" viewBox="0 0 60 200" fill="none" className="text-gold/20">
                  {[...Array(8)].map((_, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={100}
                      x2="60"
                      y2={100 + (i - 3.5) * 25}
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  ))}
                </svg>
              </div>

              {/* Image with frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-gold/20 shadow-gold">
                <img
                  src={heroImage}
                  alt="Professional tax consultant"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Service tags */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {serviceQuickLinks.map((service, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-charcoal/80 backdrop-blur-sm text-foreground text-sm rounded-lg border border-gold/20 hover:border-gold/40 hover:bg-charcoal transition-all cursor-pointer"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-gold/30 rounded-tr-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-gold/30 rounded-bl-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
