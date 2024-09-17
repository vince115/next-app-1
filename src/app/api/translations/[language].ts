import type { NextApiRequest, NextApiResponse } from 'next';
import enTranslations from '@/data/languages/en/common.json';
import zhTWTranslations from '@/data/languages/zh-tw/common.json';

const translations = {
  en: enTranslations,
  'zh-tw': zhTWTranslations
};
//https://api.jsonstorage.net/v1/json/7ea283c6-ccff-43ac-bab8-bca3e6ea94a9/d68af286-9d57-4e64-8c67-c854cf464cad

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { language } = req.query;
  const translation = translations[language as keyof typeof translations];
  if (translation) {
    res.status(200).json(translation);
  } else {
    res.status(404).json({ error: 'Translations not found' });
  }
}