import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-section.jpg";

const stats = [
  { value: "15+", label: "Tahun Pengalaman Konsultasi" },
  { value: "1000+", label: "Proyek Perpajakan Selesai" },
  { value: "500+", label: "Klien Puas Dilayani" },
  { value: "99%", label: "Tingkat Kepatuhan Pajak" },
];

const AboutHomeSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Stats */}
          <div className="relative opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-gold/20">
                <img
                  src={aboutImage}
                  alt="Professional consultation"
                  className="w-full h-[450px] object-cover"
                />
              </div>

              {/* Corner decoration */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-gold/40 rounded-tl-2xl" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border/50 hover:border-gold/30 transition-all duration-300 group"
                >
                  <span className="font-display text-3xl font-bold text-gradient-gold group-hover:scale-105 transition-transform inline-block">
                    {stat.value}
                  </span>
                  <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
              Tentang Kami
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Solusi Hari Ini untuk{" "}
              <span className="text-gradient-gold">Kesuksesan Esok</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Fen Tax Strategy adalah kantor konsultan pajak terdaftar di Kementerian Keuangan yang memberikan layanan konsultasi, perencanaan, kepatuhan, dan pendampingan perpajakan secara komprehensif kepada wajib pajak orang pribadi maupun badan usaha.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Dengan didukung oleh tenaga profesional yang kompeten, berintegritas, serta menjunjung tinggi Kode Etik Konsultan Pajak Indonesia (IKPI), kami berkomitmen memberikan solusi perpajakan yang akurat, objektif, dan bertanggung jawab.
            </p>

            <Button variant="gold" size="lg" className="group" asChild>
              <Link to="/about">
                Pelajari Lebih Lanjut
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHomeSection;
