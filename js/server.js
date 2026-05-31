require('dotenv').config()

const express = require('express')
const cors    = require('cors')
const path    = require('path')
const prisma  = require('./db')

const app  = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..')))


// APRESENTAÇÃO

app.get('/P2S/apresentacao', async (req, res) => {
  const dados = await prisma.apresentacao.findUnique({
    where:   { id: 1 },
    include: { contatos: true }
  })
  res.json(dados)
})

app.put('/P2S/apresentacao', async (req, res) => {
  const { nome, titulo, bio } = req.body
  const dados = await prisma.apresentacao.update({
    where:   { id: 1 },
    data:    { nome, titulo, bio },
    include: { contatos: true }
  })
  res.json(dados)
})


// FORMAÇÃO

app.get('/P2S/formacao', async (req, res) => {
  const lista = await prisma.formacao.findMany()
  res.json(lista)
})

app.post('/P2S/formacao', async (req, res) => {
  const { titulo, org, periodo, desc } = req.body
  const novo = await prisma.formacao.create({ data: { titulo, org, periodo, desc } })
  res.status(201).json(novo)
})

app.put('/P2S/formacao/:id', async (req, res) => {
  const { titulo, org, periodo, desc } = req.body
  const item = await prisma.formacao.update({
    where: { id: Number(req.params.id) },
    data:  { titulo, org, periodo, desc }
  }).catch(() => null)
  if (!item) return res.status(404).json({ erro: 'Não encontrado' })
  res.json(item)
})

app.delete('/P2S/formacao/:id', async (req, res) => {
  const item = await prisma.formacao.delete({
    where: { id: Number(req.params.id) }
  }).catch(() => null)
  if (!item) return res.status(404).json({ erro: 'Não encontrado' })
  res.json({ mensagem: 'Removido com sucesso' })
})


// CURSOS

app.get('/P2S/cursos', async (req, res) => {
  const lista = await prisma.curso.findMany()
  res.json(lista)
})

app.post('/P2S/cursos', async (req, res) => {
  const { nome, categoria, carga, ano } = req.body
  const novo = await prisma.curso.create({ data: { nome, categoria, carga, ano } })
  res.status(201).json(novo)
})

app.put('/P2S/cursos/:id', async (req, res) => {
  const { nome, categoria, carga, ano } = req.body
  const item = await prisma.curso.update({
    where: { id: Number(req.params.id) },
    data:  { nome, categoria, carga, ano }
  }).catch(() => null)
  if (!item) return res.status(404).json({ erro: 'Não encontrado' })
  res.json(item)
})

app.delete('/P2S/cursos/:id', async (req, res) => {
  const item = await prisma.curso.delete({
    where: { id: Number(req.params.id) }
  }).catch(() => null)
  if (!item) return res.status(404).json({ erro: 'Não encontrado' })
  res.json({ mensagem: 'Removido com sucesso' })
})


// PROJETOS

app.get('/P2S/projetos', async (req, res) => {
  const lista = await prisma.projeto.findMany()
  res.json(lista)
})

app.post('/P2S/projetos', async (req, res) => {
  const { nome, imagem, categoria, descricao, tecnologias, links } = req.body
  const novo = await prisma.projeto.create({
    data: { nome, imagem, categoria, descricao, tecnologias, links }
  })
  res.status(201).json(novo)
})

app.put('/P2S/projetos/:id', async (req, res) => {
  const { nome, imagem, categoria, descricao, tecnologias, links } = req.body
  const item = await prisma.projeto.update({
    where: { id: Number(req.params.id) },
    data:  { nome, imagem, categoria, descricao, tecnologias, links }
  }).catch(() => null)
  if (!item) return res.status(404).json({ erro: 'Não encontrado' })
  res.json(item)
})

app.delete('/P2S/projetos/:id', async (req, res) => {
  const item = await prisma.projeto.delete({
    where: { id: Number(req.params.id) }
  }).catch(() => null)
  if (!item) return res.status(404).json({ erro: 'Não encontrado' })
  res.json({ mensagem: 'Removido com sucesso' })
})


// EXPERIÊNCIA

app.get('/P2S/experiencia', async (req, res) => {
  const lista = await prisma.experiencia.findMany()
  res.json(lista)
})

app.post('/P2S/experiencia', async (req, res) => {
  const { cargo, empresa, periodo, descricao } = req.body
  const novo = await prisma.experiencia.create({ data: { cargo, empresa, periodo, descricao } })
  res.status(201).json(novo)
})

app.put('/P2S/experiencia/:id', async (req, res) => {
  const { cargo, empresa, periodo, descricao } = req.body
  const item = await prisma.experiencia.update({
    where: { id: Number(req.params.id) },
    data:  { cargo, empresa, periodo, descricao }
  }).catch(() => null)
  if (!item) return res.status(404).json({ erro: 'Não encontrado' })
  res.json(item)
})

app.delete('/P2S/experiencia/:id', async (req, res) => {
  const item = await prisma.experiencia.delete({
    where: { id: Number(req.params.id) }
  }).catch(() => null)
  if (!item) return res.status(404).json({ erro: 'Não encontrado' })
  res.json({ mensagem: 'Removido com sucesso' })
})


// COMPETÊNCIAS

app.get('/P2S/competencias', async (req, res) => {
  const tecnicas = await prisma.competenciaTecnica.findMany()
  const soft     = await prisma.competenciaSoft.findMany()
  res.json({ tecnicas, soft })
})

app.put('/P2S/competencias', async (req, res) => {
  const { tecnicas, soft } = req.body

  await prisma.competenciaTecnica.deleteMany()
  await prisma.competenciaTecnica.createMany({ data: tecnicas.map(t => ({ nome: t.nome, icone: t.icone })) })

  await prisma.competenciaSoft.deleteMany()
  await prisma.competenciaSoft.createMany({ data: soft.map(s => ({ nome: s.nome, icone: s.icone })) })

  const novasTecnicas = await prisma.competenciaTecnica.findMany()
  const novasSoft     = await prisma.competenciaSoft.findMany()
  res.json({ tecnicas: novasTecnicas, soft: novasSoft })
})


// LINKS

app.get('/P2S/links', async (req, res) => {
  const lista = await prisma.link.findMany()
  res.json(lista)
})

app.post('/P2S/links', async (req, res) => {
  const { plataforma, handle, icone, url } = req.body
  const novo = await prisma.link.create({ data: { plataforma, handle, icone, url } })
  res.status(201).json(novo)
})

app.put('/P2S/links/:id', async (req, res) => {
  const { plataforma, handle, icone, url } = req.body
  const item = await prisma.link.update({
    where: { id: Number(req.params.id) },
    data:  { plataforma, handle, icone, url }
  }).catch(() => null)
  if (!item) return res.status(404).json({ erro: 'Não encontrado' })
  res.json(item)
})

app.delete('/P2S/links/:id', async (req, res) => {
  const item = await prisma.link.delete({
    where: { id: Number(req.params.id) }
  }).catch(() => null)
  if (!item) return res.status(404).json({ erro: 'Não encontrado' })
  res.json({ mensagem: 'Removido com sucesso' })
})


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
