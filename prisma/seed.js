const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  await prisma.apresentacao.upsert({
    where:  { id: 1 },
    update: {},
    create: {
      id:     1,
      nome:   'Altier Romão Cruz',
      titulo: 'Estudante de Desenvolvimento de Software Multiplataforma',
      bio:    'Estudante apaixonado por tecnologia e desenvolvimento web, cursando Técnico em Informática. Tenho experiência prática com HTML, CSS, JavaScript e MySQL. Gosto de resolver problemas com código limpo e de aprender continuamente novas ferramentas. Busco minha primeira oportunidade profissional na área de TI.',
      contatos: {
        create: [
          { icone: 'bi-envelope-fill', texto: 'altier.dev@gmail.com', href: 'mailto:altier.dev@gmail.com' },
          { icone: 'bi-whatsapp',      texto: 'Meu Whatsapp',         href: 'https://wa.me/5512988126052' }
        ]
      }
    }
  })

  await prisma.formacao.createMany({
    skipDuplicates: true,
    data: [
      { titulo: 'Desenvolvimento de Software Multiplataforma', org: 'Fatec Prof. Jessen Vidal',     periodo: '2025 – Atualmente', desc: 'Programação web, banco de dados, redes e lógica de programação.' },
      { titulo: 'Técnico em Redes de Computadores',           org: 'Escola SENAI Santos Dumont',   periodo: '2020 – 2021',       desc: 'Programação web, banco de dados, redes e lógica de programação.' },
      { titulo: 'Ensino Médio',                               org: 'E.E Lourdes Maria de Camargo', periodo: '2017 – 2019',       desc: '' }
    ]
  })

  await prisma.curso.createMany({
    skipDuplicates: true,
    data: [
      { nome: 'Escola de Inovadores',                        categoria: 'Profissionalizante', carga: '40h',  ano: '2025' },
      { nome: 'Introdução Ao SCRUM',                         categoria: 'Profissionalizante', carga: '6h',   ano: '2025' },
      { nome: 'Fundamentos em Programação com Linguagem C#', categoria: 'Profissionalizante', carga: '120h', ano: '2022' }
    ]
  })

  await prisma.projeto.createMany({
    skipDuplicates: true,
    data: [
      { nome: 'One Piece Bio',    imagem: './img/projetos/Pj_OP.png',  categoria: 'Web',               descricao: 'Projeto de Bootcamp apresentando os principais personagens da Série One Piece.', tecnologias: ['HTML','CSS','JavaScript'],                           links: [{icone:'bi-github',texto:'GitHub',url:'https://github.com/T13rz/Projeto-OnePiece'},{icone:'bi-box-arrow-up-right',texto:'Demo',url:'https://t13rz.github.io/Projeto-OnePiece/'}] },
      { nome: 'JDM Motors',       imagem: './img/projetos/jdm_M.png',  categoria: 'Web',               descricao: 'Página Web estática.',                                                           tecnologias: ['HTML','CSS','Bootstrap5'],                           links: [{icone:'bi-github',texto:'GitHub',url:'https://github.com/t13rz/ds2'},{icone:'bi-box-arrow-up-right',texto:'Demo',url:'https://ds2-one.vercel.app/'}] },
      { nome: 'API Codewave',     imagem: './img/projetos/api_1S.png', categoria: 'Projeto Academico', descricao: 'Levantamento de dados do Censo em São José dos Campos com filtragem usando Pandas.', tecnologias: ['HTML','CSS','Python','Pandas','Plotly','Flask','MySQL'], links: [{icone:'bi-github',texto:'GitHub',url:'https://github.com/guilhermefpo/CodeWave-1DSM-API'}] },
      { nome: 'JanoSys SIGNA',    imagem: './img/projetos/Signa.png',  categoria: 'Projeto Academico', descricao: 'Sistema de Gerenciamento de normas e notas com níveis de acesso.',                tecnologias: ['HTML','CSS','TypeScript','React'],                   links: [{icone:'bi-github',texto:'GitHub',url:'https://github.com/T13rz/Janosys-Project-Akaer'}] }
    ]
  })

  await prisma.experiencia.createMany({
    skipDuplicates: true,
    data: [
      { cargo: 'Operador de Pós-Vendas', empresa: 'Construdecor S/A', periodo: 'Fev 2024 – Dez 2024', descricao: 'Suporte ao cliente no pós-venda, acompanhamento de pedidos e resolução de demandas.' },
      { cargo: 'Aprendiz Vendas',        empresa: 'Construdecor S/A', periodo: 'Mar 2022 – Dez 2024', descricao: 'Suporte ao cliente no pós-venda, acompanhamento de pedidos e resolução de demandas.' }
    ]
  })

  await prisma.competenciaTecnica.createMany({
    skipDuplicates: true,
    data: [
      { nome: 'HTML5',      icone: 'bi-filetype-html' },
      { nome: 'CSS3',       icone: 'bi-filetype-css'  },
      { nome: 'JavaScript', icone: 'bi-filetype-js'   },
      { nome: 'Python',     icone: 'bi-filetype-py'   },
      { nome: 'MySQL',      icone: 'bi-database'      },
      { nome: 'TypeScript', icone: 'bi-filetype-tsx'  },
      { nome: 'Git',        icone: 'bi-git'           },
      { nome: 'Docker',     icone: 'bi-boxes'         },
      { nome: 'React',      icone: 'bi-box'           },
      { nome: 'AWS',        icone: 'bi-amazon'        }
    ]
  })

  await prisma.competenciaSoft.createMany({
    skipDuplicates: true,
    data: [
      { nome: 'Comunicação',            icone: 'bi-chat-dots'        },
      { nome: 'Trabalho em equipe',     icone: 'bi-people'           },
      { nome: 'Organização',            icone: 'bi-kanban'           },
      { nome: 'Proatividade',           icone: 'bi-lightning-charge' },
      { nome: 'Aprendizado rápido',     icone: 'bi-book'             },
      { nome: 'Criatividade',           icone: 'bi-lightbulb'        },
      { nome: 'Resolução de problemas', icone: 'bi-puzzle'           },
      { nome: 'Responsabilidade',       icone: 'bi-shield-check'     }
    ]
  })

  await prisma.link.createMany({
    skipDuplicates: true,
    data: [
      { plataforma: 'LinkedIn', handle: 'Altier Romão', icone: 'bi-linkedin', url: 'https://linkedin.com/in/tierz' },
      { plataforma: 'GitHub',   handle: '@T13rz',       icone: 'bi-github',   url: 'https://github.com/T13rz'     }
    ]
  })

  console.log('Seed concluído.')
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
