import { Check } from "lucide-react";

const reasons = [
  {
    title: "Pendekatan Strategis dan Berbasis Regulasi",
    description: "Setiap solusi disusun berdasarkan analisis mendalam dan ketentuan peraturan perundang-undangan yang berlaku.",
  },
  {
    title: "Profesional dan Berintegritas",
    description: "Tim konsultan yang kompeten dan menjunjung tinggi Kode Etik Konsultan Pajak Indonesia (IKPI).",
  },
  {
    title: "Layanan Komprehensif dan Terintegrasi",
    description: "Solusi perpajakan lengkap dari konsultasi hingga pendampingan sengketa dalam satu atap.",
  },
  {
    title: "Pendampingan yang Terukur dan Bertanggungjawab",
    description: "Proses kerja yang sistematis, transparan, dan dapat dipertanggungjawabkan.",
  },
  {
    title: "Fokus pada Kepatuhan dan Mitigasi Risiko",
    description: "Membantu meminimalkan risiko pajak dan meningkatkan kepatuhan terhadap regulasi.",
  },
  {
    title: "Komitmen pada Kepastian Hukum",
    description: "Mendukung keberlanjutan usaha klien dengan solusi yang legal dan efisien.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 px-6 bg-charcoal-light relative overflow-hidden">
      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
              Mengapa Kami
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Kenapa Harus Pilih{" "}
              <span className="text-gradient-gold">Fen Tax Strategy</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Fen Tax Strategy menjunjung tinggi integritas, profesionalisme, dan kepatuhan dalam setiap layanan perpajakan. Kami berkomitmen menjaga kerahasiaan data klien dan memberikan solusi perpajakan yang efektif.
            </p>

            {/* Tagline highlight */}
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-gold/20">
              <p className="text-gold font-display text-xl font-semibold italic">
                "Ketepatan Strategi, Kepastian Pajak, dan Bisnis Terjaga."
              </p>
            </div>
          </div>

          {/* Right - Reasons List */}
          <div className="space-y-4 opacity-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group flex gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-gold/40 transition-all duration-300 hover:shadow-gold-sm"
              >
                {/* Check icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Check className="w-5 h-5 text-gold" />
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
