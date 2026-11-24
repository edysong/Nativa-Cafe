/* app.js — Lógica global Café Nativo
   Carrito, cupones, localStorage, WhatsApp, bolsas CSS
*/

/* ─── Constantes ─── */
const WHATSAPP    = '573000000000'; // ← cambiar por número real
const ENVIO_BASE  = 12000;          // envío si subtotal < ENVIO_GRATIS
const ENVIO_GRATIS = 100000;
const CUPONES = { 'NATIVO10': 0.10 }; // código → fracción de descuento

/* ─── Estado del carrito ─── */
let carrito = cargarCarrito();
let cuponActivo = null;

function cargarCarrito() {
  try { return JSON.parse(localStorage.getItem('nativo_carrito')) || []; }
  catch { return []; }
}

function guardarCarrito() {
  localStorage.setItem('nativo_carrito', JSON.stringify(carrito));
  actualizarBadge();
}

/* ─── Operaciones del carrito ─── */

/** Agrega o incrementa un item */
function agregarAlCarrito(productoId, size, tueste, cantidad = 1) {
  const prod = getProducto(productoId);
  if (!prod) return;
  const pres = prod.presentaciones.find(p => p.size === size && p.tueste === tueste);
  if (!pres) return;

  const llave = `${productoId}__${size}__${tueste}`;
  const existente = carrito.find(i => i.llave === llave);
  if (existente) {
    existente.cantidad += cantidad;
  } else {
    carrito.push({
      llave,
      productoId,
      nombre: prod.nombre,
      img: prod.img,
      bolsa: prod.bolsa,
      size,
      tueste,
      precio: pres.precio,
      cantidad,
    });
  }
  guardarCarrito();
  renderCarritoPanel();
  abrirCarritoPanel();
}

function cambiarCantidad(llave, delta) {
  const item = carrito.find(i => i.llave === llave);
  if (!item) return;
  item.cantidad = Math.max(1, item.cantidad + delta);
  guardarCarrito();
  renderCarritoPanel();
  renderCarritoPage();
}

function eliminarItem(llave) {
  carrito = carrito.filter(i => i.llave !== llave);
  guardarCarrito();
  renderCarritoPanel();
  renderCarritoPage();
}

function vaciarCarrito() {
  carrito = [];
  cuponActivo = null;
  guardarCarrito();
  renderCarritoPanel();
  renderCarritoPage();
}

/* ─── Totales ─── */
function calcularTotales() {
  const subtotal = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const descuento = cuponActivo ? Math.round(subtotal * cuponActivo.pct) : 0;
  const baseEnvio  = subtotal - descuento;
  const envio      = baseEnvio >= ENVIO_GRATIS ? 0 : ENVIO_BASE;
  const total      = baseEnvio + envio;
  return { subtotal, descuento, envio, total };
}

/* ─── Badge ─── */
function actualizarBadge() {
  const total = carrito.reduce((s, i) => s + i.cantidad, 0);
  document.querySelectorAll('.carrito-badge').forEach(b => {
    b.textContent = total;
    b.style.display = total ? 'flex' : 'none';
  });
}

/* ─── Apertura/cierre del panel ─── */
function abrirCarritoPanel() {
  document.getElementById('carritoPanel')?.classList.add('abierto');
  document.getElementById('carritoOverlay')?.classList.add('abierto');
  document.body.style.overflow = 'hidden';
}

function cerrarCarritoPanel() {
  document.getElementById('carritoPanel')?.classList.remove('abierto');
  document.getElementById('carritoOverlay')?.classList.remove('abierto');
  document.body.style.overflow = '';
}

