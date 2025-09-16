import { normalizarTexto, cnpjLimpo, seloAtivo } from './utils.js';

export const normalizarBusca = (s) => normalizarTexto(s || '');

export function filtrarEmpresas(base, { cidade, chancela, validade, busca }){
  const q = normalizarBusca(busca);
  return base.filter(emp => {
    // cidade e chancela
    if (cidade && emp.cidade !== cidade) return false;
    if (chancela && emp.chancela !== chancela) return false;
    if (validade === 'validos' && !seloAtivo(emp)) return false;
    if (validade === 'expirados' && seloAtivo(emp)) return false;

    if (!q) return true;

    const campos = [
      emp.nome,
      emp.cidade,
      emp.chancela,
      emp.cnpj,
    ].map(normalizarTexto).join(' ');

    return campos.includes(q);
  });
}
