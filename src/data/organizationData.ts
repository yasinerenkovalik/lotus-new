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
    description: "Yeşil ve beyazın muhteşem uyumu yaz",
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
    description: "Sadelikten yana olanlara… ",
    category: "nişan",
    imageUrl: "/images/HazeranDekor/image00001.jpeg",
    features: [
      "Üç adet ahşap güneş panel",
      "Dört adet ahşap beyaz sütun",
      "İki adet pleksi şeffaf şamdan ",
      "İki adet puf koltuk",
      "Söz masası",
      "Söz tepsi seti",
      "Damat kahve seti",
      "İki adet spot ışık",
      "Üç adet beyaz panel  çiçeği",
      "Neon Yazı (kişiye özel ayrı fiyatlandırılır)"
    ],
    longDescription: "Modern çizgiler ve gold detayların buluştuğu bu özel konsept, nişan organizasyonunuzu benzersiz kılıyor. Yapay çiçek duvarı ve özel tasarım neon yazı ile instagram'lık kareler yakalayın.",
    gallery: [
     
      { type: 'image', url: '/images/HazeranDekor/image00001.jpeg' },
      { type: 'image', url: '/images/HazeranDekor/image00003.jpeg' },
      { type: 'image', url: '/images/HazeranDekor/image00008.jpeg' },
      { type: 'image', url: '/images/HazeranDekor/image00016.jpeg' },
      { type: 'image', url: '/images/HazeranDekor/image00017.jpeg' },
      { type: 'image', url: '/images/HazeranDekor/image00025.jpeg' },
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
      "Üç adet ahşap güneş panel",
      "Dört adet ahşap beyaz sütun",
      "İki adet pleksi şeffaf şamdan ",
      "İki adet puf koltuk",
      "Söz masası",
      "Söz tepsi seti",
      "Damat kahve seti",
      "İki adet spot ışık",
      "Üç adet beyaz panel  çiçeği",
      "Neon Yazı (kişiye özel ayrı fiyatlandırılır)"
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
    imageUrl: "/images/lalemdekor/WhatsApp Image 2024-12-26 at 09.39.38.jpeg",
    features: [
      "2*2 metre beyaz perde kurulumu",
      "Beyaz yapay çiçekler",
      "Led ışıklandırma ",
      "İki adet şeffaf pleksi sandalye",
      "Orta sehpa ",
      "Söz tepsi seti",
      "Damat kahve seti",
      "DAMAT KAHVE SETİ",
      "Neon yazı (kişiye özeL neon yazılar ayrı fiyatlandırılır )"
    ],
    longDescription: "Modern çizgiler ve minimalist tasarımın buluştuğu bu konsept, sade ve şık bir nişan organizasyonu sunuyor. Siyah ve beyazın uyumu, orkidelerin zarafeti ile tamamlanıyor.",
    gallery: [
      { type: 'video', url: '/images/zisandekor/WhatsApp Video 2024-12-26 at 09.39.56.mp4' },
      { type: 'image', url: '/images/lalemdekor/WhatsApp Image 2024-12-26 at 09.39.38.jpeg' },
      { type: 'image', url: '/images/lalemdekor/WhatsApp Image 2024-12-26 at 09.39.38.jpeg' },
      { type: 'image', url: '/images/lalemdekor/WhatsApp Image 2024-12-26 at 09.39.51.jpeg' },
      { type: 'image', url: '/images/HazeranDekor/WhatsApp Image 2025-01-03 at 16.01.46 (1).jpeg' },
      { type: 'image', url: '/images/HazeranDekor/WhatsApp Image 2025-01-03 at 16.01.46.jpeg' },
      { type: 'video', url: '/images/HazeranDekor/WhatsApp Video 2025-01-03 at 16.00.08.mp4' }
    ],
    pricing: "En uygun fiyatlar için iletişime geçiniz",
    ekstra: "Fotoğraf Çekimi",
    duration: "Kişiye Özel Neon Yazı",
    location: "Karşılama Panosu"
  },
  5: {
    id: 5,
    title: "Canli Çiçek Dekor",
    description: "Minimalist ve şık nişan tasarımı",
    category: "nişan",
    imageUrl: "/images/canlicicek/WhatsApp Image 2025-04-18 at 16.59.03.jpeg",
    features: [
      "Canlı çiçekler ile her eve ve zevke uygun tasarımlar oluşturuyoruz",
      
    ],
    longDescription: "Modern çizgiler ve minimalist tasarımın buluştuğu bu konsept, sade ve şık bir nişan organizasyonu sunuyor.",
    gallery: [
      { type: 'image', url: '/images/canlicicek/WhatsApp Image 2025-04-18 at 16.59.03 (1).jpeg' },
      { type: 'image', url: '/images/canlicicek/WhatsApp Image 2025-04-18 at 16.59.03.jpeg' },
      { type: 'video', url: '/images/canlicicek/WhatsApp Video 2025-04-18 at 16.59.03.mp4' },
      
    ],
    pricing: "En uygun fiyatlar için iletişime geçiniz",
    ekstra: "Fotoğraf Çekimi",
    duration: "Kişiye Özel Neon Yazı",
    location: "Karşılama Panosu"
  },
  6: {
    id: 6,
    title: "Afrodit Dekor",
    description: "Yeşil ve beyazın muhteşem uyumu ",
    category: "nişan",
    imageUrl: "/images/afrodit/WhatsApp Image 2025-04-18 at 17.05.47.jpeg",
    features: [
      "Beyaz perde kurulumu" ,
"Canlı çiçek ve dallarla şık tasarım",
"4 adet ahşap sütun",
"2 adet şeffaf sandalye ",
"Orta sehpa ",
"Söz tepsi seti",
"Damat kahve seti",
"2 adet saksıda canlı çiçek" ,
"Spot ışıklandırmalar",
      
    ],
    longDescription: "Modern çizgiler ve minimalist tasarımın buluştuğu bu konsept, sade ve şık bir nişan organizasyonu sunuyor.",
    gallery: [
      { type: 'image', url: '/images/afrodit/WhatsApp Image 2025-04-18 at 17.05.47.jpeg' },
      // { type: 'video', url: '/images/afrodit/WhatsApp Video 2025-04-18 at 17.05.47.mp4' },
      
    ],
    pricing: "En uygun fiyatlar için iletişime geçiniz",
    ekstra: "Fotoğraf Çekimi",
    duration: "Kişiye Özel Neon Yazı",
    location: "Karşılama Panosu"
  },
  7: {
    id: 7,
    title: "Aşk Bahçesi",
    description: "Minimalist ve şık nişan tasarımı",
    category: "nişan",
    imageUrl: "/images/askbahcesi/WhatsApp Image 2025-04-18 at 17.11.48.jpeg",
    features: [
      "Canlı çiçekler ile her eve ve zevke uygun tasarımlar oluşturuyoruz",
     " Beyaz perde kurulumu ",
"Renkli yapay çiçekler",
"4 adet ahşap sütun",
"2 adet şeffaf sandalye ",
"Orta sehpa ",
"Söz tepsi seti",
"Damat kahve seti",
"2 adet saksıda renkli çiçek ",
"Spot ışıklandırmalar"
      
    ],
    longDescription: "Doğanın tazeliği ve çiçeklerin romantizmiyle çevrili bu köşe, ‘Daima Aşkla’ sözüne ilham oluyor. Modern dokunuşlarla süslenmiş bu kemerli dekor, özel anlarınızı unutulmaz kılıyor.",
    gallery: [
      { type: 'image', url: '/images/askbahcesi/WhatsApp Image 2025-04-18 at 17.11.48.jpeg' },
     /*{ type: 'video', url: '/images/askbahcesi/WhatsApp Video 2025-04-18 at 17.11.49.mp4' },*/
      
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