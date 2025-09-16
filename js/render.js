import { seloAtivo, formatarData, mapaLink } from './utils.js';

export function renderSelectOptions(select, values){
  values.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v;
    opt.textContent = v;
    select.appendChild(opt);
  });
}

export function renderEmpresas(container, empresas){
  container.innerHTML = '';
  empresas.forEach(emp => container.appendChild(cardEmpresa(emp)));
}

function cardEmpresa(emp){
  const ativo = seloAtivo(emp);
  const li = document.createElement('article');
  li.className = 'card company-card';
  li.innerHTML = `
    <header>
      <h3>${emp.nome}</h3>
      <span class="badge ${ativo ? 'valid' : 'expired'}">${ativo ? 'Selo ativo' : 'Selo expirado'}</span>
    </header>
    <div class="company-meta">
      <span><strong>Cidade:</strong> ${emp.cidade}</span>
      <span><strong>Chancela:</strong> ${emp.chancela}</span>
      <span><strong>CNPJ:</strong> ${emp.cnpj}</span>
    </div>
    <div class="company-meta">
      <span><strong>Concedido:</strong> ${formatarData(emp.data_selo)}</span>
      <span><strong>Validade (2 anos):</strong> ${formatarData(emp.validade)}</span>
    </div>
    <div class="company-actions">
      <a class="btn ghost small" href="${mapaLink(emp)}" target="_blank" rel="noopener">Como chegar</a>
      ${emp.site ? `<a class="btn ghost small" href="${emp.site}" target="_blank" rel="noopener">Site</a>` : ''}
    </div>
  `;
  return li;
}

export function renderVerificacao(container, termo, empresas){
  const q = (termo || '').trim();
  if(!q){ container.textContent = ''; return; }

  const norm = q.replace(/\D/g,'');
  const byCnpj = empresas.find(e => e.cnpj.replace(/\D/g,'') === norm);
  const byNome = empresas.find(e => e.nome.toLowerCase().includes(q.toLowerCase()));

  const emp = byCnpj || byNome;
  if (!emp){
    container.innerHTML = `<p class="verify-bad">Nenhuma empresa encontrada para “${q}”.</p>`;
    return;
  }

  const ativo = seloAtivo(emp);
  container.innerHTML = `
    <p class="${ativo ? 'verify-ok' : 'verify-warn'}">
      ${ativo ? 'Selo ativo' : 'Selo expirado'} para <strong>${emp.nome}</strong> — CNPJ ${emp.cnpj}.
    </p>
    <p>Concedido em ${formatarData(emp.data_selo)}. Validade até ${formatarData(emp.validade)}.</p>
  `;
}
