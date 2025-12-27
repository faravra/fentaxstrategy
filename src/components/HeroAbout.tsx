import heroImage from "@/assets/hero-about.jpg";

const HeroAbout = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-foreground">Tentang </span>
          <span className="text-gradient-gold">Kami</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Solusi perpajakan terpercaya dengan dedikasi tinggi untuk kesuksesan finansial Anda
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2 mx-auto">
            <div className="w-1 h-2 bg-gold rounded-full animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
