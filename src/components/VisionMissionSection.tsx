import { Eye, Target } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="py-24 px-6 bg-charcoal-light relative overflow-hidden">
      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="group relative bg-card p-10 rounded-2xl border border-border/50 hover:border-gold/40 transition-all duration-500 hover:shadow-gold overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />
            
            {/* Icon */}
            <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:shadow-gold-sm transition-all">
              <Eye className="w-8 h-8 text-gold" />
            </div>

            {/* Content */}
            <h3 className="font-display text-2xl font-bold text-foreground mb-4 relative">
              Visi Kami
            </h3>
            <p className="text-muted-foreground leading-relaxed relative">
              Menjadi kantor konsultan pajak dan akuntansi multinasional yang profesional, berintegritas, dan terpercaya. Dengan mengedepankan nilai-nilai etika bisnis dan profesi dalam membangun mitra bisnis.
            </p>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gold/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Mission Card */}
          <div className="group relative bg-card p-10 rounded-2xl border border-border/50 hover:border-gold/40 transition-all duration-500 hover:shadow-gold overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />
            
            {/* Icon */}
            <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:shadow-gold-sm transition-all">
              <Target className="w-8 h-8 text-gold" />
            </div>

            {/* Content */}
            <h3 className="font-display text-2xl font-bold text-foreground mb-4 relative">
              Misi Kami
            </h3>
            <p className="text-muted-foreground leading-relaxed relative">
              Memberikan jasa yang berkualitas unggul di bidang perpajakan dan akuntansi secara profesional dan bertanggung jawab dengan mematuhi seluruh ketentuan peraturan perundang-undangan yang berlaku, serta memberikan solusi yang legal, efisien, dan dapat dipertanggungjawabkan.
            </p>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gold/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Highlight stat */}
        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center gap-6 bg-card/50 backdrop-blur-sm px-8 py-6 rounded-2xl border border-gold/20">
            <div className="text-center">
              <span className="font-display text-5xl font-bold text-gradient-gold">97%</span>
              <p className="text-muted-foreground text-sm mt-2">Tingkat keberhasilan penyelesaian kasus perpajakan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
