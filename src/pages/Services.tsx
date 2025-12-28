import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  FileText, 
  Calculator, 
  FileCheck, 
  AlertCircle, 
  RefreshCw, 
  Search, 
  Scale, 
  Gavel,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const servicesData = [
  {
    id: "konsultasi-perpajakan",
    icon: MessageSquare,
    title: "Konsultasi Perpajakan",
    shortDesc: "Pemberian pendapat perpajakan dan perencanaan pajak yang sesuai ketentuan.",
    fullDesc: "Layanan Konsultasi Perpajakan Fen Tax Strategy dirancang untuk membantu wajib pajak memahami, mengelola, dan memenuhi kewajiban perpajakannya secara tepat dan efisien. Konsultasi perpajakan kami mencakup pemberian pendapat perpajakan, dan perencanaan pajak yang sesuai ketentuan. Setiap solusi disusun secara komprehensif, berbasis analisis yang mendalam, serta mengedepankan kepatuhan terhadap peraturan perundang-undangan yang berlaku.",
    features: [
      "Pemberian pendapat perpajakan profesional",
      "Analisis kewajiban pajak yang komprehensif",
      "Perencanaan pajak sesuai ketentuan",
      "Solusi berbasis peraturan perundang-undangan"
    ]
  },
  {
    id: "perencanaan-pajak",
    icon: Calculator,
    title: "Perencanaan Pajak / Tax Planning",
    shortDesc: "Mengelola kewajiban perpajakan secara efisien, legal, dan berkelanjutan.",
    fullDesc: "Layanan Perencanaan Pajak (Tax Planning) bertujuan membantu klien mengelola kewajiban perpajakan secara efisien, legal, dan berkelanjutan. Layanan ini dirancang untuk memastikan setiap keputusan bisnis selaras dengan ketentuan perpajakan yang berlaku sekaligus mengoptimalkan beban pajak secara wajar. Kami melakukan analisis menyeluruh terhadap struktur usaha, transaksi, dan aktivitas keuangan klien untuk mengidentifikasi peluang efisiensi pajak tanpa mengabaikan prinsip kepatuhan dan kehati-hatian.",
    features: [
      "Analisis struktur usaha dan transaksi",
      "Identifikasi peluang efisiensi pajak",
      "Strategi jangka pendek dan panjang",
      "Meminimalkan risiko perpajakan"
    ]
  },
  {
    id: "penyusunan-spt",
    icon: FileText,
    title: "Penyusunan SPT Masa & Tahunan",
    shortDesc: "Penyusunan dan pelaporan SPT bagi WP Orang Pribadi dan Badan Usaha.",
    fullDesc: "Layanan penyusunan dan pelaporan SPT Masa serta SPT Tahunan bagi Wajib Pajak Orang Pribadi dan Badan Usaha secara akurat, tepat waktu, dan sesuai dengan ketentuan peraturan perpajakan yang berlaku. Layanan ini dirancang untuk membantu klien memenuhi kewajiban perpajakan dengan tertib sekaligus meminimalkan risiko sanksi administrasi. Kami melakukan penelaahan atas data keuangan dan transaksi klien, memastikan kesesuaian perhitungan pajak, serta menyusun SPT secara komprehensif sebelum dilakukan pelaporan kepada otoritas pajak.",
    features: [
      "SPT Masa dan SPT Tahunan",
      "Wajib Pajak Orang Pribadi & Badan",
      "Penelaahan data keuangan",
      "Kerahasiaan data klien terjamin"
    ]
  },
  {
    id: "laporan-keuangan-pbpk",
    icon: FileCheck,
    title: "Laporan Keuangan PBPK",
    shortDesc: "Penyusunan Laporan Keuangan sesuai PP Nomor 49 Tahun 2025.",
    fullDesc: "Fen Tax Strategy menyediakan layanan Penyusunan Laporan Keuangan berbasis PBPK (Pelaporan Bersama Pelaporan Keuangan) sesuai dengan ketentuan Peraturan Pemerintah Nomor 49 Tahun 2025, yang mengintegrasikan laporan keuangan dengan pelaporan perpajakan secara sistematis dan terstandar. Layanan ini bertujuan membantu wajib pajak memastikan keselarasan antara laporan keuangan komersial dan data perpajakan yang dilaporkan kepada otoritas pajak.",
    features: [
      "Sesuai PP Nomor 49 Tahun 2025",
      "Integrasi laporan keuangan & perpajakan",
      "Akurasi dan transparansi pelaporan",
      "Meminimalkan risiko ketidaksesuaian data"
    ]
  },
  {
    id: "pendampingan-sp2dk",
    icon: AlertCircle,
    title: "Pendampingan SP2DK",
    shortDesc: "Pendampingan menanggapi permintaan klarifikasi dari DJP.",
    fullDesc: "Fen Tax Strategy menyediakan layanan Pendampingan SP2DK (Surat Permintaan Penjelasan atas Data dan/atau Keterangan) untuk membantu wajib pajak dalam menanggapi permintaan klarifikasi dari Direktorat Jenderal Pajak secara tepat, terukur, dan sesuai ketentuan yang berlaku. Kami mendampingi klien sejak tahap analisis data, penyusunan penjelasan tertulis, hingga penyampaian klarifikasi kepada otoritas pajak.",
    features: [
      "Analisis data perpajakan",
      "Penyusunan penjelasan tertulis",
      "Rekonsiliasi data keuangan",
      "Meminimalkan risiko pemeriksaan"
    ]
  },
  {
    id: "restitusi-pph-ppn",
    icon: RefreshCw,
    title: "Restitusi PPH & PPN",
    shortDesc: "Pendampingan restitusi bagi WP yang kelebihan pembayaran pajak.",
    fullDesc: "Fen Tax Strategy menyediakan layanan pendampingan Restitusi Pajak Penghasilan (PPh) dan Pajak Pertambahan Nilai (PPN) bagi wajib pajak yang mengalami kelebihan pembayaran pajak, sesuai dengan ketentuan peraturan perpajakan yang berlaku. Kami mendampingi klien mulai dari penelaahan kelayakan restitusi, rekonsiliasi data keuangan dan perpajakan, penyusunan dokumen pendukung, hingga pendampingan selama proses penelitian, pemeriksaan, dan klarifikasi oleh otoritas pajak.",
    features: [
      "Penelaahan kelayakan restitusi",
      "Rekonsiliasi data keuangan",
      "Penyusunan dokumen pendukung",
      "Pendampingan proses pemeriksaan"
    ]
  },
  {
    id: "pendampingan-pemeriksaan",
    icon: Search,
    title: "Pendampingan Pemeriksaan Pajak",
    shortDesc: "Pendampingan menghadapi proses pemeriksaan oleh DJP.",
    fullDesc: "Fen Tax Strategy menyediakan layanan Pendampingan Pemeriksaan Pajak untuk membantu wajib pajak dalam menghadapi proses pemeriksaan oleh Direktorat Jenderal Pajak secara tertib, terukur, dan sesuai dengan ketentuan peraturan perundang-undangan yang berlaku. Kami mendampingi klien sejak tahap persiapan pemeriksaan, penelaahan dan rekonsiliasi data perpajakan dan laporan keuangan, penyusunan dokumen pendukung, hingga pendampingan selama proses klarifikasi dan pembahasan hasil pemeriksaan.",
    features: [
      "Persiapan pemeriksaan",
      "Penelaahan dokumen perpajakan",
      "Pendampingan klarifikasi",
      "Meminimalkan risiko koreksi"
    ]
  },
  {
    id: "transfer-pricing",
    icon: Scale,
    title: "Transfer Pricing Documentation",
    shortDesc: "Penyusunan dokumentasi penentuan harga transfer.",
    fullDesc: "Fen Tax Strategy menyediakan layanan Penyusunan Transfer Pricing Documentation untuk membantu wajib pajak memenuhi kewajiban dokumentasi penentuan harga transfer sesuai dengan ketentuan perpajakan yang berlaku di Indonesia serta prinsip kewajaran dan kelaziman usaha (arm's length principle). Layanan ini mencakup analisis struktur grup usaha, karakterisasi fungsi, aset, dan risiko, pemilihan metode penentuan harga transfer yang tepat, serta penyusunan dokumentasi yang komprehensif.",
    features: [
      "Analisis struktur grup usaha",
      "Local File & Master File",
      "Country-by-Country Report",
      "Prinsip arm's length"
    ]
  },
  {
    id: "sengketa-banding",
    icon: Gavel,
    title: "Sengketa Banding di Pengadilan Pajak",
    shortDesc: "Pendampingan sengketa banding untuk memperjuangkan hak WP.",
    fullDesc: "Fen Tax Strategy menyediakan layanan Pendampingan Sengketa Banding di Pengadilan Pajak untuk membantu wajib pajak dalam memperjuangkan haknya secara profesional dan sesuai dengan ketentuan hukum perpajakan yang berlaku. Kami mendampingi klien sejak tahap analisis sengketa, penyusunan dan penelaahan berkas banding, penyusunan argumentasi hukum dan perpajakan, hingga pendampingan selama proses persidangan di Pengadilan Pajak.",
    features: [
      "Analisis sengketa pajak",
      "Penyusunan berkas banding",
      "Argumentasi hukum perpajakan",
      "Pendampingan persidangan"
    ]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm">
            Layanan Kami
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Solusi Perpajakan <span className="text-gradient-gold">Komprehensif</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Fen Tax Strategy menyediakan berbagai layanan perpajakan profesional untuk mendukung kepatuhan 
            dan keberlanjutan bisnis Anda dengan pendekatan strategis dan berbasis regulasi.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-gold/40 transition-all duration-500 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                {/* Service Header - Always Visible */}
                <div 
                  className="p-6 md:p-8 cursor-pointer"
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <service.icon className="w-8 h-8 text-gold" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                          {service.title}
                        </h3>
                        <ArrowRight 
                          className={`w-5 h-5 text-gold transition-transform duration-300 ${
                            activeService === service.id ? 'rotate-90' : ''
                          }`} 
                        />
                      </div>
                      <p className="text-muted-foreground">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Expandable Detail */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    activeService === service.id ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-8 pt-2 border-t border-border/30">
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      {/* Full Description */}
                      <div>
                        <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                          Tentang Layanan Ini
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.fullDesc}
                        </p>
                      </div>
                      
                      {/* Features */}
                      <div>
                        <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                          Yang Termasuk
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                              <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="gold" className="mt-6" asChild>
                          <Link to="/contact">
                            Konsultasi Sekarang
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative bg-card rounded-3xl p-10 md:p-16 text-center border border-border/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Butuh Bantuan <span className="text-gradient-gold">Perpajakan?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Hubungi kami sekarang untuk konsultasi gratis. Tim profesional kami siap membantu 
                menyelesaikan permasalahan perpajakan Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/contact">
                    Hubungi Kami
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="goldOutline" size="lg" asChild>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                    Chat via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
