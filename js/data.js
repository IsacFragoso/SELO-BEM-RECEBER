// Dados de exemplo. Substitua por dados reais quando disponíveis.
export const CHANCELAS = [
  'Hospedagem', 'Gastronomia', 'Agência/Operadora', 'Atrativo Turístico', 'Transporte Turístico'
];

// Helper para calcular validade +2 anos
function addYears(iso, years=2){
  const d = new Date(iso + 'T00:00:00');
  d.setFullYear(d.getFullYear() + years);
  return d.toISOString().slice(0,10);
}

export const EMPRESAS = [
  // Araçatuba
  {
    nome: 'Botânico Hotel Fazenda',
    cnpj: 'PENDENTE',
    cidade: 'Araçatuba',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Araçatuba, SP (Hotel Fazenda)',
    site: ''
  },
  // Andradina
  {
    nome: 'Hotel Vitória',
    cnpj: 'PENDENTE',
    cidade: 'Andradina',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Av. Barão do Rio Branco, Andradina - SP',
    site: ''
  },
  // Andradina
  {
    nome: 'Guanabara Palace Hotel',
    cnpj: 'PENDENTE',
    cidade: 'Andradina',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Andradina, SP',
    site: ''
  },
  // Andradina
  {
    nome: 'Hotel Casa Grande',
    cnpj: 'PENDENTE',
    cidade: 'Andradina',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Rua Barão do Rio Branco, Andradina - SP',
    site: ''
  },
  // Andradina
  {
    nome: 'Hotel Ibis Andradina',
    cnpj: 'PENDENTE',
    cidade: 'Andradina',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Andradina, SP',
    site: ''
  },
  // Andradina
  {
    nome: 'Hotel Roda D’Água',
    cnpj: 'PENDENTE',
    cidade: 'Andradina',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Andradina, SP',
    site: ''
  },
  // Andradina
  {
    nome: 'Sarau Palace Hotel',
    cnpj: 'PENDENTE',
    cidade: 'Andradina',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Andradina, SP',
    site: ''
  },
  // Andradina
  {
    nome: 'Savana Park Hotel',
    cnpj: 'PENDENTE',
    cidade: 'Andradina',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Andradina, SP',
    site: ''
  },
  // Andradina
  {
    nome: 'Wakanda Hotel',
    cnpj: 'PENDENTE',
    cidade: 'Andradina',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Andradina, SP',
    site: ''
  },
  // Andradina
  {
    nome: 'Oeste Plaza Hotel',
    cnpj: 'PENDENTE',
    cidade: 'Andradina',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Andradina, SP',
    site: ''
  },
  // Andradina
  {
    nome: 'Ondara Flat Hotel',
    cnpj: 'PENDENTE',
    cidade: 'Andradina',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Andradina, SP',
    site: ''
  },
  // Birigui
  {
    nome: 'ibis Styles Birigui',
    cnpj: 'PENDENTE',
    cidade: 'Birigui',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Birigui, SP',
    site: ''
  },
  // Birigui
  {
    nome: 'Hotel Birigui Palace',
    cnpj: 'PENDENTE',
    cidade: 'Birigui',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Birigui, SP',
    site: ''
  },
  // Birigui
  {
    nome: 'Big Plaza Hotel',
    cnpj: 'PENDENTE',
    cidade: 'Birigui',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Birigui, SP',
    site: ''
  },
  // Birigui
  {
    nome: 'Pérola Verde Hotel',
    cnpj: 'PENDENTE',
    cidade: 'Birigui',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Birigui, SP',
    site: ''
  },
  // Penápolis
  {
    nome: 'Sakr Hotel',
    cnpj: 'PENDENTE',
    cidade: 'Penápolis',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Penápolis, SP',
    site: ''
  },
  // Penápolis
  {
    nome: 'Bigs Hotel (Penápolis)',
    cnpj: 'PENDENTE',
    cidade: 'Penápolis',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Penápolis, SP',
    site: ''
  },
  // Penápolis
  {
    nome: 'Grande Hotel Penápolis',
    cnpj: 'PENDENTE',
    cidade: 'Penápolis',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Penápolis, SP',
    site: ''
  },
  // Guararapes
  {
    nome: 'Villa Cedros Hotel',
    cnpj: 'PENDENTE',
    cidade: 'Guararapes',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Guararapes, SP',
    site: ''
  },
  // Guararapes
  {
    nome: 'Hotel Guararapes (local)',
    cnpj: 'PENDENTE',
    cidade: 'Guararapes',
    chancela: 'Hospedagem',
    data_selo: '2025-09-09',
    validade: '2027-09-09',
    endereco: 'Guararapes, SP',
    site: ''
  },
];
