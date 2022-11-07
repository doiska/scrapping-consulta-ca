import * as puppeteer from 'puppeteer';

export type Response = {
  id: string;
  status: string;
  expiration: string;
  process: string;
  reason: string;
  company: string;
  fantasy_name: string;
  city_state: string;
  details: string;
  references: string;
  approved_for: string;
  report_id: string;
  laboratory_cnpj: string;
  cnpj: string;
}

const keyRemap = {
  "N° CA": "id",
  "Situação": "status",
  "Validade": "expiration",
  "N° Processo": "process",
  "Natureza": "reason",
  "Razão Social": "company",
  "Nome Fantasia": "fantasy_name",
  "Cidade/UF": "city_state",
  "Marcação": "details",
  "Referências": "references",
  "Aprovado Para": "approved_for",
  "N° do Laudo": "report_id",
  "CNPJ do Laboratório": "laboratory_cnpj",
  'CNPJ': 'cnpj',
};

const getResponse = async (id: string): Promise<Response> => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`https://www.consultaca.com/${id}`);

  const content = await page.$('#box_result');

  if(!content) {
    throw new Error('Invalid ID');
  }

  const paragraphs = await content.$$('p');
  const promises = paragraphs.map(async (p) => await p.evaluate((node) => node.textContent));
  const text = await Promise.all(promises);

  const kvAsArray = text
    .map((t) => t.split(':'))
    .filter((t) => t.length === 2 && t[0].trim() !== '' && t[1].trim() !== '');

  const kvAsObject = kvAsArray.reduce((acc, [key, value]) => {
    const newKey = keyRemap[key] || key;
    return { ...acc, [newKey]: value.trim() };
  }, {} as Response);

  console.log(kvAsObject);

  await browser.close();

  return kvAsObject;
}

getResponse('111111111').catch((e) => console.log(e));