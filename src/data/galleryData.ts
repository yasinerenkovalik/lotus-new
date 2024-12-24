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
    description: "Sahilde unutulmaz bir düğün töreni",
    category: "düğün",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
  },
  {
    id: 2,
    title: "Özel Nişan Töreni",
    description: "Lüks mekanda şık bir nişan organizasyonu",
    category: "nişan",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070"
  },
  {
    id: 3,
    title: "Geleneksel Kına Gecesi",
    description: "Geleneklerimizi yaşatan özel kına organizasyonu",
    category: "kına",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
  },
  {
    id: 4,
    title: "Sünnet Düğünü",
    description: "Unutulmaz sünnet organizasyonu",
    category: "sünnet",
    imageUrl: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=2069"
  },
  {
    id: 5,
    title: "Doğum Günü Partisi",
    description: "Eğlenceli doğum günü organizasyonu",
    category: "doğum günü",
    imageUrl: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=2069"
  },
  {
    id: 6,
    title: "Baby Shower",
    description: "Özel baby shower organizasyonu",
    category: "özel",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070"
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