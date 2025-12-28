import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import meetingImage from "@/assets/about-meeting.jpg";

const features = [
  "Konsultasi Perpajakan",
  "Perencanaan Pajak / Tax Planning",
  "Penyusunan SPT Masa & Tahunan",
  "Laporan Keuangan PBPK",
  "Pendampingan SP2DK",
  "Restitusi PPH & PPN",
  "Pendampingan Pemeriksaan Pajak",
  "Transfer Pricing Documentation",
  "Sengketa Banding di Pengadilan Pajak",
];

const AboutIntro = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            {/* Main Image */}
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-transparent to-gold/20 rounded-2xl blur-xl" />
              <img 
                src={meetingImage}
                alt="Professional team meeting" 
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover border border-gold/20"
              />
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl bg-gradient-to-br from-gold to-gold-light shadow-gold flex items-center justify-center" style={{ zIndex: "10000000" }}>
              <div className="text-center">
                <span className="text-3xl font-display font-bold text-primary-foreground">10+</span>
                <p className="text-xs font-medium text-primary-foreground/80">Tahun Pengalaman</p>
              </div>
            </div>

            {/* Corner decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold/50 rounded-tl-xl" />
          </div>

          {/* Content Section */}
          <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
              Solusi Perpajakan Profesional & Terpercaya
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Mitra Profesional untuk{" "}
              <span className="text-gradient-gold">Kepatuhan Pajak</span> Anda
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Kami menyediakan layanan konsultasi perpajakan yang akurat, patuh regulasi, dan efisien untuk individu maupun perusahaan. Dengan tim konsultan berpengalaman, kami membantu Anda mengelola kewajiban pajak secara optimal dan tepat waktu.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>



            <Button variant="gold" size="lg">
              <Link to="/contact">
                Selengkapnya
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
