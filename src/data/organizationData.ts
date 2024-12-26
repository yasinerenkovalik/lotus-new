export interface Organization {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

export interface OrganizationDetail extends Organization {
  features: string[];
  longDescription: string;
  gallery: MediaItem[];
  pricing: string;
  ekstra: string;
  duration: string;
  location: string;
}

export const organizationDetails: Record<number, OrganizationDetail> = {
  1: {
    id: 1,
    title: "Zişan Dekor",
    description: "Deniz manzaralı romantik düğün organizasyonu",
    category: "düğün",
    imageUrl: "/images/zisandekor/DSC05420-min.jpg",
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
    longDescription: "Zarafetin ve doğallığın buluştuğu bu eşsiz nişan konsepti...",
    gallery: [
      { type: 'image', url: '/images/zisandekor/DSC05420-min.jpg' },
      { type: 'image', url: '/images/zisandekor/DSC05811-min.jpg' },
      { type: 'image', url: '/images/zisandekor/DSC05820-min.jpg' },
      { type: 'image', url: '/images/zisandekor/DSC05831-min.jpg' },
      { type: 'image', url: '/images/zisandekor/DSC05926-min.jpg' }
    ],
    pricing: "En uygun fiyatlar için iletişime geçiniz",
    ekstra: "Fotoğraf Çekimi",
    duration: "Kişiye Özel Neon Yazı",
    location: "Karşılama Panosu"
  },
  2: {
    id: 2,
    title: "Güneş Dekor",
    description: "Modern ve şık nişan organizasyonu",
    category: "nişan",
    imageUrl: "/images/HazeranDekor/image00001.jpeg",
    features: [
      "4*4 METRE BEYAZ PERDE KURULUMU",
      "2*2 METRE YAPAY ÇİÇEK DUVAR",
      "4 ADET GOLD RENK SÜTUN",
      "2 ADET GOLD ŞAMDAN",
      "1 ADET GOLD ORTA SEHPA",
      "NEON YAZI (KİŞİYE ÖZEL)",
      "SÖZ TEPSİ SETİ",
      "DAMAT KAHVE SETİ",
      "2 ADET GOLD SANDALYE"
    ],
    longDescription: "Modern çizgiler ve gold detayların buluştuğu bu özel konsept, nişan organizasyonunuzu benzersiz kılıyor. Yapay çiçek duvarı ve özel tasarım neon yazı ile instagram'lık kareler yakalayın.",
    gallery: [
     
      { type: 'image', url: '/images/HazeranDekor/image00001.jpeg' },
      { type: 'image', url: '/images/HazeranDekor/image00003.jpeg' },
      { type: 'image', url: '/images/HazeranDekor/image00008.jpeg' },
      { type: 'image', url: '/images/HazeranDekor/image00016.jpeg' },
      { type: 'image', url: '/images/HazeranDekor/image00017.jpeg' },
      { type: 'image', url: '/images/HazeranDekor/image00025.jpeg' }
    ],
    pricing: "En uygun fiyatlar için iletişime geçiniz",
    ekstra: "Fotoğraf Çekimi",
    duration: "Kişiye Özel Neon Yazı",
    location: "Karşılama Panosu"
  },
  3: {
    id: 3,
    title: "Hazeran Dekor",
    description: "Romantik ve zarif nişan konsepti",
    category: "nişan",
    imageUrl: "/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.34.05.jpeg",
    features: [
      "4*4 METRE KREM RENK PERDE",
      "2*2 METRE KURU ÇİÇEK DUVAR",
      "4 ADET ROSE GOLD SÜTUN",
      "2 ADET KRİSTAL ŞAMDAN",
      "1 ADET AYNALI ORTA MASA",
      "NEON YAZI (İSTEĞE ÖZEL)",
      "SÖZ TEPSİ SETİ",
      "DAMAT KAHVE SETİ",
      "2 ADET ŞEFFAF PLEKSİ SANDALYE"
    ],
    longDescription: "Kuru çiçeklerin doğal güzelliği ve rose gold detayların zarafeti ile hazırlanan bu konsept, romantik bir nişan atmosferi yaratıyor. Kristal aksesuarlar ve özel aydınlatma ile büyüleyici anlar yaşayın.",
    gallery: [
      { type: 'image', url: '/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.29.57 (1).jpeg' },
      { type: 'image', url: '/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.34.05.jpeg' },
      { type: 'image', url: '/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.35.16.jpeg' },
      { type: 'image', url: '/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.35.19.jpeg' },
      { type: 'image', url: '/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.39.16.jpeg' },
      { type: 'image', url: '/images/gunesdekor/WhatsApp Image 2024-12-26 at 09.39.17.jpeg' }
    ],
    pricing: "En uygun fiyatlar için iletişime geçiniz",
    ekstra: "Fotoğraf Çekimi",
    duration: "Kişiye Özel Neon Yazı",
    location: "Karşılama Panosu"
  },
  4: {
    id: 4,
    title: "Lalem Dekor",
    description: "Minimalist ve şık nişan tasarımı",
    category: "nişan",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070",
    features: [
      "4*4 METRE SİYAH PERDE",
      "2*2 METRE YAPAY ORKIDE DUVAR",
      "4 ADET SİYAH METAL SÜTUN",
      "2 ADET SİYAH ŞAMDAN",
      "1 ADET MERMER DESENLI ORTA MASA",
      "NEON YAZI (KİŞİYE ÖZEL)",
      "SÖZ TEPSİ SETİ",
      "DAMAT KAHVE SETİ",
      "2 ADET SİYAH KADIFE SANDALYE"
    ],
    longDescription: "Modern çizgiler ve minimalist tasarımın buluştuğu bu konsept, sade ve şık bir nişan organizasyonu sunuyor. Siyah ve beyazın uyumu, orkidelerin zarafeti ile tamamlanıyor.",
    gallery: [
      { type: 'video', url: '/images/zisandekor/WhatsApp Video 2024-12-26 at 09.39.56.mp4' },
      { type: 'image', url: '/images/lalemdekor/WhatsApp Image 2024-12-26 at 09.39.38.jpeg' },
      { type: 'image', url: '/images/lalemdekor/WhatsApp Image 2024-12-26 at 09.39.38.jpeg' },
      { type: 'image', url: '/images/lalemdekor/WhatsApp Image 2024-12-26 at 09.39.51.jpeg' }
    ],
    pricing: "En uygun fiyatlar için iletişime geçiniz",
    ekstra: "Fotoğraf Çekimi",
    duration: "Kişiye Özel Neon Yazı",
    location: "Karşılama Panosu"
  },
 
};

export const organizations = Object.values(organizationDetails);

export const categories = [
  { id: 'tümü', label: 'Tümü' },
  { id: 'düğün', label: 'Düğün' },
  { id: 'nişan', label: 'Nişan' },
  { id: 'kına', label: 'Kına' },
  { id: 'sünnet', label: 'Sünnet' },
  { id: 'doğum günü', label: 'Doğum Günü' },
  { id: 'özel', label: 'Özel Günler' }
]; 