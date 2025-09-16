// Entry point
import { EMPRESAS, CHANCELAS } from './data.js';
import { renderEmpresas, renderSelectOptions, renderVerificacao } from './render.js';
import { filtrarEmpresas, normalizarBusca } from './filters.js';

const $cidade = document.getElementById('f-cidade');
const $chancela = document.getElementById('f-chancela');
const $validade = document.getElementById('f-validade');
const $busca = document.getElementById('f-busca');
const $limpar = document.getElementById('btn-limpar');
const $grid = document.getElementById('empresas-grid');
const $vazio = document.getElementById('empresas-vazio');

const $verificaForm = document.getElementById('verifica-form');
const $verificaInput = document.getElementById('verifica-input');
const $verificaResultado = document.getElementById('verifica-resultado');

// popula selects
renderSelectOptions($cidade, [...new Set(EMPRESAS.map(e => e.cidade))].sort());
renderSelectOptions($chancela, CHANCELAS);

function atualizarLista(){
  const filtros = {
    cidade: $cidade.value,
    chancela: $chancela.value,
    validade: $validade.value,
    busca: $busca.value
  };
  const lista = filtrarEmpresas(EMPRESAS, filtros);
  renderEmpresas($grid, lista);
  $vazio.hidden = lista.length > 0;
}

$cidade.addEventListener('change', atualizarLista);
$chancela.addEventListener('change', atualizarLista);
$validade.addEventListener('change', atualizarLista);
$busca.addEventListener('input', atualizarLista);
$limpar.addEventListener('click', () => {
  $cidade.value = '';
  $chancela.value = '';
  $validade.value = '';
  $busca.value = '';
  atualizarLista();
});

// verificação
$verificaForm.addEventListener('submit', (ev)=>{
  ev.preventDefault();
  renderVerificacao($verificaResultado, $verificaInput.value, EMPRESAS);
});

// header ano
document.getElementById('ano').textContent = new Date().getFullYear();

// menu mobile
const $toggle = document.querySelector('.menu-toggle');
const $menu = document.getElementById('menu');
$toggle.addEventListener('click', () => {
  const open = $menu.classList.toggle('show');
  $toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// inicia
atualizarLista();
