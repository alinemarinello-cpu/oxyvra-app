# Roadmap — Assinaturas Oxyvra

Matriz vigente (substitui versões anteriores): 2 planos de software + 1 add-on de insumos.

- [x] Stripe: produtos/preços Consultório (97/948), Clínica (199/1908), Add-on Insumos Odontológicos (260/2640)
- [ ] Migração: tabela `assinaturas` (plano, add-on, ciclo, status, unidades, endereço de entrega, trial) e `remessas_insumos`
- [x] `src/lib/planos-oxyvra.ts` — matriz, feature flags e limite de unidades
- [ ] `src/lib/stripe.server.ts` + `src/lib/stripe.ts`
- [ ] Server fns de checkout embutido (add-on como 2ª linha + `shipping_address_collection`) e portal
- [ ] Webhook Stripe `/api/public/payments/webhook` sincronizando assinatura e criando remessa quando há add-on
- [ ] Página de planos/checkout em `/painel/assinatura`
- [ ] Travas de trial: marca d'água "TESTE — SEM VALIDADE SANITÁRIA" e selo público inativo
- [ ] Alerta de conversão no dia 12 (push + WhatsApp)
- [ ] Feature gating por plano no painel

## Novas tarefas (05/09/2026)
- [x] Trocar produtos dos cartões da tela /saude pela listagem odontológica (Desinfetante de Superfícies, Detergente Enzimático, Indicadores Químicos Classe 5/6, Indicadores Biológicos, Wipes Desinfetantes)
- [x] Relatório de tudo que existe na área de Saúde e Estética (/mnt/documents)

## Onboarding de alta conversão (05/09/2026)
- [x] `/onboarding/step-1` cadastro rápido (nome, e-mail, WhatsApp com máscara, CNPJ/CPF)
- [x] `/onboarding/step-2` porte da clínica (cadeiras/equipos + autoclaves) salvo em `assinaturas`
- [x] `/onboarding/step-3` planos mensal/anual, kit Full Care por cadeira, trial 14 dias sem cartão e checkout embutido
- [x] Marca d'água "TESTE — SEM VALIDADE SANITÁRIA" em todos os PDFs quando TRIALING/PAST_DUE
- [ ] Login social com Google (requer credenciais do Google Cloud)
- [ ] Webhook de boas-vindas na etapa 1

## Acesso por PINs de turno + modo supervisor (06/09/2026)
- [x] Tabela `unit_pins` (nome, pin, papel operador/supervisor, ativo) + RLS por organização
- [x] Colunas `pin_nome` em `cleanings` e `execucoes`
- [x] `resolverPin` consulta unit_pins primeiro e cai no PIN principal da unidade
- [x] Sessão local guarda PIN atual (nome + papel) para offline (`oxyvra-store`)
- [x] Tela da unidade no painel com CRUD de PINs por turno
- [x] Menu do app de campo mostra o turno e, para supervisor, resumo do turno + aprovar/reprovar limpezas
- [x] Login da equipe continua somente por PIN (sem segundo fator)
