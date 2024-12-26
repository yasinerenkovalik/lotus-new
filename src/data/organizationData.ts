export interface Organization {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface OrganizationDetail extends Organization {
  features: string[];
  longDescription: string;
  gallery: string[];
  pricing: string;
  ekstra: string;
  duration: string;
  location: string;
}

export const organizations: Organization[] = [
  {
    id: 1,
    title: "Zişan Dekor",
    description: "Deniz manzaralı romantik düğün organizasyonu",
    category: "düğün",
    imageUrl: "/images/DSC05820-min.jpeg"
  },
  {
    id: 2,
    title: "Kır Düğünü",
    description: "Doğayla iç içe masalsı düğün organizasyonu",
    category: "düğün",
    imageUrl: "/images/HazeranDekor/image00001.jpeg"
  },
  {
    id: 3,
    title: "Güneş Dekor",
    description: "Lüks otel salonlarında şık düğün organizasyonu",
    category: "düğün",
    imageUrl: "/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.35.16.jpeg"
  },
  {
    id: 4,
    title: "Romantik Nişan",
    description: "Özel tasarlanmış nişan organizasyonu",
    category: "nişan",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070"
  },
  {
    id: 5,
    title: "Teras Nişanı",
    description: "Şehir manzaralı teras nişan organizasyonu",
    category: "nişan",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070"
  },
  {
    id: 6,
    title: "Geleneksel Kına",
    description: "Geleneksel konseptte kına organizasyonu",
    category: "kına",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
  },
  {
    id: 7,
    title: "Modern Kına",
    description: "Modern dokunuşlarla kına organizasyonu",
    category: "kına",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070"
  },
  {
    id: 8,
    title: "Bahçe Kınası",
    description: "Açık havada ferah kına organizasyonu",
    category: "kına",
    imageUrl: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069"
  },
  {
    id: 9,
    title: "Sünnet Şöleni",
    description: "Unutulmaz sünnet düğünü organizasyonu",
    category: "sünnet",
    imageUrl: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2069"
  },
  {
    id: 10,
    title: "Eğlenceli Sünnet",
    description: "Çocuk eğlenceleriyle dolu sünnet organizasyonu",
    category: "sünnet",
    imageUrl: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069"
  },
  {
    id: 11,
    title: "Temalı Doğum Günü",
    description: "Özel temalı doğum günü organizasyonu",
    category: "doğum günü",
    imageUrl: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069"
  },
  {
    id: 12,
    title: "Sürpriz Doğum Günü",
    description: "Sürprizlerle dolu doğum günü organizasyonu",
    category: "doğum günü",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070"
  },
  {
    id: 13,
    title: "Lüks Baby Shower",
    description: "Lüks konseptli baby shower organizasyonu",
    category: "özel",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070"
  },
  {
    id: 14,
    title: "Mezuniyet Partisi",
    description: "Özel mezuniyet kutlaması organizasyonu",
    category: "özel",
    imageUrl: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2069"
  },
  {
    id: 15,
    title: "Yıldönümü Kutlaması",
    description: "Romantik yıldönümü organizasyonu",
    category: "özel",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070"
  }
];

export const organizationDetails: Record<number, OrganizationDetail> = {
  1: {
    id: 1,
    title: "Zişan Dekor",
    description: "Deniz manzaralı romantik düğün organizasyonu",
    category: "düğün",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    features: [
      "4*4 METRE AYARLANABİLİR BEYAZ PERDE KURULUMU",
      "2*2 METRE ÇİÇEK TAG KURULUMU ",
      "4 ADET BEYAZ AHŞAP SÜTUN",
      "2 ADET PLEKSİ ŞEFFAF ŞAMDAN",
      "1 ADET BEYAZ AHŞAP ORTA SEHPA",
      "NEON YAZI (KİŞİYE ÖZEL TASARLANABİLRİ)",
      "SÖZ TEPSİ SETİ",
      "DAMAT KAHVE SETİ",
      "2 ADET ŞEFFAF PLEKSİ SANDALYE"
    ],
    longDescription: "Zarafetin ve doğallığın buluştuğu bu eşsiz nişan konsepti, özel gününüzü masalsı bir atmosfere dönüştürüyor. Beyaz güller ve yemyeşil yapraklarla süslenmiş çiçek tagı, sevginizi simgeleyen anlamlı bir arka plan oluşturuyor. Şeffaf detaylara sahip modern sandalyeler ve neon yazısı, unutulmaz bir ambiyans sunuyor.",
    gallery: [
      "/images/zisandekor/DSC05420-min.jpeg",
      "/images/zisandekor/DSC05811-min.jpeg",
      "/images/zisandekor/DSC05820-min.jpeg",
      "/images/zisandekor/DSC05831-min.jpeg",
      "/images/zisandekor/DSC05926-min.jpeg"
    ],
    pricing: "En uygun fiyatlar için iletişime geçiniz",
    ekstra: "Fotoğraf Çekimi",
    duration: "Kişiye Özel Neon Yazı",
    location: "Karşılama Panosu"
  },
  2: {
    id: 2,
    title: "Hazeran Dekor",
    description: "Doğayla iç içe masalsı düğün organizasyonu",
    category: "düğün",
    imageUrl: "/images/HazeranDekor/image00001.jpeg",
    features: [
      "Doğal ortamda açık hava düğünü",
      "Rustik dekorasyon",
      "Özel aydınlatma",
      "Profesyonel fotoğraf çekimi",
      "Açık büfe ikram"
    ],
    longDescription: "'Daima Aşk ile' temalı bu özel dekorasyon, romantik anlarınızı unutulmaz kılmak için tasarlandı. Beyaz ve doğal tonlarla sade bir zarafet sunarken, asma yaprakları ve çiçek detaylarıyla doğallığı ön plana çıkarıyor. Neon ışıklı yazı ve minimalist oturma alanı, organizasyonlarınıza modern bir dokunuş katıyor. Bu dekor, düğün, nişan veya özel kutlamalar için mükemmel bir seçimdir.",
    gallery: [
      "/images/HazeranDekor/image00001.jpeg",
      "/images/HazeranDekor/image00003.jpeg",
      "/images/HazeranDekor/image00008.jpeg",
      "/images/HazeranDekor/image00016.jpeg",
      "/images/HazeranDekor/image00017.jpeg",
      "/images/HazeranDekor/image00025.jpeg"
    ],
    pricing: "25.000₺'den başlayan fiyatlarla",
    ekstra: "Fotoğraf Çekimi",
    duration: "Tam gün",
    location: "İstanbul'un seçkin kır düğünü mekanlarında"
  },
  3: {
    id: 3,
    title: "Güneş Dekor",
    description: "Lüks otel salonlarında şık düğün organizasyonu",
    category: "düğün",
    imageUrl: "/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.34.05.jpeg",
    features: [
      "5 yıldızlı otel konforu",
      "Lüks salon dekorasyonu",
      "Premium catering hizmeti",
      "Profesyonel müzik ekibi",
      "VIP hizmet"
    ],
    longDescription: "Lüks ve konforun bir araya geldiği 5 yıldızlı otellerimizde, her detayı düşünülmüş muhteşem bir düğün organizasyonu... Profesyonel ekibimiz ve üst düzey hizmet anlayışımızla hayallerinizi gerçeğe dönüştürüyoruz.",
    gallery: [
      "/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.29.57 (1).jpeg",
      "/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.34.05.jpeg",
      "/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.35.16.jpeg",
      "/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.35.19.jpeg",
      "/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.39.16.jpeg",
      "/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.39.17.jpeg",
    ],
    pricing: "40.000₺'den başlayan fiyatlarla",
    ekstra: "100-1000 kişi",
    duration: "Tam gün",
    location: "İstanbul'un seçkin otellerinde"
  },
  4: {
    id: 4,
    title: "Romantik Nişan",
    description: "Özel tasarlanmış nişan organizasyonu",
    category: "nişan",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070",
    features: [
      "Özel nişan konsepti",
      "Romantik dekorasyon",
      "Profesyonel fotoğraf çekimi",
      "Canlı müzik",
      "Özel ikramlar"
    ],
    longDescription: "Aşkınızı taçlandıracağınız özel gününüzde, romantik detaylarla süslenmiş bir nişan organizasyonu... Her anı özenle planlanmış, unutulmaz bir kutlama için profesyonel ekibimiz yanınızda.",
    gallery: [
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
    ],
    pricing: "20.000₺'den başlayan fiyatlarla",
    ekstra: "50-200 kişi",
    duration: "Yarım gün",
    location: "İstanbul'un seçkin mekanlarında"
  },
  5: {
    id: 5,
    title: "Teras Nişanı",
    description: "Şehir manzaralı teras nişan organizasyonu",
    category: "nişan",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070",
    features: [
      "Şehir manzaralı teras",
      "Işıklandırma tasarımı",
      "Özel kokteyl menüsü",
      "DJ performansı",
      "Profesyonel video çekimi"
    ],
    longDescription: "Şehrin büyüleyici manzarası eşliğinde, modern ve şık bir nişan töreni... Terasımızda gün batımından gece yarısına kadar sürecek unutulmaz bir kutlama sizi bekliyor.",
    gallery: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
    ],
    pricing: "25.000₺'den başlayan fiyatlarla",
    ekstra: "50-150 kişi",
    duration: "Akşam",
    location: "İstanbul'un en güzel teras mekanlarında"
  },
  6: {
    id: 6,
    title: "Geleneksel Kına",
    description: "Geleneksel konseptte kına organizasyonu",
    category: "kına",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    features: [
      "Geleneksel kına ritüelleri",
      "Profesyonel kına ekibi",
      "Türk müziği grubu",
      "Özel kına tepsisi",
      "Geleneksel ikramlar"
    ],
    longDescription: "Geleneklerimizi yaşatan, kültürümüzü yansıtan özel bir kına gecesi... Bindallıdan kına yakma ritüeline, her detayı özenle hazırlanmış muhteşem bir organizasyon.",
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069"
    ],
    pricing: "15.000₺'den başlayan fiyatlarla",
    ekstra: "50-200 kişi",
    duration: "Akşam",
    location: "İstanbul'un tarihi mekanlarında"
  },
  7: {
    id: 7,
    title: "Modern Kına",
    description: "Modern dokunuşlarla kına organizasyonu",
    category: "kına",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070",
    features: [
      "Modern kına konsepti",
      "Özel sahne tasarımı",
      "DJ performansı",
      "Kokteyl servisi",
      "Profesyonel dans gösterisi"
    ],
    longDescription: "Geleneksel kına gecesi ritüellerini modern bir dokunuşla buluşturan özel bir konsept... Şık detaylar ve contemporary tasarımlarla unutulmaz bir gece.",
    gallery: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069"
    ],
    pricing: "18.000₺'den başlayan fiyatlarla",
    ekstra: "50-250 kişi",
    duration: "Akşam",
    location: "İstanbul'un modern mekanlarında"
  },
  8: {
    id: 8,
    title: "Bahçe Kınası",
    description: "Açık havada ferah kına organizasyonu",
    category: "kına",
    imageUrl: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069",
    features: [
      "Bahçe düzenlemesi",
      "Özel aydınlatma",
      "Açık büfe ikram",
      "Canlı müzik",
      "Kır düğünü konsepti"
    ],
    longDescription: "Doğanın içinde, yıldızların altında büyülü bir kına gecesi... Bahçe konseptimizle geleneksel kına gecesi atmosferini açık havada yaşayın.",
    gallery: [
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
    ],
    pricing: "20.000₺'den başlayan fiyatlarla",
    ekstra: "100-300 kişi",
    duration: "Akşam",
    location: "İstanbul'un bahçe mekanlarında"
  },
  9: {
    id: 9,
    title: "Sünnet Şöleni",
    description: "Unutulmaz sünnet düğünü organizasyonu",
    category: "sünnet",
    imageUrl: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2069",
    features: [
      "Sünnet tahtı",
      "Animasyon ekibi",
      "Çocuk menüsü",
      "Sünnet arabası",
      "Profesyonel fotoğraf çekimi"
    ],
    longDescription: "Çocuğunuzun bu özel gününü unutulmaz bir şölene dönüştürüyoruz. Hem çocuklar hem de yetişkinler için özel olarak hazırlanmış eğlenceli bir organizasyon.",
    gallery: [
      "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2069",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
    ],
    pricing: "25.000₺'den başlayan fiyatlarla",
    ekstra: "100-400 kişi",
    duration: "Tam gün",
    location: "İstanbul'un çocuk dostu mekanlarında"
  },
  10: {
    id: 10,
    title: "Eğlenceli Sünnet",
    description: "Çocuk eğlenceleriyle dolu sünnet organizasyonu",
    category: "sünnet",
    imageUrl: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069",
    features: [
      "Palyaço gösterisi",
      "Sihirbaz show",
      "Yüz boyama",
      "Pamuk şeker ve macun",
      "Çocuk oyun alanı"
    ],
    longDescription: "Eğlence dolu bir sünnet organizasyonu... Çocuklar için özel olarak tasarlanmış aktiviteler ve showlarla, unutulmaz bir gün yaratıyoruz.",
    gallery: [
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069",
      "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2069",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
    ],
    pricing: "20.000₺'den başlayan fiyatlarla",
    ekstra: "50-200 kişi",
    duration: "Tam gün",
    location: "İstanbul'un eğlence merkezlerinde"
  },
  11: {
    id: 11,
    title: "Temalı Doğum Günü",
    description: "Özel temalı doğum günü organizasyonu",
    category: "doğum günü",
    imageUrl: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069",
    features: [
      "Özel tema dekorasyonu",
      "Temalı pasta tasarımı",
      "Kostümlü karakterler",
      "Tema uyumlu ikramlar",
      "Profesyonel fotoğraf çekimi"
    ],
    longDescription: "Hayal ettiğiniz temada, en ince detayına kadar düşünülmüş bir doğum günü partisi... Her yaşa uygun konseptlerle unutulmaz bir kutlama deneyimi sunuyoruz.",
    gallery: [
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
    ],
    pricing: "10.000₺'den başlayan fiyatlarla",
    ekstra: "20-100 kişi",
    duration: "Yarım gün",
    location: "İstanbul'un özel parti mekanlarında"
  },
  12: {
    id: 12,
    title: "Sürpriz Doğum Günü",
    description: "Sürprizlerle dolu doğum günü organizasyonu",
    category: "doğum günü",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070",
    features: [
      "Gizli planlama desteği",
      "Özel sürpriz anı",
      "Profesyonel video çekimi",
      "Özel menü",
      "Canlı müzik"
    ],
    longDescription: "Sevdikleriniz için unutulmaz bir sürpriz doğum günü organizasyonu... Her detayı gizlilikle planlanan, muhteşem bir kutlama deneyimi.",
    gallery: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
    ],
    pricing: "12.000₺'den başlayan fiyatlarla",
    ekstra: "30-150 kişi",
    duration: "Yarım gün",
    location: "İstanbul'un seçkin mekanlarında"
  },
  13: {
    id: 13,
    title: "Lüks Baby Shower",
    description: "Lüks konseptli baby shower organizasyonu",
    category: "özel",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070",
    features: [
      "Özel baby shower dekorasyonu",
      "Gender reveal show",
      "Özel ikramlar",
      "Oyun aktiviteleri",
      "Profesyonel fotoğraf çekimi"
    ],
    longDescription: "Anne adayları için özel olarak tasarlanmış lüks bir baby shower deneyimi... Zarif dekorasyonlar ve keyifli aktivitelerle dolu unutulmaz bir kutlama.",
    gallery: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069"
    ],
    pricing: "15.000₺'den başlayan fiyatlarla",
    ekstra: "20-50 kişi",
    duration: "Yarım gün",
    location: "İstanbul'un butik mekanlarında"
  },
  14: {
    id: 14,
    title: "Mezuniyet Partisi",
    description: "Özel mezuniyet kutlaması organizasyonu",
    category: "özel",
    imageUrl: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2069",
    features: [
      "Özel mezuniyet dekorasyonu",
      "DJ performansı",
      "Kokteyl servisi",
      "Fotoğraf köşesi",
      "After party organizasyonu"
    ],
    longDescription: "Eğitim hayatınızın bu önemli dönüm noktasını kutlamak için özel olarak tasarlanmış bir organizasyon... Arkadaşlarınızla unutulmaz bir mezuniyet partisi deneyimi.",
    gallery: [
      "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2069",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070"
    ],
    pricing: "20.000₺'den başlayan fiyatlarla",
    ekstra: "100-500 kişi",
    duration: "Tam gün",
    location: "İstanbul'un popüler parti mekanlarında"
  },
  15: {
    id: 15,
    title: "Yıldönümü Kutlaması",
    description: "Romantik yıldönümü organizasyonu",
    category: "özel",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070",
    features: [
      "Romantik dekorasyon",
      "Özel menü",
      "Canlı müzik",
      "Sürpriz gösteriler",
      "Özel anı fotoğraf çekimi"
    ],
    longDescription: "Aşkınızı kutlamak için özel olarak tasarlanmış romantik bir organizasyon... Çiftlere özel sürprizler ve unutulmaz anılarla dolu bir yıldönümü kutlaması.",
    gallery: [
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
    ],
    pricing: "15.000₺'den başlayan fiyatlarla",
    ekstra: "2-50 kişi",
    duration: "Akşam",
    location: "İstanbul'un romantik mekanlarında"
  }
};

export const categories = [
  { id: 'tümü', label: 'Tümü' },
  { id: 'düğün', label: 'Düğün' },
  { id: 'nişan', label: 'Nişan' },
  { id: 'kına', label: 'Kına' },
  { id: 'sünnet', label: 'Sünnet' },
  { id: 'doğum günü', label: 'Doğum Günü' },
  { id: 'özel', label: 'Özel Günler' }
]; 