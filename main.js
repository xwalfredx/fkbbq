function toggleMenu() {
const panel = document.getElementById('menu-panel');
const orderPanel = document.getElementById('order-panel');
const arrow = document.getElementById('menu-arrow');

//Antes de abrir el menú, se cierra el de órdenes si está abierto
  if (orderPanel.classList.contains('open')) {
    orderPanel.classList.remove('open');
  }

const open = panel.classList.toggle('open');
arrow.textContent = open ? '˅' : '›';

if (open) {
setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
}
}

function toggleOrder() {
const panel = document.getElementById('order-panel');
const menuPanel = document.getElementById('menu-panel'); // Referencia al otro panel
const arrow = document.getElementById('order-arrow');

//Antes de abrir órdenes, se cierra el menú si está abierto
  if (menuPanel.classList.contains('open')) {
    menuPanel.classList.remove('open');
    // Aqui reseteamos la flecha del menú para que no se quede hacia abajo
    document.getElementById('menu-arrow').textContent = '›';
  }

const open = panel.classList.toggle('open');
// el ID 'order-arrow' debe existir en el html para que esto no de error
arrow.textContent = open ? '˅' : '›';

if (open) {
setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
}
}

function showTab(id, btn) {
document.querySelectorAll('.menu-section').forEach(s => s.classList.remove('active'));
document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
document.getElementById('tab-' + id).classList.add('active');
btn.classList.add('active');
btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest'});
}

/*Intento de automatizacion de menus
const carnes = [
{
    name: "Bulgogi",
    badge: "GF",
    badgeClass: "badge-gf",
    desc: "Unmarineted Thick-cut Pork Belly",
    price: "$20.99",
},
]

function renderMenuItems(items, containerId){
    const container = document.getElementById(containerId);

    const html = items.map(item => `
        <div class = "menu-item">
        <div class = "menu-info">
        <div class = "item-name">
        ${item.name}
        ${item.badge ? `<span class = "item-badgeClass}">${item.badge}</span>` : ''}
        </div>
        <div class="item-desc">${item.desc}</div> 
        </div>
        <div class="item-price">${item.price}</div>
        </div>
        `).join('');
        
        container.innerHTML = html;
}*/
