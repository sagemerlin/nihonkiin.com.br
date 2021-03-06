interface Jogador {
  nome: string;
  cidade: string;
  estado: Estado;
  nascimento: number;
  elo: number;
  professor_certificado: boolean;
  perfis: Perfil[];
  social: Social[];
  contato?: Contato;
  foto?: URL;
}

interface Perfil {
  servidor: Servidor;
  nome: string;
  ranking: Ranking;
}

interface Social {
  rede: Rede;
  perfil: URL;
}

interface Contato {
  email?: string;
  telefone?: number;
}

enum Rede {
  facebook = "Facebook",
}

enum Estado {
  acre = "AC",
  alagoas = "AL",
  amapa = "AP",
  amazonas = "AM",
  bahia = "BA",
  ceara = "CE",
  df = "DF",
  es = "ES",
  goias = "GO",
  maranhao = "MA",
  mt = "MT",
  ms = "MS",
  mg = "MG",
  para = "PA",
  paraiba = "PB",
  parana = "PR",
  pernambuco = "PE",
  piaui = "PI",
  rio = "RJ",
  rn = "RN",
  rs = "RS",
  rondonia = "RO",
  roraima = "RR",
  sp = "SP",
  sergipe = "SE",
  tocantins = "TO",
}

enum Servidor {
  ogs = "OGS",
  kgs = "KGS",
  tygem = "Tygem",
  wbaduk = "WBaduk",
  foxy = "Fox Go",
}

enum Ranking {
  d9 = 3100,
  d8 = 3000,
  d7 = 2900,
  d6 = 2800,
  d5 = 2700,
  d4 = 2600,
  d3 = 2500,
  d2 = 2400,
  d1 = 2300,
  k1 = 2200,
  k2 = 2100,
  k3 = 2000,
  k4 = 1900,
  k5 = 1800,
  k6 = 1700,
  k7 = 1600,
  k8 = 1500,
  k9 = 1400,
  k10 = 1300,
  k11 = 1200,
  k12 = 1100,
  k13 = 1000,
  k14 = 900,
  k15 = 800,
  k16 = 700,
  k17 = 600,
  k18 = 500,
  k19 = 400,
  k20 = 300,
  k21 = 200,
  k22 = 100,
  k23 = 0,
  k24 = -100,
  k25 = -200,
  k26 = -300,
  k27 = -400,
  k28 = -500,
  k29 = -600,
  k30 = -700,
}

export const jogadores: Jogador[] = [
  {
    nome: "Philippe Fanaro",
    cidade: "São Paulo",
    estado: Estado.sp,
    nascimento: Date.UTC(1992, 5, 27),
    elo: 2300,
    professor_certificado: true,
    perfis: [
      {
        servidor: Servidor.ogs,
        nome: "psygo",
        ranking: Ranking.k1,
      },
      {
        servidor: Servidor.kgs,
        nome: "psygo",
        ranking: Ranking.d1,
      },
    ],
    social: [
      {
        rede: Rede.facebook,
        perfil: new URL("philippe.fanaro"),
      },
    ],
    contato: {
      email: "philippefanaro@gmail.com",
      telefone: 5511970286739,
    },
    foto: new URL("https://imgur.com/gallery/YtxsVTy"),
  },
];
