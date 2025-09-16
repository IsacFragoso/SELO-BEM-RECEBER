export function normalizarTexto(t){
  return (t || '').toString().toLowerCase()
    .normalize('NFD').replace(/\p{Diacritic}/gu,'')
    .trim();
}

export function cnpjLimpo(cnpj){
  return (cnpj || '').replace(/\D/g,'');
}

export function seloAtivo(emp){
  const hoje = new Date();
  return new Date(emp.validade) >= new Date(hoje.toISOString().slice(0,10));
}

export function formatarData(iso){
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
}

export function mapaLink(emp){
  // usa endereço se existir, senão nome+cidade
  const q = encodeURIComponent(emp.endereco || `${emp.nome}, ${emp.cidade}, SP`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
