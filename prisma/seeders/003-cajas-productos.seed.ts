import { PrismaClient } from '@prisma/client'

const cajasProductos = [
    {
      "nombre": "Energía matutina",
      "productos": [
        {
          "nombre": "Plátanos",
          "cantidad": 3,
          "unidad": "unidades"
        },
        {
          "nombre": "Fresas",
          "cantidad": 200,
          "unidad": "g"
        },
        {
          "nombre": "Aguacate",
          "cantidad": 2,
          "unidad": "unidades"
        }
      ]
    },
    {
      "nombre": "Defensa máxima",
      "productos": [
        {
          "nombre": "Plátanos",
          "cantidad": 2,
          "unidad": "unidades"
        },
        {
          "nombre": "Naranjas",
          "cantidad": 2,
          "unidad": "unidades"
        },
        {
          "nombre": "Kiwi",
          "cantidad": 2,
          "unidad": "unidades"
        }
      ]
    },
    {
      "nombre": "Corazón saludable",
      "productos": [
        {
          "nombre": "Aguacate",
          "cantidad": 1,
          "unidad": "caja"
        },
        {
          "nombre": "Tomates cherry",
          "cantidad": 100,
          "unidad": "g"
        },
        {
          "nombre": "Nueces",
          "cantidad": 1,
          "unidad": "unidad"
        }
      ]
    },
    {
      "nombre": "Keto verde",
      "productos": [
        {
          "nombre": "Aguacate",
          "cantidad": 2,
          "unidad": "unidades"
        },
        {
          "nombre": "Pepino",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Espárragos",
          "cantidad": 1,
          "unidad": "unidad"
        }
      ]
    },
    {
      "nombre": "Veggie power",
      "productos": [
        {
          "nombre": "Aguacate",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Zanahorias",
          "cantidad": 2,
          "unidad": "unidades"
        },
        {
          "nombre": "Espárragos",
          "cantidad": 1,
          "unidad": "unidad"
        }
      ]
    },
    {
      "nombre": "Detox dulce",
      "productos": [
        {
          "nombre": "Piña",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Remolacha",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Manzana",
          "cantidad": 1,
          "unidad": "unidad"
        }
      ]
    },
    {
      "nombre": "Mini chef (kids)",
      "productos": [
        {
          "nombre": "Fresa",
          "cantidad": 1,
          "unidad": "bandeja pequeña"
        },
        {
          "nombre": "Zanahorias baby",
          "cantidad": 100,
          "unidad": "g"
        },
        {
          "nombre": "Queso",
          "cantidad": 1,
          "unidad": "unidad"
        }
      ]
    },
    {
      "nombre": "Fiesta tropical",
      "productos": [
        {
          "nombre": "Mango",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Maracuyá",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Piña",
          "cantidad": 1,
          "unidad": "unidad"
        }
      ]
    },
    {
      "nombre": "Snack de oficina",
      "productos": [
        {
          "nombre": "Mandarinas",
          "cantidad": 2,
          "unidad": "unidades"
        },
        {
          "nombre": "Almendras",
          "cantidad": 50,
          "unidad": "g"
        },
        {
          "nombre": "Manzana",
          "cantidad": 2,
          "unidad": "unidades"
        }
      ]
    },
    {
      "nombre": "Invierno resistente",
      "productos": [
        {
          "nombre": "Mandarinas",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Jengibre",
          "cantidad": 1,
          "unidad": "trozo"
        },
        {
          "nombre": "Nueces del país",
          "cantidad": 1,
          "unidad": "unidad"
        }
      ]
    },
    {
      "nombre": "Verano refrescante",
      "productos": [
        {
          "nombre": "Sandía",
          "cantidad": 1,
          "unidad": "1/4"
        },
        {
          "nombre": "Melón",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Kiwi",
          "cantidad": 1,
          "unidad": "unidad"
        }
      ]
    },
    {
      "nombre": "Arcoíris nutritivo",
      "productos": [
        {
          "nombre": "Tomates",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Pimientos",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Remolacha",
          "cantidad": 1,
          "unidad": "unidad"
        }
      ]
    },
    {
      "nombre": "Viaje gastronómico",
      "productos": [
        {
          "nombre": "Pitahaya",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Carambola",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Guayaba",
          "cantidad": 1,
          "unidad": "unidad"
        }
      ]
    },
    {
      "nombre": "Good night box",
      "productos": [
        {
          "nombre": "Pistachos",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Cerezas",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Almendras",
          "cantidad": 1,
          "unidad": "unidad"
        }
      ]
    },
    {
      "nombre": "Chef en casa (ensalada césar)",
      "productos": [
        {
          "nombre": "Lechuga romana",
          "cantidad": 1,
          "unidad": "cabeza"
        },
        {
          "nombre": "Pollo cocido",
          "cantidad": 1,
          "unidad": "pechuga"
        },
        {
          "nombre": "Queso",
          "cantidad": 100,
          "unidad": "g"
        }
      ]
    },
    {
      "nombre": "Regalo saludable (premium)",
      "productos": [
        {
          "nombre": "Kiwi",
          "cantidad": 1,
          "unidad": "unidad"
        },
        {
          "nombre": "Chocolate",
          "cantidad": 70,
          "unidad": "cacao"
        },
        {
          "nombre": "Piña",
          "cantidad": 1,
          "unidad": "rodaja"
        }
      ]
    }
  ]

export async function seedCategoryProducts(prisma: PrismaClient) {

  const inserts = cajasProductos.map(async (cajaProducto) => {
    const caja = await prisma.caja.findFirst({
      where: { nombre: cajaProducto.nombre }
    });

    if (caja) {
      const cajasProductos: { cajaId: number; productoId: number; cantidad: number; unidad: string; precio: number; }[] = []
      const productos = cajaProducto.productos
      productos.map(async (producto) => {
        const existingProducto = await prisma.producto.findFirst({
          where: {
            nombre: producto.nombre
          }
        })
        if (existingProducto) {
          cajasProductos.push({
            cajaId: caja.id,
            productoId: existingProducto.id,
            cantidad: producto.cantidad,
            unidad: producto.unidad,
            precio: 1.00
          });
        }
      })
      await prisma.cajaProducto.createMany({
        data: cajasProductos,
        skipDuplicates: true,
      });
    }
  })

  await Promise.all(inserts);
}