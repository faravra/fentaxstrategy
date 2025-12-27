import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Wijaya",
    role: "Senior Tax Consultant",
    image: team1,
    description: "Spesialisasi dalam pajak korporat dengan pengalaman 12+ tahun",
  },
  {
    name: "David Susanto",
    role: "Tax Director",
    image: team2,
    description: "Ahli tax planning strategis untuk perusahaan multinasional",
  },
  {
    name: "Linda Hartono",
    role: "Tax Manager",
    image: team3,
    description: "Fokus pada kepatuhan pajak dan pendampingan audit",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 px-6 bg-charcoal-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
            Tim Profesional
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kenali <span className="text-gradient-gold">Tim Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tim konsultan berpengalaman yang siap membantu mengoptimalkan kewajiban perpajakan Anda
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-gold/40 transition-all duration-500 hover:shadow-gold">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  
                  {/* Social icons on hover */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <button className="w-10 h-10 rounded-full bg-gold/90 hover:bg-gold flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5 text-primary-foreground" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gold/90 hover:bg-gold flex items-center justify-center transition-colors">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
