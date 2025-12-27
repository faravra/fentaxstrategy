import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const ConsultationCTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-dark to-charcoal" />
      
      {/* Gold glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      
      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
              Mulai Sekarang
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Mari Mulai dengan{" "}
              <span className="text-gradient-gold">Konsultasi Gratis!</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Hubungi kami untuk mendapatkan konsultasi perpajakan awal secara gratis. Tim profesional kami siap membantu menganalisis kebutuhan perpajakan Anda.
            </p>

            <Button variant="gold" size="xl" className="group">
              Jadwalkan Konsultasi
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right - Video/Quote Card */}
          <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-card rounded-2xl overflow-hidden border border-gold/20 shadow-gold">
              {/* Video placeholder with play button */}
              <div className="relative h-64 bg-gradient-to-br from-charcoal-light to-charcoal flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-gold hover:scale-105 transition-transform group">
                  <Play className="w-8 h-8 text-primary-foreground ml-1 group-hover:scale-110 transition-transform" />
                </button>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-gold/30 rounded-tl-xl" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-gold/30 rounded-br-xl" />
              </div>

              {/* Quote section */}
              <div className="p-8">
                <blockquote className="text-foreground italic mb-4">
                  "Keunggulan adalah standar kami, kepuasan klien adalah tujuan kami. Kami hadir sebagai mitra strategis dalam melaksanakan kewajiban perpajakan secara tepat dan efisien."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-display font-bold">F</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Fen Tax Strategy</p>
                    <p className="text-muted-foreground text-sm">Konsultan Pajak Terdaftar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTASection;
