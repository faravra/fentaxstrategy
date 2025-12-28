import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    value: "+62 821 3845 8433", 
    href: "tel:+6281234567890"
  },
  {
    icon: Mail,
    title: "Email",
    value: "fentaxstrategy@gmail.com",
    href: "mailto:fentaxstrategy@gmail.com"
  },
  {
    icon: MapPin,
    title: "Alamat Kantor",
    value: "Jln. Sugriwo IX No. 78, Krapyak, Semarang Barat, Kota Semarang",
    href: "https://maps.app.goo.gl/dfwS6Ki7wD24KBd76"
  },
  {
    icon: Clock,
    title: "Jam Kerja",
    value: "Senin - Jumat: 08:00 - 17:00 WIB",
    href: null
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Tim kami akan segera merespons.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
            Hubungi Kami
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Mari <span className="text-gradient-gold">Berdiskusi</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Konsultasikan kebutuhan perpajakan Anda dengan tim profesional kami. 
            Kami siap membantu memberikan solusi terbaik untuk bisnis Anda.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Informasi Kontak
                </h2>
                <p className="text-muted-foreground">
                  Hubungi kami melalui berbagai channel yang tersedia atau kunjungi langsung kantor kami.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="group bg-card p-6 rounded-2xl border border-border/50 hover:border-gold/40 transition-all duration-300 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <info.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground hover:text-gold transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 p-6 rounded-2xl border border-green-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Chat Langsung via WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">Respon cepat untuk pertanyaan Anda</p>
                  </div>
                  <Button variant="default" className="bg-green-500 hover:bg-green-600" asChild>
                    <a href="https://wa.me/6282138458433" target="_blank" rel="noopener noreferrer">
                      Chat Sekarang
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      required
                      className="bg-background border-border/50 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      className="bg-background border-border/50 focus:border-gold"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      No. Telepon
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62 812-xxxx-xxxx"
                      className="bg-background border-border/50 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subjek
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Konsultasi Pajak"
                      required
                      className="bg-background border-border/50 focus:border-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Pesan
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Jelaskan kebutuhan perpajakan Anda..."
                    rows={5}
                    required
                    className="bg-background border-border/50 focus:border-gold resize-none"
                  />
                </div>
                <Button variant="gold" size="lg" type="submit" className="w-full">
                  Kirim Pesan
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Lokasi <span className="text-gradient-gold">Kantor Kami</span>
            </h2>
            <p className="text-muted-foreground">
              Kunjungi kantor kami untuk konsultasi langsung dengan tim profesional
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border/50 h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.224432496437!2d110.3644265!3d-6.9828206999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b06e28c762f%3A0x9157289cb27cc568!2sFEN%20TAX%20STRATEGY!5e0!3m2!1sid!2sid!4v1766882598004!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor Fen Tax Strategy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
