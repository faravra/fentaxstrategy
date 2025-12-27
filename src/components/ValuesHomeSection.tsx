import { Shield, Award, Lock, Heart, Target, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integritas",
    description: "Menjunjung tinggi kejujuran dan etika profesional dalam setiap layanan.",
  },
  {
    icon: Award,
    title: "Profesionalisme",
    description: "Bekerja secara akurat dan berhati-hati dengan standar tinggi.",
  },
  {
    icon: Lock,
    title: "Kerahasiaan",
    description: "Menjaga kerahasiaan data klien dengan penuh tanggung jawab.",
  },
  {
    icon: Target,
    title: "Kepatuhan",
    description: "Berkomitmen pada kepatuhan terhadap peraturan perpajakan.",
  },
  {
    icon: Heart,
    title: "Tanggung Jawab",
    description: "Memberikan solusi yang efektif dan dapat dipertanggungjawabkan.",
  },
  {
    icon: Users,
    title: "Kemitraan",
    description: "Membangun kemitraan jangka panjang yang berkelanjutan.",
  },
];

const ValuesHomeSection = () => {
  return (
    <section className="py-24 px-6 bg-charcoal-light relative overflow-hidden">
      {/* Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
            Nilai-Nilai Kami
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prinsip yang <span className="text-gradient-gold">Memandu</span> Kami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fen Tax Strategy menjunjung tinggi integritas, profesionalisme, dan kepatuhan dalam setiap layanan perpajakan untuk membangun kemitraan jangka panjang yang berkelanjutan.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-gold/40 transition-all duration-500 hover:shadow-gold-sm relative overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 relative">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesHomeSection;
