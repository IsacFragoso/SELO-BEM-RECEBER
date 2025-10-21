import { EMPRESAS, CHANCELAS } from './data.js';

const $grid = document.getElementById('empresas-grid');
const $cidade = document.getElementById('f-cidade');
const $chancela = document.getElementById('f-chancela');
const $busca = document.getElementById('f-busca');
const $limpar = document.getElementById('btn-limpar');
const $vazio = document.getElementById('empresas-vazio');

function renderSelectOptions(select, list) {
  list.forEach(item => {
    const opt = document.createElement('option');
    opt.value = item;
    opt.textContent = item;
    select.appendChild(opt);
  });
}

renderSelectOptions($cidade, [...new Set(EMPRESAS.map(e => e.cidade))].sort());
renderSelectOptions($chancela, CHANCELAS);

function atualizarLista() {
  const cidade = $cidade.value;
  const chancela = $chancela.value;
  const busca = $busca.value.toLowerCase();

  const filtradas = EMPRESAS.filter(emp => {
    if (cidade && emp.cidade !== cidade) return false;
    if (chancela && emp.chancela !== chancela) return false;
    if (busca && !emp.nome.toLowerCase().includes(busca)) return false;
    return true;
  });

  renderEmpresas(filtradas);
}

function renderEmpresas(lista) {
  $grid.innerHTML = '';
  if (lista.length === 0) {
    $vazio.hidden = false;
    return;
  }
  $vazio.hidden = true;

  lista.forEach(emp => {
    const card = document.createElement('div');
    card.className = 'empresa-card';
    card.innerHTML = `
      <h3>${emp.nome}</h3>
      <p><strong>Cidade:</strong> ${emp.cidade}</p>
      <p><strong>Categoria:</strong> ${emp.chancela}</p>
      <p><strong>Endereço:</strong> ${emp.endereco}</p>
      <p><strong>Validade:</strong> ${emp.validade}</p>
    `;
    $grid.appendChild(card);
  });
}

// Eventos
$cidade.addEventListener('change', atualizarLista);
$chancela.addEventListener('change', atualizarLista);
$busca.addEventListener('input', atualizarLista);
$limpar.addEventListener('click', () => {
  $cidade.value = '';
  $chancela.value = '';
  $busca.value = '';
  atualizarLista();
});

atualizarLista();
