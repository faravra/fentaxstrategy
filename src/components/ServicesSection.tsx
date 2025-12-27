import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, FileText, Calculator, FileCheck, AlertCircle, RefreshCw, Search, Scale, Gavel } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: MessageSquare,
    title: "Konsultasi Perpajakan",
    description: "Pemberian pendapat perpajakan dan perencanaan pajak yang sesuai ketentuan untuk membantu wajib pajak memahami dan memenuhi kewajibannya.",
  },
  {
    icon: Calculator,
    title: "Perencanaan Pajak",
    description: "Analisis menyeluruh terhadap struktur usaha dan transaksi untuk mengidentifikasi peluang efisiensi pajak secara legal dan berkelanjutan.",
  },
  {
    icon: FileText,
    title: "Penyusunan SPT",
    description: "Penyusunan dan pelaporan SPT Masa serta SPT Tahunan bagi Wajib Pajak Orang Pribadi dan Badan Usaha secara akurat dan tepat waktu.",
  },
  {
    icon: FileCheck,
    title: "Laporan Keuangan PBPK",
    description: "Penyusunan Laporan Keuangan berbasis PBPK sesuai PP Nomor 49 Tahun 2025 yang mengintegrasikan laporan keuangan dengan pelaporan perpajakan.",
  },
  {
    icon: AlertCircle,
    title: "Pendampingan SP2DK",
    description: "Pendampingan dalam menanggapi Surat Permintaan Penjelasan atas Data dan/atau Keterangan dari Direktorat Jenderal Pajak.",
  },
  {
    icon: RefreshCw,
    title: "Restitusi PPH & PPN",
    description: "Pendampingan proses restitusi bagi wajib pajak yang mengalami kelebihan pembayaran pajak hingga hak wajib pajak terpenuhi optimal.",
  },
  {
    icon: Search,
    title: "Pendampingan Pemeriksaan",
    description: "Pendampingan menghadapi proses pemeriksaan oleh DJP secara tertib, terukur, dan sesuai ketentuan perundang-undangan yang berlaku.",
  },
  {
    icon: Scale,
    title: "Transfer Pricing",
    description: "Penyusunan dokumentasi penentuan harga transfer sesuai ketentuan perpajakan Indonesia dan prinsip kewajaran usaha (arm's length principle).",
  },
  {
    icon: Gavel,
    title: "Sengketa Banding",
    description: "Pendampingan sengketa banding di Pengadilan Pajak untuk memperjuangkan hak wajib pajak secara profesional dan sesuai hukum.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
            Layanan Kami
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Konsultasi yang <span className="text-gradient-gold">Komprehensif</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Solusi perpajakan lengkap untuk mendukung kepatuhan dan keberlanjutan bisnis Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card p-6 rounded-2xl border border-border/50 hover:border-gold/40 transition-all duration-500 hover:shadow-gold-sm overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.05 + index * 0.05}s` }}
            >
              {/* Background hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 relative">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity relative">
                <ArrowRight className="w-5 h-5 text-gold" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/services">
              Lihat Semua Layanan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
