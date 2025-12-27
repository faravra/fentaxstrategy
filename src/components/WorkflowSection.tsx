import { MessageCircle, FileSearch, Trophy } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Sampaikan Kebutuhan Anda",
    description: "Mendengarkan dan memahami kebutuhan perpajakan Anda secara mendalam untuk solusi yang tepat.",
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Analisis & Solusi",
    description: "Solusi disusun berdasarkan regulasi terkini dan praktik terbaik dalam industri perpajakan.",
  },
  {
    icon: Trophy,
    number: "03",
    title: "Hasil Optimal",
    description: "Pelaksanaan tepat, patuh regulasi, dan memberikan kepastian serta ketenangan bagi klien.",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
            Alur Kerja Kami
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Lihat <span className="text-gradient-gold">Flow</span> Kami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kami menerapkan proses kerja yang terstruktur, transparan, dan berorientasi pada solusi untuk memastikan setiap kebutuhan perpajakan klien ditangani secara tepat dan profesional.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Card */}
              <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-gold/40 transition-all duration-500 hover:shadow-gold-sm h-full relative overflow-hidden">
                {/* Background number */}
                <span className="absolute top-4 right-4 text-8xl font-display font-bold text-muted/10 group-hover:text-gold/10 transition-colors duration-500">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:shadow-gold-sm transition-all duration-300">
                  <step.icon className="w-8 h-8 text-gold" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>

              {/* Step number badge */}
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-gold-sm">
                <span className="text-primary-foreground font-bold text-sm">{step.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
