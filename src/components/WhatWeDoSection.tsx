import { MessageSquare, Calculator, FileText } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Konsultasi Profesional",
    description: "Pendapat perpajakan dan perencanaan pajak yang sesuai ketentuan peraturan.",
  },
  {
    icon: Calculator,
    title: "Perencanaan Strategis",
    description: "Strategi perpajakan yang efisien, legal, dan berkelanjutan untuk bisnis Anda.",
  },
  {
    icon: FileText,
    title: "Kepatuhan Terjamin",
    description: "Penyusunan dan pelaporan SPT yang akurat sesuai regulasi yang berlaku.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="py-24 px-6 bg-charcoal-light relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(43 74% 49%) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
            Apa yang Kami Lakukan
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transform, Transcend, <span className="text-gradient-gold">Triumph</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card p-8 rounded-2xl border border-border/50 hover:border-gold/40 transition-all duration-500 hover:shadow-gold-sm opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 relative">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
