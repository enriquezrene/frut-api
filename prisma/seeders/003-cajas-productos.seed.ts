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
      "nombre": "Invierno resistente",
      "productos": [
        {
          "nombre": "Mandarinas",
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
          "nombre": "Cerezas",
          "cantidad": 1,
          "unidad": "unidad"
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
          "nombre": "Piña",
          "cantidad": 1,
          "unidad": "rodaja"
        }
      ]
    }
  ]

export async function seedCajaProductos(prisma: PrismaClient) {

  const inserts = cajasProductos.map(async (cajaProducto) => {
    const caja = await prisma.caja.findFirst({
      where: { nombre: cajaProducto.nombre }
    });

    //console.log(`Inserting caja: ${cajaProducto.nombre}`, caja);

    if (caja) {
      const cajasProductos: { cajaId: number; productoId: number; cantidad: number; unidad: string; precio: number; }[] = []
      const productos = cajaProducto.productos
      const buscaProductos = productos.map(async (producto) => {
        const existingProducto = await prisma.producto.findFirst({
          where: {
            nombre: producto.nombre
          }
        })
        //console.log(`Inserting producto:`, producto);
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
      await Promise.all(buscaProductos)
      console.log(`Inserting cajaProductos for caja ${cajaProducto.nombre}:`, cajasProductos);
      await prisma.cajaProducto.createMany({
        data: cajasProductos,
      });
    }
  })

  await Promise.all(inserts);
}