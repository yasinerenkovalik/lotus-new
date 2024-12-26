export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Romantik Düğün Organizasyonu",
    description: "Düğün törende güzel bir fotoğraf",
    category: "düğün",
    imageUrl: "/images/galery/image00004.jpeg"
  },
  {
    id: 2,
    title: "Özel Nişan Töreni",
    description: "Nişanlarınızı unutulmaz yapalım",
    category: "nişan",
    imageUrl: "/images/galery/image00023.jpeg"
  },
  {
    id: 3,
    title: "Geleneksel Kına Gecesi",
    description: "Geleneklerimizi yaşatan özel kına organizasyonu",
    category: "kına",
    imageUrl: "/images/galery/image00029.jpeg"
  },
  {
    id: 4,
    title: "Hediyelik eşya ",
    description: "Unutulmaz günlerinizde hediyelik eşya organizasyonu",
    category: "özel",
    imageUrl: "/images/galery/image00032.jpeg"
  },
  {
    id: 5,
    title: "Nişan Günü Partisi",
    description: "Eğlenceli doğum günü organizasyonu",
    category: "nişan",
    imageUrl: "/images/galery/image00036.jpeg"
  },
  {
    id: 6,
    title: "İsteme",
    description: "İsteme organizasyonu",
    category: "özel",
    imageUrl: "/images/galery/WhatsApp Image 2024-12-26 at 09.29.57.jpeg"
  },
  {
    id: 7,
    title: "Nişan ",
    description: "Özel nişan  organizasyonu",
    category: "nişan",
    imageUrl: "/images/galery/WhatsApp Image 2024-12-26 at 09.36.49.jpeg"
  }
];

export const categories = [
  { id: 'tümü', label: 'Tümü' },
  { id: 'düğün', label: 'Düğün' },
  { id: 'nişan', label: 'Nişan' },
  { id: 'kına', label: 'Kına' },
  { id: 'sünnet', label: 'Sünnet' },
  { id: 'doğum günü', label: 'Doğum Günü' },
  { id: 'özel', label: 'Özel Günler' }
]; 