export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Polishing' | 'Buffing' | 'Damage Repair';
  description: string;
  beforeImage?: string;
  afterImage: string;
  isVideo?: boolean;
  videoUrl?: string;
  turnaround?: string;
}

export const BUSINESS_INFO = {
  name: 'N.G SHINING ALLOY',
  tagline: 'Restore the Shine. Revive Your Rims.',
  subtitle:
    "Professional Alloy Wheel Polishing, Buffing and Damage Repairing – Giving Your Car's Wheels a Brand-New Look.",
  category: 'Alloy Wheel Polishing, Buffing and Repairing',
  phone: '9779755256',
  phoneFormatted: '+91 97797 55256',
  whatsapp: '9779755256',
  whatsappUrl:
    'https://wa.me/919779755256?text=Hello%20N.G%20SHINING%20ALLOY%2C%20I%20would%20like%20to%20inquire%20about%20alloy%20wheel%20polishing%2C%20buffing%20or%20repair%20services.',
  address: {
    street: 'Rishi Colony, Street No. 7, Block No. 11, Near Nadi Wala Pull, Opposite Guru Teg Bahadur Tractor Market',
    city: 'Patiala',
    state: 'Punjab',
    country: 'India',
    full: 'Rishi Colony, Street No. 7, Block No. 11, Near Nadi Wala Pull, Opposite Guru Teg Bahadur Tractor Market, Patiala, Punjab, India',
  },
  timings: 'Monday – Sunday: 9:00 AM – 8:30 PM',
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=N.G+SHINING+ALLOY+Rishi+Colony+Street+7+Near+Nadi+Wala+Pull+Opposite+Guru+Teg+Bahadur+Tractor+Market+Patiala+Punjab',
  // Default embed for N.G SHINING ALLOY in Patiala Punjab area
  defaultMapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.60460368305!2d76.31498118021008!3d30.339798544464136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86530db5%3A0x93cc1f72eae1c318!2sPatiala%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'damage-repair',
    title: 'Alloy Wheel Damage Repairing',
    description:
      'Repair damaged and scratched alloy wheels and restore their appearance with precision machining and alloy welding.',
    features: [
      'Curb rash and deep road scratch elimination',
      'Radial bend and lip distortion correction',
      'Cracked alloy structural TIG repair',
      'Factory alloy integrity and balance inspection',
    ],
    image: '/src/assets/images/service_wheel_repair_1793722762479.jpg',
    badge: 'Precision Restoring',
  },
  {
    id: 'polishing',
    title: 'Alloy Wheel Polishing',
    description:
      'Professional polishing to bring back the shine and beauty of your alloy wheels with mirror diamond clarity.',
    features: [
      'Multi-stage mirror chrome & diamond finish',
      'Diamond-cut spoke face revitalization',
      'Stubborn oxidation, corrosion & pit removal',
      'Deep hydrophobic protective sealant applied',
    ],
    image: '/src/assets/images/service_wheel_polishing_1793722762769.jpg',
    badge: 'Mirror Finish',
  },
  {
    id: 'buffing',
    title: 'Alloy Wheel Buffing',
    description:
      'High-quality buffing to achieve a smooth, glossy and premium finish that enhances the luxury presence of your vehicle.',
    features: [
      'Micro-abrasive orbital high-speed buffing',
      'Haze, swirl marks and hairline scratch removal',
      'Silk-smooth tactile liquid metal gloss',
      'Long-lasting brake dust and UV barrier shield',
    ],
    image: '/src/assets/images/service_wheel_buffing_1793722763879.jpg',
    badge: 'High Gloss Buff',
  },
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Mercedes-AMG Diamond-Cut 20" Forged Wheel',
    category: 'Polishing',
    description:
      'Restored cloudy, oxidized spokes to a dazzling diamond mirror polish with protective sealant.',
    beforeImage: '/src/assets/images/service_wheel_repair_1793722762479.jpg',
    afterImage: '/src/assets/images/hero_alloy_wheels_1793722761546.jpg',
    turnaround: 'Same Day Restored',
  },
  {
    id: 'gal-2',
    title: 'BMW M-Sport Concave 19" Full Buff & Polish',
    category: 'Buffing',
    description:
      'Eliminated swirl haze and minor curb scratches with precision dual-action rotary buffing compound.',
    beforeImage: '/src/assets/images/service_wheel_buffing_1793722763879.jpg',
    afterImage: '/src/assets/images/gallery_alloy_before_after_1793722763437.jpg',
    turnaround: '4 Hours Process',
  },
  {
    id: 'gal-3',
    title: 'Audi RS Chrome Alloy Deep Rash Repair',
    category: 'Damage Repair',
    description:
      'Rebuilt damaged perimeter lip from severe parking curb bite and restored high-gloss chrome edge.',
    beforeImage: '/src/assets/images/service_wheel_repair_1793722762479.jpg',
    afterImage: '/src/assets/images/service_wheel_polishing_1793722762769.jpg',
    turnaround: '1 Day Turnaround',
  },
  {
    id: 'gal-4',
    title: 'Range Rover 22" Dynamic Gloss Wheel Buffing',
    category: 'Buffing',
    description:
      'Hand-buffed multi-spoke rim channels removing heavy embedded metallic brake dust and dull film.',
    beforeImage: '/src/assets/images/service_wheel_buffing_1793722763879.jpg',
    afterImage: '/src/assets/images/hero_alloy_wheels_1793722761546.jpg',
    turnaround: '3 Hours Process',
  },
  {
    id: 'gal-5',
    title: 'Vossen Custom High-Polish Concave Rim',
    category: 'Polishing',
    description:
      'Ultra deep-dish mirror reflection buffing and polishing with high-spec metal brightening compound.',
    beforeImage: '/src/assets/images/gallery_alloy_before_after_1793722763437.jpg',
    afterImage: '/src/assets/images/service_wheel_polishing_1793722762769.jpg',
    turnaround: '5 Hours Process',
  },
];