/* ─── Render del panel lateral ─── */
function renderCarritoPanel() {
  const panel = document.getElementById('carritoItems');
  if (!panel) return;

  if (!carrito.length) {
    panel.innerHTML = `
      <div class="carrito-vacio">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.853-7.148A60.114 60.114 0 006.412 5.635M4.5 20.25a.75.75 0 110 1.5.75.75 0 010-1.5zm15.75 0a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
        </svg>
        <p>Tu carrito está vacío</p>
        <a href="tienda.html" class="btn btn-outline btn-sm" onclick="cerrarCarritoPanel()">Ir a la tienda</a>
      </div>`;
    renderResumenPanel();
    return;
  }

  panel.innerHTML = carrito.map(item => `
    <div class="carrito-item">
      <div class="carrito-item-img">
        ${imgOrBolsa(item.img, item.bolsa, item.nombre, 60)}
      </div>
      <div class="carrito-item-info">
        <div class="carrito-item-nombre">${item.nombre}</div>
        <div class="carrito-item-det">${item.size} · ${item.tueste}</div>
        <div class="carrito-item-precio">${formatPrecio(item.precio * item.cantidad)}</div>
      </div>
      <div class="carrito-item-ctrl">
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="cambiarCantidad('${item.llave}',-1)" aria-label="Reducir cantidad">−</button>
          <span class="qty-num">${item.cantidad}</span>
          <button class="qty-btn" onclick="cambiarCantidad('${item.llave}',1)" aria-label="Aumentar cantidad">+</button>
        </div>
        <button class="btn-eliminar" onclick="eliminarItem('${item.llave}')">Eliminar</button>
      </div>
    </div>`).join('');

  renderResumenPanel();
}

function renderResumenPanel() {
  const pie = document.getElementById('carritoPie');
  if (!pie) return;
  if (!carrito.length) { pie.style.display = 'none'; return; }
  pie.style.display = '';

  const { subtotal, descuento, envio, total } = calcularTotales();
  const envioTxt = envio === 0
    ? '<span class="envio-gratis">Gratis</span>'
    : formatPrecio(envio);

  const descFila = descuento
    ? `<div class="resumen-fila"><span>Descuento (${cuponActivo.codigo})</span><span>−${formatPrecio(descuento)}</span></div>`
    : '';

  pie.querySelector('.carrito-resumen').innerHTML = `
    <div class="resumen-fila"><span>Subtotal</span><span>${formatPrecio(subtotal)}</span></div>
    ${descFila}
    <div class="resumen-fila"><span>Envío</span><span>${envioTxt}</span></div>
    <div class="resumen-fila total"><span>Total</span><span>${formatPrecio(total)}</span></div>`;
}

/* ─── Cupón ─── */
function aplicarCupon(codigo) {
  const pct = CUPONES[codigo.toUpperCase().trim()];
  const msgEl = document.getElementById('cuponMsg');
  if (!pct) {
    cuponActivo = null;
    if (msgEl) { msgEl.textContent = 'Cupón no válido.'; msgEl.className = 'cupon-msg error'; }
    return;
  }
  cuponActivo = { codigo: codigo.toUpperCase().trim(), pct };
  if (msgEl) { msgEl.textContent = `Cupón aplicado: −${pct * 100}%`; msgEl.className = 'cupon-msg ok'; }
  renderResumenPanel();
  renderResumenPage();
}

/* ─── WhatsApp ─── */
function pedidoWhatsApp() {
  if (!carrito.length) return;
  const { total } = calcularTotales();
  const lineas = carrito.map(i => `• ${i.nombre} (${i.size}, ${i.tueste}) x${i.cantidad} = ${formatPrecio(i.precio * i.cantidad)}`).join('\n');
  const msg = encodeURIComponent(`Hola! Quiero hacer un pedido:\n\n${lineas}\n\nTotal: ${formatPrecio(total)}`);
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
}

/* ─── Número de pedido ─── */
function generarNumeroPedido() {
  const hoy = new Date();
  const fecha = hoy.getFullYear().toString()
    + String(hoy.getMonth() + 1).padStart(2, '0')
    + String(hoy.getDate()).padStart(2, '0');
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `NAT-${fecha}-${rand}`;
}

/* ─── Guardar pedido en historial ─── */
function guardarPedido(datos) {
  const pedidos = JSON.parse(localStorage.getItem('nativo_pedidos') || '[]');
  pedidos.unshift(datos);
  localStorage.setItem('nativo_pedidos', JSON.stringify(pedidos));
}

