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
  {
    nome: 'Pousada Sol do Tietê',
    cnpj: '12.345.678/0001-99',
    cidade: 'Araçatuba',
    chancela: 'Hospedagem',
    data_selo: '2024-05-10',
    validade: addYears('2024-05-10'),
    endereco: 'R. das Flores, 100 - Araçatuba, SP',
    site: ''
  },
  {
    nome: 'Restaurante Sabores da Serra',
    cnpj: '98.765.432/0001-11',
    cidade: 'Birigui',
    chancela: 'Gastronomia',
    data_selo: '2023-04-20',
    validade: addYears('2023-04-20'),
    endereco: 'Av. Central, 500 - Birigui, SP',
    site: ''
  },
  {
    nome: 'Tietê Adventure Park',
    cnpj: '45.678.901/0001-22',
    cidade: 'Penápolis',
    chancela: 'Atrativo Turístico',
    data_selo: '2022-04-15',
    validade: addYears('2022-04-15'),
    endereco: 'Estrada Municipal km 12 - Penápolis, SP',
    site: 'https://exemplo.com/park'
  },
  {
    nome: 'Operadora Roteiros do Noroeste',
    cnpj: '23.456.789/0001-55',
    cidade: 'Guararapes',
    chancela: 'Agência/Operadora',
    data_selo: '2025-05-12',
    validade: addYears('2025-05-12'),
    endereco: '',
    site: ''
  },
  {
    nome: 'Barco do Rio Tietê',
    cnpj: '33.222.111/0001-77',
    cidade: 'Buritama',
    chancela: 'Transporte Turístico',
    data_selo: '2024-04-22',
    validade: addYears('2024-04-22'),
    endereco: 'Marina Municipal - Buritama, SP',
    site: ''
  },
  {
    nome: 'Hotel Fazenda Boa Vista',
    cnpj: '55.444.333/0001-88',
    cidade: 'Araçatuba',
    chancela: 'Hospedagem',
    data_selo: '2023-05-05',
    validade: addYears('2023-05-05'),
    endereco: '',
    site: ''
  },
  {
    nome: 'Café & Prosa Bistrô',
    cnpj: '11.222.333/0001-44',
    cidade: 'Andradina',
    chancela: 'Gastronomia',
    data_selo: '2025-05-02',
    validade: addYears('2025-05-02'),
    endereco: 'Rua do Comércio, 42 - Andradina, SP',
    site: 'https://exemplo.com/cafeprosa'
  },
  {
    nome: 'Museu Histórico do Vale',
    cnpj: '10.000.000/0001-00',
    cidade: 'Valparaíso',
    chancela: 'Atrativo Turístico',
    data_selo: '2024-04-18',
    validade: addYears('2024-04-18'),
    endereco: 'Praça Central, s/n - Valparaíso, SP',
    site: ''
  },
  {
    nome: 'Trilhas & Passeios Noroeste',
    cnpj: '66.777.888/0001-99',
    cidade: 'Lavínia',
    chancela: 'Agência/Operadora',
    data_selo: '2022-04-25',
    validade: addYears('2022-04-25'),
    endereco: '',
    site: ''
  },
  {
    nome: 'Vans Tur Araçatuba',
    cnpj: '22.111.000/0001-66',
    cidade: 'Araçatuba',
    chancela: 'Transporte Turístico',
    data_selo: '2025-05-22',
    validade: addYears('2025-05-22'),
    endereco: 'Rodoviária - Araçatuba, SP',
    site: ''
  }
];
