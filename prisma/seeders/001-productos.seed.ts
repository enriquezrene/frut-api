import { PrismaClient } from '@prisma/client'

export async function seedProductos(prisma: PrismaClient) {
  await prisma.producto.createMany({
    data: [
      {
        "nombre": "Plátanos",
        "descripcion": "Fruta amarilla y alargada, rica en potasio y energía.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/platanos.jpg"
      },
      {
        "nombre": "Naranjas",
        "descripcion": "Cítrico de color naranja, conocido por su alto contenido de vitamina C.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/naranjas.jpg"
      },
      {
        "nombre": "Kiwi",
        "descripcion": "Fruta pequeña de pulpa verde y semillas negras, con sabor agridulce.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/kiwi.jpg"
      },
      {
        "nombre": "Manzana",
        "descripcion": "Fruta crujiente, dulce o ácida, una de las más consumidas en el mundo.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/manzanas.jpg"
      },
      {
        "nombre": "Fresas",
        "descripcion": "Pequeña fruta roja y dulce, ideal para postres y ensaladas.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/fresas.jpg"
      },
      {
        "nombre": "Arándanos",
        "descripcion": "Pequeñas bayas azules, ricas en antioxidantes y sabor ligeramente ácido.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/arandanos.jpg"
      },
      {
        "nombre": "Granada",
        "descripcion": "Fruta de cáscara dura con cientos de semillas jugosas y rojas en su interior.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/granada.jpg"
      },
      {
        "nombre": "Piña",
        "descripcion": "Fruta tropical de sabor dulce y ácido, con una piel espinosa.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/pina.jpg"
      },
      {
        "nombre": "Mango",
        "descripcion": "Fruta tropical jugosa y dulce con un hueso grande en el centro.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/mango.jpg"
      },
      {
        "nombre": "Maracuyá",
        "descripcion": "Fruta de la pasión de sabor intenso y agrio, con semillas comestibles.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/maracuya.jpg"
      },
      {
        "nombre": "Sandía",
        "descripcion": "Fruta grande y redonda, muy refrescante, con pulpa roja y jugosa.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/sandia.jpg"
      },
      {
        "nombre": "Melón",
        "descripcion": "Fruta dulce y aromática, con pulpa de color anaranjado o verde.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/melon.jpg"
      },
      {
        "nombre": "Mandarinas",
        "descripcion": "Cítrico pequeño similar a la naranja, fácil de pelar y de sabor dulce.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/mandarinas.jpg"
      },
      {
        "nombre": "Cerezas",
        "descripcion": "Pequeña fruta roja y brillante, con un hueso en el centro.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/cerezas.jpg"
      },
      {
        "nombre": "Uvas sin semillas",
        "descripcion": "Pequeñas bayas que crecen en racimos, dulces y sin semillas para mayor comodidad.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/uvas-sin-semillas.jpg"
      },
      {
        "nombre": "Pitahaya",
        "descripcion": "Fruta exótica de aspecto llamativo, con pulpa dulce y semillas negras.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/pitahaya.jpg"
      },
      {
        "nombre": "Rambután",
        "descripcion": "Fruta asiática con una cáscara peluda y una pulpa dulce similar al lichi.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/rambutan.jpg"
      },
      {
        "nombre": "Guayaba",
        "descripcion": "Fruta tropical de aroma fuerte, con pulpa dulce y muchas semillas pequeñas.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/guayaba.jpg"
      },
      {
        "nombre": "Carambola",
        "descripcion": "Fruta en forma de estrella al cortarla, de sabor agridulce.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/carambola.jpg"
      },
      {
        "nombre": "Lichi",
        "descripcion": "Fruta pequeña de cáscara rosada, con pulpa blanca y jugosa.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/lichi.jpg"
      },
      {
        "nombre": "Limones",
        "descripcion": "Cítrico ácido de color amarillo, esencial en la cocina y para bebidas.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/limones.jpg"
      },
      {
        "nombre": "Limas",
        "descripcion": "Cítrico pequeño y verde, de sabor muy ácido, similar al limón.",
        "precio": 1.00,
        "categoria": "frutas",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/limas.jpg"
      },
      {
        "nombre": "Espinacas",
        "descripcion": "Verdura de hoja verde oscuro, muy nutritiva y versátil en la cocina.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/espinacas.jpg"
      },
      {
        "nombre": "Brócoli",
        "descripcion": "Vegetal con forma de arbolito, rico en vitaminas y minerales.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/brocoli.jpg"
      },
      {
        "nombre": "Aguacate",
        "descripcion": "Fruta cremosa y nutritiva, con una piel rugosa y de color oscuro.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/aguacate-hass.jpg"
      },
      {
        "nombre": "Tomates cherry",
        "descripcion": "Pequeños tomates redondos y dulces, perfectos para ensaladas.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/tomates-cherry.jpg"
      },
      {
        "nombre": "Tomates",
        "descripcion": "Tomates redondos y dulces, perfectos para ensaladas.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/tomates.jpg"
      },
      {
        "nombre": "Pepino",
        "descripcion": "Vegetal alargado y refrescante, ideal para ensaladas y bebidas.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/pepino.jpg"
      },
      {
        "nombre": "Apio",
        "descripcion": "Tallo alargado y crujiente, con un sabor distintivo y refrescante.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/apio.jpg"
      },
      {
        "nombre": "Zanahorias",
        "descripcion": "Zanahorias pequeñas y dulces, perfectas para picar o acompañar.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/zanahorias-baby.jpg"
      },
      {
        "nombre": "Remolacha",
        "descripcion": "Raíz comestible de color morado intenso, dulce y terrosa.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/remolacha.jpg"
      },
      {
        "nombre": "Kale",
        "descripcion": "Verdura de hoja rizada, conocida como 'col rizada', muy nutritiva.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/kale.jpg"
      },
      {
        "nombre": "Cebolla morada",
        "descripcion": "Variedad de cebolla con un sabor más suave y dulce, ideal para ensaladas.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/cebolla-morada.jpg"
      },
      {
        "nombre": "Espárragos",
        "descripcion": "Tallos verdes, tiernos y sabrosos, que se cocinan al vapor o a la parrilla.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/esparragos.jpg"
      },
      {
        "nombre": "Ajo",
        "descripcion": "Bulbo aromático con un sabor fuerte y picante, esencial en la cocina.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/ajo.jpg"
      },
      {
        "nombre": "Col rizada",
        "descripcion": "Verdura de hoja verde y rizada, de sabor intenso y textura robusta.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/col-rizada.jpg"
      },
      {
        "nombre": "Calabaza",
        "descripcion": "Fruta de cáscara dura, con pulpa anaranjada y dulce, utilizada en platos dulces y salados.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/calabaza.jpg"
      },
      {
        "nombre": "Pimientos",
        "descripcion": "Pimiento dulce y crujiente, con un color vibrante que añade sabor y color.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/pimiento-amarillo.jpg"
      },
      {
        "nombre": "Lechuga romana",
        "descripcion": "Variedad de lechuga de hojas alargadas y crujientes, base de muchas ensaladas.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/lechuga-romana.jpg"
      },
      {
        "nombre": "Hierbabuena",
        "descripcion": "Hierba aromática de sabor fresco, utilizada en bebidas y postres.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/hierbabuena.jpg"
      },
      {
        "nombre": "Menta",
        "descripcion": "Hierba aromática con un sabor refrescante y un aroma distintivo.",
        "precio": 1.00,
        "categoria": "vegetales",
        "imagenUrl": "https://enriquezrene.github.io/frut-api/images/menta.jpg"
      }
    ],
    skipDuplicates: true,
  })
}