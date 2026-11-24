/* productos.js — Catálogo Café Nativo
   Fuente: Café Nativo.xlsx
   Precio Descafeinado: $20.000/250g y $38.000/500g (confirmar con Excel original)
   Precio Caffè Verona: $190.000/250g y $245.000/500g (precio especial confirmado)

   Cada presentación tiene su propia imagen (imgPres).
   img = imagen principal del producto (250g o primera disponible).
*/

// Categorías
const CATEGORIAS = {
  clasicos:   { label: 'Clásicos',         orden: 1 },
  origen:     { label: 'De origen',        orden: 2 },
  saborizados:{ label: 'Saborizados',      orden: 3 },
  capsulas:   { label: 'Cápsulas',         orden: 4 },
  especial:   { label: 'Edición especial', orden: 5 },
};

const PRODUCTOS = [

  /* ─── CLÁSICOS ─── */
  {
    id: 'cafe-molido',
    nombre: 'Café Molido',
    categoria: 'clasicos',
    descripcion: 'Café colombiano 100% arábica, molido en el punto justo para preparar en cafetera de filtro, francesa o moka.',
    img: 'img/01-nativo-cafe-molido-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio',        precio: 20000, img: 'img/01-nativo-cafe-molido-250g-medio.jpg' },
      { size: '250g', tueste: 'Medio Oscuro', precio: 22000, img: 'img/02-nativo-cafe-molido-250g-medio-oscuro.jpg' },
      { size: '500g', tueste: 'Medio',        precio: 32000, img: 'img/03-nativo-cafe-molido-500g-medio.jpg' },
      { size: '500g', tueste: 'Medio Oscuro', precio: 34000, img: 'img/04-nativo-cafe-molido-500g-medio-oscuro.jpg' },
    ],
  },
  {
    id: 'cafe-en-grano',
    nombre: 'Café en Grano',
    categoria: 'clasicos',
    descripcion: 'Granos enteros seleccionados a mano. Muélelos justo antes de preparar y descubre todo el potencial del café colombiano.',
    img: 'img/05-nativo-cafe-en-grano-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio',        precio: 20000, img: 'img/05-nativo-cafe-en-grano-250g-medio.jpg' },
      { size: '250g', tueste: 'Medio Oscuro', precio: 22000, img: 'img/06-nativo-cafe-en-grano-250g-medio-oscuro.jpg' },
      { size: '500g', tueste: 'Medio',        precio: 36000, img: 'img/07-nativo-cafe-en-grano-500g-medio.jpg' },
      { size: '500g', tueste: 'Medio Oscuro', precio: 38000, img: 'img/08-nativo-cafe-en-grano-500g-medio-oscuro.jpg' },
    ],
  },
  {
    id: 'instantaneo',
    nombre: 'Instantáneo',
    categoria: 'clasicos',
    descripcion: 'Todo el sabor del café colombiano sin esperar. Disuelve en agua caliente o fría en segundos.',
    img: 'img/31-nativo-instantaneo-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 25000, img: 'img/31-nativo-instantaneo-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 45000, img: 'img/32-nativo-instantaneo-500g-medio.jpg' },
    ],
  },
  {
    id: 'cold-brew',
    nombre: 'Cold Brew',
    categoria: 'clasicos',
    descripcion: 'Molido grueso especial para extracción en frío. Preparación de 12 a 24 horas, resultado suave, bajo en acidez y muy concentrado.',
    img: 'img/33-nativo-cold-brew-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 22000, img: 'img/33-nativo-cold-brew-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 40000, img: 'img/34-nativo-cold-brew-500g-medio.jpg' },
    ],
  },
  {
    id: 'descafeinado',
    nombre: 'Descafeinado',
    categoria: 'clasicos',
    descripcion: 'El mismo café colombiano de siempre, con el 97% de la cafeína eliminada mediante proceso natural. Disfrútalo a cualquier hora.',
    img: 'img/37-nativo-descafeinado-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 20000, img: 'img/37-nativo-descafeinado-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 38000, img: 'img/38-nativo-descafeinado-500g-medio.jpg' },
    ],
  },

  /* ─── DE ORIGEN ─── */
  {
    id: 'huila',
    nombre: 'Huila',
    categoria: 'origen',
    descripcion: 'Del corazón del Macizo Colombiano. Notas a frutas rojas, caramelo y chocolate negro. Uno de los orígenes más premiados del país.',
    img: 'img/19-nativo-huila-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 24000, img: 'img/19-nativo-huila-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 43000, img: 'img/20-nativo-huila-500g-medio.jpg' },
    ],
  },
  {
    id: 'tolima',
    nombre: 'Tolima',
    categoria: 'origen',
    descripcion: 'Cultivado en las laderas del Nevado del Huila. Perfil equilibrado con notas a nuez, miel y un final largo y limpio.',
    img: 'img/21-nativo-tolima-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 23000, img: 'img/21-nativo-tolima-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 42000, img: 'img/22-nativo-tolima-500g-medio.jpg' },
    ],
  },
  {
    id: 'narino',
    nombre: 'Nariño',
    categoria: 'origen',
    descripcion: 'Los cafés más altos de Colombia, cultivados sobre los 2.000 m. Acidez brillante, cuerpo cremoso y notas florales inconfundibles.',
    img: 'img/23-nativo-narino-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 25000, img: 'img/23-nativo-narino-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 45000, img: 'img/24-nativo-narino-500g-medio.jpg' },
    ],
  },
  {
    id: 'boyaca',
    nombre: 'Boyacá',
    categoria: 'origen',
    descripcion: 'Tierra de campeones y de café excepcional. Notas a frutos secos, panela y chocolate con leche. Cuerpo medio y muy dulce.',
    img: 'img/25-nativo-boyaca-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 23000, img: 'img/25-nativo-boyaca-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 42000, img: 'img/26-nativo-boyaca-500g-medio.jpg' },
    ],
  },
  {
    id: 'cauca',
    nombre: 'Cauca',
    categoria: 'origen',
    descripcion: 'Cultivado por comunidades indígenas en las montañas del Cauca. Notas a frutos tropicales, jazmín y un final limpio y persistente.',
    img: 'img/27-nativo-cauca-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 24000, img: 'img/27-nativo-cauca-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 44000, img: 'img/28-nativo-cauca-500g-medio.jpg' },
    ],
  },
  {
    id: 'antioquia',
    nombre: 'Antioquia',
    categoria: 'origen',
    descripcion: 'El corazón cafetero de Colombia. Perfil redondo, con notas a chocolate, caramelo y un toque cítrico que lo hacen versátil para cualquier método.',
    img: 'img/29-nativo-antioquia-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 22000, img: 'img/29-nativo-antioquia-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 40000, img: 'img/30-nativo-antioquia-500g-medio.jpg' },
    ],
  },
  {
    id: 'notas-citricas',
    nombre: 'Notas Cítricas',
    categoria: 'origen',
    descripcion: 'Selección especial de microlotes con perfil afrutado y brillante. Ideal para métodos de filtro que resalten la acidez y la complejidad.',
    img: 'img/35-nativo-notas-citricas-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 22000, img: 'img/35-nativo-notas-citricas-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 40000, img: 'img/36-nativo-notas-citricas-500g-medio.jpg' },
    ],
  },

  /* ─── SABORIZADOS ─── */
  {
    id: 'vainilla',
    nombre: 'Vainilla',
    categoria: 'saborizados',
    descripcion: 'Café colombiano con esencia natural de vainilla. Suave, dulce y con un aroma envolvente que convierte cada taza en un momento especial.',
    img: 'img/09-nativo-vainilla-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 22000, img: 'img/09-nativo-vainilla-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 40000, img: 'img/10-nativo-vainilla-500g-medio.jpg' },
    ],
  },
  {
    id: 'caramelo',
    nombre: 'Caramelo',
    categoria: 'saborizados',
    descripcion: 'La dulzura del caramelo fundido sobre el mejor café colombiano. Un clásico que no falla.',
    img: 'img/11-nativo-caramelo-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 22000, img: 'img/11-nativo-caramelo-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 40000, img: 'img/12-nativo-caramelo-500g-medio.jpg' },
    ],
  },
  {
    id: 'chocolate',
    nombre: 'Chocolate',
    categoria: 'saborizados',
    descripcion: 'Café con cacao colombiano. Notas a chocolate negro que complementan perfectamente la acidez natural del grano.',
    img: 'img/13-nativo-chocolate-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 22000, img: 'img/13-nativo-chocolate-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 40000, img: 'img/14-nativo-chocolate-500g-medio.jpg' },
    ],
  },
  {
    id: 'avellana',
    nombre: 'Avellana',
    categoria: 'saborizados',
    descripcion: 'El favorito de la casa. Café colombiano con avellana tostada: cremoso, dulce y con un perfume irresistible desde que abres la bolsa.',
    img: 'img/15-nativo-avellana-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 23000, img: 'img/15-nativo-avellana-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 42000, img: 'img/16-nativo-avellana-500g-medio.jpg' },
    ],
  },
  {
    id: 'canela',
    nombre: 'Canela',
    categoria: 'saborizados',
    descripcion: 'Notas cálidas de canela de Ceylán sobre una base de café suave. Perfecto para los días fríos.',
    img: 'img/17-nativo-canela-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 21000, img: 'img/17-nativo-canela-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 39000, img: 'img/18-nativo-canela-500g-medio.jpg' },
    ],
  },
  {
    id: 'amaretto',
    nombre: 'Amaretto',
    categoria: 'saborizados',
    descripcion: 'Café con almendra y cereza, inspirado en el licor italiano. Sofisticado, dulce y con una profundidad de sabor sorprendente.',
    img: 'img/39-nativo-amaretto-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 23000, img: 'img/39-nativo-amaretto-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 42000, img: 'img/40-nativo-amaretto-500g-medio.jpg' },
    ],
  },
  {
    id: 'mocha',
    nombre: 'Mocha',
    categoria: 'saborizados',
    descripcion: 'La combinación perfecta de café y chocolate oscuro. Intenso, con cuerpo y un dulzor que equilibra toda la taza.',
    img: 'img/41-nativo-mocha-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 23000, img: 'img/41-nativo-mocha-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 42000, img: 'img/42-nativo-mocha-500g-medio.jpg' },
    ],
  },
  {
    id: 'cardamomo',
    nombre: 'Cardamomo',
    categoria: 'saborizados',
    descripcion: 'Inspirado en el café árabe tradicional. El cardamomo aporta notas especiadas y florales que transforman por completo la experiencia.',
    img: 'img/43-nativo-cardamomo-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 25000, img: 'img/43-nativo-cardamomo-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 45000, img: 'img/44-nativo-cardamomo-500g-medio.jpg' },
    ],
  },
  {
    id: 'coco',
    nombre: 'Coco',
    categoria: 'saborizados',
    descripcion: 'Café colombiano con esencia de coco tostado. Tropical, suave y con una dulzura natural muy particular.',
    img: 'img/48-nativo-coco-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 22000, img: 'img/48-nativo-coco-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 40000, img: 'img/49-nativo-coco-500g-medio.jpg' },
    ],
  },
  {
    id: 'miel',
    nombre: 'Miel',
    categoria: 'saborizados',
    descripcion: 'Notas dulces y florales de miel de abejas sobre la base del café colombiano. Un equilibrio delicado y muy aromático.',
    img: 'img/50-nativo-miel-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 22000, img: 'img/50-nativo-miel-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 40000, img: 'img/51-nativo-miel-500g-medio.jpg' },
    ],
  },
  {
    id: 'menta',
    nombre: 'Menta',
    categoria: 'saborizados',
    descripcion: 'Refrescante y sorprendente. La menta suaviza el amargor del café y deja un final fresco y limpio en el paladar.',
    img: 'img/52-nativo-menta-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 22000, img: 'img/52-nativo-menta-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 40000, img: 'img/53-nativo-menta-500g-medio.jpg' },
    ],
  },
  {
    id: 'pumpkin-spice',
    nombre: 'Pumpkin Spice',
    categoria: 'saborizados',
    descripcion: 'La mezcla de otoño más querida: canela, nuez moscada y clavo sobre café colombiano. Cálido y especiado.',
    img: 'img/54-nativo-pumpkin-spice-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 24000, img: 'img/54-nativo-pumpkin-spice-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 43000, img: 'img/55-nativo-pumpkin-spice-500g-medio.jpg' },
    ],
  },
  {
    id: 'caramelo-salado',
    nombre: 'Caramelo Salado',
    categoria: 'saborizados',
    descripcion: 'El contraste perfecto: caramelo dulce con un toque de sal marina. Complejo, adictivo e inesperadamente delicioso.',
    img: 'img/56-nativo-caramelo-salado-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 23000, img: 'img/56-nativo-caramelo-salado-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 42000, img: 'img/57-nativo-caramelo-salado-500g-medio.jpg' },
    ],
  },
  {
    id: 'pistacho',
    nombre: 'Pistacho',
    categoria: 'saborizados',
    descripcion: 'El saborizante del momento. Notas cremosas de pistacho tostado que aportan un carácter único y muy sofisticado.',
    img: 'img/58-nativo-pistacho-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 27000, img: 'img/58-nativo-pistacho-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 49000, img: 'img/59-nativo-pistacho-500g-medio.jpg' },
    ],
  },
  {
    id: 'macadamia',
    nombre: 'Macadamia',
    categoria: 'saborizados',
    descripcion: 'Notas mantecosas y suaves de macadamia que suavizan el café y lo convierten en una experiencia lujosa y cremosa.',
    img: 'img/60-nativo-macadamia-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 27000, img: 'img/60-nativo-macadamia-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 49000, img: 'img/61-nativo-macadamia-500g-medio.jpg' },
    ],
  },
  {
    id: 'almendra-tostada',
    nombre: 'Almendra Tostada',
    categoria: 'saborizados',
    descripcion: 'Almendra ligeramente tostada que complementa la acidez del café colombiano con notas secas, dulces y muy aromáticas.',
    img: 'img/62-nativo-almendra-tostada-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 24000, img: 'img/62-nativo-almendra-tostada-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 43000, img: 'img/63-nativo-almendra-tostada-500g-medio.jpg' },
    ],
  },
  {
    id: 'jazmin',
    nombre: 'Jazmín',
    categoria: 'saborizados',
    descripcion: 'Floral, delicado y muy aromático. La esencia de jazmín eleva el café a una experiencia casi perfumada y muy relajante.',
    img: 'img/64-nativo-jazmin-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 24000, img: 'img/64-nativo-jazmin-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 42000, img: 'img/65-nativo-jazmin-500g-medio.jpg' },
    ],
  },
  {
    id: 'maple-pecan',
    nombre: 'Maple Pecan',
    categoria: 'saborizados',
    descripcion: 'Sirope de arce y nuez pecana sobre café suave. Dulce, con cuerpo y un sabor que recuerda a los desayunos de los domingos.',
    img: 'img/66-nativo-maple-pecan-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 25000, img: 'img/66-nativo-maple-pecan-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 45000, img: 'img/67-nativo-maple-pecan-500g-medio.jpg' },
    ],
  },
  {
    id: 'gingerbread',
    nombre: 'Gingerbread',
    categoria: 'saborizados',
    descripcion: 'Jengibre, canela y melaza sobre café colombiano. El sabor navideño que ya no tiene fecha en el calendario.',
    img: 'img/68-nativo-gingerbread-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 24000, img: 'img/68-nativo-gingerbread-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 43000, img: 'img/69-nativo-gingerbread-500g-medio.jpg' },
    ],
  },
  {
    id: 'chai',
    nombre: 'Chai',
    categoria: 'saborizados',
    descripcion: 'Café con especias del té chai: cardamomo, canela, clavo y jengibre. Caliente, especiado y muy reconfortante.',
    img: 'img/70-nativo-chai-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 25000, img: 'img/70-nativo-chai-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 45000, img: 'img/71-nativo-chai-500g-medio.jpg' },
    ],
  },
  {
    id: 'cappuccino',
    nombre: 'Cappuccino',
    categoria: 'saborizados',
    descripcion: 'El equilibrio clásico de café, leche y espuma en versión molida. Cremoso y con el perfil de la barra italiana.',
    img: 'img/72-nativo-cappuccino-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 23000, img: 'img/72-nativo-cappuccino-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 42000, img: 'img/73-nativo-cappuccino-500g-medio.jpg' },
    ],
  },
  {
    id: 'caramel-macchiato',
    nombre: 'Caramel Macchiato',
    categoria: 'saborizados',
    descripcion: 'Café con notas de caramelo y vainilla, inspirado en el clásico de cafetería. Dulce, cremoso y muy fácil de disfrutar.',
    img: 'img/74-nativo-caramel-macchiato-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 24000, img: 'img/74-nativo-caramel-macchiato-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 44000, img: 'img/75-nativo-caramel-macchiato-500g-medio.jpg' },
    ],
  },
  {
    id: 'vainilla-latte',
    nombre: 'Vainilla Latte',
    categoria: 'saborizados',
    descripcion: 'Suave, cremoso y con la dulzura natural de la vainilla. El perfil perfecto para quienes prefieren el café sin amargos.',
    img: 'img/76-nativo-vainilla-latte-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 23000, img: 'img/76-nativo-vainilla-latte-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 42000, img: 'img/77-nativo-vainilla-latte-500g-medio.jpg' },
    ],
  },
  {
    id: 'dulce-de-leche',
    nombre: 'Dulce de Leche',
    categoria: 'saborizados',
    descripcion: 'El sabor más latinoamericano en una taza de café. Notas de arequipe, leche caramelizada y un dulzor envolvente e irresistible.',
    img: 'img/78-nativo-dulce-de-leche-250g-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '250g', tueste: 'Medio', precio: 24000, img: 'img/78-nativo-dulce-de-leche-250g-medio.jpg' },
      { size: '500g', tueste: 'Medio', precio: 44000, img: 'img/79-nativo-dulce-de-leche-500g-medio.jpg' },
    ],
  },

  /* ─── CÁPSULAS ─── */
  {
    id: 'capsulas',
    nombre: 'Cápsulas',
    categoria: 'capsulas',
    descripcion: 'Cápsulas de café colombiano compatibles con máquinas Nespresso®. Café fresco encapsulado en su punto óptimo.',
    img: 'img/45-nativo-capsulas-4-capsulas-medio.jpg',
    bolsa: null,
    presentaciones: [
      { size: '×4',  tueste: 'Medio', precio: 12000, img: 'img/45-nativo-capsulas-4-capsulas-medio.jpg' },
      { size: '×10', tueste: 'Medio', precio: 27000, img: 'img/46-nativo-capsulas-10-capsulas-medio.jpg' },
      { size: '×15', tueste: 'Medio', precio: 38000, img: 'img/47-nativo-capsulas-15-capsulas-medio.jpg' },
    ],
  },

  /* ─── EDICIÓN ESPECIAL ─── */
  {
    id: 'caffe-verona',
    nombre: 'Caffè Verona',
    categoria: 'especial',
    descripcion: 'Nuestro blend más exclusivo, inspirado en la ciudad del amor eterno. Mezcla de granos seleccionados, tueste medio oscuro y un perfil complejo con notas de dark chocolate, cereza y tabaco.',
    img: 'img/80-nativo-caffe-verona-250g-medio-oscuro.jpg',
    bolsa: null,
    // Precio especial confirmado: $190.000 / $245.000
    presentaciones: [
      { size: '250g', tueste: 'Medio Oscuro', precio: 190000, img: 'img/80-nativo-caffe-verona-250g-medio-oscuro.jpg' },
      { size: '500g', tueste: 'Medio Oscuro', precio: 245000, img: 'img/81-nativo-caffe-verona-500g-medio-oscuro.jpg' },
    ],
  },
];

/* ── Helpers ── */

/** Retorna el precio mínimo de un producto */
function precioDesde(producto) {
  return Math.min(...producto.presentaciones.map(p => p.precio));
}

/** Retorna un producto por su id */
function getProducto(id) {
  return PRODUCTOS.find(p => p.id === id) || null;
}

/** Retorna productos por categoría */
function porCategoria(cat) {
  return PRODUCTOS.filter(p => p.categoria === cat);
}

/** Formatea precio en COP */
function formatPrecio(n) {
  return '$' + n.toLocaleString('es-CO');
}

/** Genera slug desde nombre (para búsqueda) */
function slugify(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