/* ─── Helper: imagen o bolsa CSS ─── */
function imgOrBolsa(imgSrc, bolsaColor, nombre, size = 0) {
  if (imgSrc) {
    const s = size ? `width="${size}" height="${size}"` : '';
    return `<img src="${imgSrc}" alt="${nombre}" ${s} loading="lazy">`;
  }
  const color = bolsaColor || 'verde';
  return `<div class="bolsa-css" data-color="${color}" role="img" aria-label="Empaque de ${nombre}">
    <span class="bolsa-nativo">NATIVO</span>
    <span class="bolsa-nombre">${nombre}</span>
    <span class="bolsa-peso">${nombre}</span>
  </div>`;
}

/* ─── Render de carrito.html ─── */
function renderCarritoPage() {
  const tabla = document.getElementById('tablaCarritoBody');
  const vacioEl = document.getElementById('carritoVacio');
  const contenidoEl = document.getElementById('carritoContenido');
  if (!tabla) return;

  if (!carrito.length) {
    if (vacioEl) vacioEl.style.display = '';
    if (contenidoEl) contenidoEl.style.display = 'none';
    return;
  }
  if (vacioEl) vacioEl.style.display = 'none';
  if (contenidoEl) contenidoEl.style.display = '';

  tabla.innerHTML = carrito.map(item => `
    <tr>
      <td>
        <div class="tabla-item-prod">
          <div class="tabla-item-img">${imgOrBolsa(item.img, item.bolsa, item.nombre)}</div>
          <div>
            <div class="tabla-item-nombre">${item.nombre}</div>
            <div class="tabla-item-det">${item.size} · ${item.tueste}</div>
          </div>
        </div>
      </td>
      <td class="th-ocultar">${formatPrecio(item.precio)}</td>
      <td>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="cambiarCantidad('${item.llave}',-1)" aria-label="Reducir">−</button>
          <span class="qty-num">${item.cantidad}</span>
          <button class="qty-btn" onclick="cambiarCantidad('${item.llave}',1)" aria-label="Aumentar">+</button>
        </div>
      </td>
      <td class="th-ocultar">${formatPrecio(item.precio * item.cantidad)}</td>
      <td><button class="btn-eliminar" onclick="eliminarItem('${item.llave}')">Eliminar</button></td>
    </tr>`).join('');

  renderResumenPage();
}

function renderResumenPage() {
  const el = document.getElementById('resumenPage');
  if (!el) return;
  const { subtotal, descuento, envio, total } = calcularTotales();
  const envioTxt = envio === 0 ? '<span class="envio-gratis">Gratis</span>' : formatPrecio(envio);
  const descFila = descuento
    ? `<div class="resumen-fila"><span>Descuento</span><span>−${formatPrecio(descuento)}</span></div>` : '';

  el.innerHTML = `
    <div class="resumen-fila"><span>Subtotal</span><span>${formatPrecio(subtotal)}</span></div>
    ${descFila}
    <div class="resumen-fila"><span>Envío</span><span>${envioTxt}</span></div>
    <div class="resumen-fila total"><span>Total</span><span>${formatPrecio(total)}</span></div>`;
}

/* ─── Init global ─── */
document.addEventListener('DOMContentLoaded', () => {
  actualizarBadge();
  renderCarritoPanel();

  // Botón abrir carrito
  document.querySelectorAll('[data-carrito-abrir]').forEach(b =>
    b.addEventListener('click', abrirCarritoPanel));

  // Cerrar panel
  document.getElementById('carritoCerrar')?.addEventListener('click', cerrarCarritoPanel);
  document.getElementById('carritoOverlay')?.addEventListener('click', cerrarCarritoPanel);

  // Cupón en panel
  document.getElementById('btnAplicarCupon')?.addEventListener('click', () => {
    const val = document.getElementById('inputCupon')?.value || '';
    aplicarCupon(val);
  });
  document.getElementById('inputCupon')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') aplicarCupon(e.target.value);
  });

  // WhatsApp panel
  document.getElementById('btnWaPanel')?.addEventListener('click', pedidoWhatsApp);

  // Carrito page
  renderCarritoPage();

  document.getElementById('btnAplicarCuponPage')?.addEventListener('click', () => {
    const val = document.getElementById('inputCuponPage')?.value || '';
    aplicarCupon(val);
    renderResumenPage();
  });

  // Formulario pedido rápido (index)
  iniciarFormRapido();
});

