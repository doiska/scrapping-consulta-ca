# Scrapping content from [ConsultaCA](https://consultaca.com)

Consulte com facilidade e rapidez o Certificado de Aprovação (CA) dos Equipamentos de Proteção Individual (EPI) fornecido pelo Ministério do Trabalho.

## Run using:
```npm install && npx tsx index.ts```

## Response example:
```js
{
  id: '28058',
  status: 'VENCIDO',
  expiration: '13/12/2015',
  process: '46000022477201027',
  reason: 'Nacional',
  company: 'IPT/FRANCA - INSTITUTO DE PESQUISAS TECNOLÓGICAS',
  cnpj: '60.042.686/0001-05',
  fantasy_name: 'HÉRCULES',
  city_state: 'SAO BERNARDO DO CAMPO/SP',
  details: 'Na parte interna da gola',
  references: 'HK 022',
  approved_for: 'PROTEÇÃO DO TRONCO E MEMBROS SUPERIORES DO USUÁRIO CONTRA RISCOS DE ORIGEM TÉRMICA (FRIO).',
  report_id: '1 014 889-203/2010',
  laboratory_cnpj: '60.633.674/0006-60'
}
```
