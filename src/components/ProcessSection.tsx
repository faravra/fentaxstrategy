const steps = [
  {
    number: "01",
    title: "Konsultasi Awal",
    description: "Mendengarkan dan memahami kebutuhan perpajakan Anda secara mendalam untuk solusi yang tepat.",
  },
  {
    number: "02",
    title: "Analisis & Strategi",
    description: "Menyusun strategi perpajakan berdasarkan analisis komprehensif dan regulasi yang berlaku.",
  },
  {
    number: "03",
    title: "Implementasi",
    description: "Melaksanakan solusi perpajakan dengan tepat, patuh, dan memberikan kepastian bagi klien.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
            Proses Kami
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Redefining Boundaries with <span className="text-gradient-gold">Brilliance</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Step number */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-gold-sm mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary-foreground font-bold text-sm">{step.number}</span>
              </div>

              {/* Card */}
              <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-gold/40 transition-all duration-500 hover:shadow-gold-sm text-center h-full">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
