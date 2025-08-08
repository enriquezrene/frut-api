import { PrismaClient } from '@prisma/client'

export async function seedCategoryProducts(prisma: PrismaClient) {
  await prisma.caja.createMany({
    data: [
      {
      "nombre": "Energía matutina",
      "descripcion": "Caja perfecta para iniciar el día con energía natural, rica en vitamina C y potasio.",
      "precio": 1.00,
      "emoji": "bolt",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/energia-matutina.jpg"
    },
    {
      "nombre": "Defensa máxima",
      "descripcion": "Refuerza tu sistema inmunológico con antioxidantes y nutrientes esenciales.",
      "precio": 1.00,
      "emoji": "shield",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/defensa-maxima.jpg"
    },
    {
      "nombre": "Corazón saludable",
      "descripcion": "Favorece la salud cardiovascular con grasas saludables y antioxidantes.",
      "precio": 1.00,
      "emoji": "favorite",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/corazon-saludable.jpg"
    },
    {
      "nombre": "Keto verde",
      "descripcion": "Caja baja en carbohidratos ideal para dietas cetogénicas.",
      "precio": 1.00,
      "emoji": "eco",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/keto-verde.jpg"
    },
    {
      "nombre": "Veggie power",
      "descripcion": "Fuente de energía vegetal rica en fibra, vitaminas y minerales.",
      "precio": 1.00,
      "emoji": "local_florist",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/veggie-power.jpg"
    },
    {
      "nombre": "Detox dulce",
      "descripcion": "Refrescante combinación para depurar y revitalizar el organismo.",
      "precio": 1.00,
      "emoji": "water_drop",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/detox-dulce.jpg"
    },
    {
      "nombre": "Mini chef (kids)",
      "descripcion": "Snacks saludables y divertidos para los más pequeños.",
      "precio": 1.00,
      "emoji": "child_friendly",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/mini-chef.jpg"
    },
    {
      "nombre": "Fiesta tropical",
      "descripcion": "Explosión de sabores tropicales en cada bocado.",
      "precio": 1.00,
      "emoji": "celebration",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/fiesta-tropical.jpg"
    },
    {
      "nombre": "Snack de oficina",
      "descripcion": "Snack balanceado para mantener la energía durante la jornada laboral.",
      "precio": 1.00,
      "emoji": "work",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/snack-de-oficina.jpg"
    },
    {
      "nombre": "Invierno resistente",
      "descripcion": "Nutrientes y vitaminas para mantenerte fuerte en la temporada fría.",
      "precio": 1.00,
      "emoji": "ac_unit",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/invierno-resistente.jpg"
    },
    {
      "nombre": "Verano refrescante",
      "descripcion": "Caja fresca e hidratante perfecta para días calurosos.",
      "precio": 1.00,
      "emoji": "wb_sunny",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/verano-refrescante.jpg"
    },
    {
      "nombre": "Arcoíris nutritivo",
      "descripcion": "Combinación colorida que aporta una amplia gama de vitaminas y minerales.",
      "precio": 1.00,
      "emoji": "palette",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/arcoiris-nutritivo.jpg"
    },
    {
      "nombre": "Viaje gastronómico",
      "descripcion": "Frutas exóticas para un viaje de sabores internacionales.",
      "precio": 1.00,
      "emoji": "local_dining",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/viaje-gastronomico.jpg"
    },
    {
      "nombre": "Good night box",
      "descripcion": "Caja relajante para favorecer un descanso reparador.",
      "precio": 1.00,
      "emoji": "bedtime",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/good-night-box.jpg"
    },
    {
      "nombre": "Chef en casa (ensalada césar)",
      "descripcion": "Ingredientes frescos para preparar una deliciosa ensalada César en casa.",
      "precio": 1.00,
      "emoji": "restaurant",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/chef-en-casa.jpg"
    },
    {
      "nombre": "Regalo saludable (premium)",
      "descripcion": "Opción premium para regalar salud y sabor en una presentación especial.",
      "precio": 1.00,
      "emoji": "card_giftcard",
      "imagenUrl": "https://enriquezrene.github.io/frut-api/images/regalo-saludable.jpg"
    }
    ],
    skipDuplicates: true,
  })
}