/* ─── Formulario pedido rápido ─── */
function iniciarFormRapido() {
  const form = document.getElementById('formRapido');
  if (!form) return;

  const selectCafe = form.querySelector('[name="cafe"]');
  const selectPres = form.querySelector('[name="presentacion"]');
  const selectTueste = form.querySelector('[name="tueste"]');
  const selectQty = form.querySelector('[name="cantidad"]');
  const totalEl = form.querySelector('#formTotal');

  function actualizarForm() {
    if (!selectCafe.value) return;
    const prod = getProducto(selectCafe.value);
    if (!prod) return;

    // Llenar presentaciones
    const presActual = selectPres.value;
    selectPres.innerHTML = [...new Set(prod.presentaciones.map(p => p.size))]
      .map(s => `<option value="${s}" ${s===presActual?'selected':''}>${s}</option>`).join('');

    // Llenar tuestes
    const tuesteActual = selectTueste.value;
    const tuestesDisp = [...new Set(prod.presentaciones
      .filter(p => p.size === selectPres.value)
      .map(p => p.tueste))];
    selectTueste.innerHTML = tuestesDisp
      .map(t => `<option value="${t}" ${t===tuesteActual?'selected':''}>${t}</option>`).join('');

    calcularTotal();
  }

  function calcularTotal() {
    if (!selectCafe.value || !selectPres.value || !selectTueste.value) return;
    const prod = getProducto(selectCafe.value);
    if (!prod) return;
    const pres = prod.presentaciones.find(p => p.size === selectPres.value && p.tueste === selectTueste.value);
    if (!pres || !totalEl) return;
    const qty = parseInt(selectQty?.value || 1, 10);
    totalEl.textContent = formatPrecio(pres.precio * qty);
  }

  selectCafe.addEventListener('change', actualizarForm);
  selectPres.addEventListener('change', actualizarForm);
  selectTueste.addEventListener('change', calcularTotal);
  selectQty?.addEventListener('change', calcularTotal);

  // Validación
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valido = true;

    form.querySelectorAll('[required]').forEach(el => {
      const campo = el.closest('.campo');
      if (!el.value.trim()) {
        campo?.classList.add('invalido');
        campo?.classList.remove('valido');
        valido = false;
      } else {
        campo?.classList.remove('invalido');
        campo?.classList.add('valido');
      }
    });

    const emailEl = form.querySelector('[type="email"]');
    if (emailEl && emailEl.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      emailEl.closest('.campo')?.classList.add('invalido');
      valido = false;
    }

    if (!valido) return;

    // Armar mensaje WhatsApp
    const nombre   = form.querySelector('[name="nombre"]').value;
    const ciudad   = form.querySelector('[name="ciudad"]').value;
    const prod     = getProducto(selectCafe.value);
    const pres     = prod?.presentaciones.find(p => p.size===selectPres.value && p.tueste===selectTueste.value);
    const qty      = parseInt(selectQty?.value || 1, 10);
    const total    = pres ? pres.precio * qty : 0;

    const msg = encodeURIComponent(
      `Hola! Quiero hacer un pedido:\n\nCafé: ${prod?.nombre || selectCafe.value}\nPresentación: ${selectPres.value} - ${selectTueste.value}\nCantidad: ${qty}\nTotal: ${formatPrecio(total)}\n\nNombre: ${nombre}\nCiudad: ${ciudad}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  });

  // Llenado inicial del select de cafés
  if (selectCafe && typeof PRODUCTOS !== 'undefined') {
    selectCafe.innerHTML = '<option value="">Selecciona un café</option>'
      + PRODUCTOS.map(p => `<option value="${p.id}">${p.nombre} (${CATEGORIAS[p.categoria].label})</option>`).join('');
    actualizarForm();
  }
}
