import type { NextApiRequest, NextApiResponse } from 'next';
import enTranslations from '@/data/languages/en/common.json';
import zhTWTranslations from '@/data/languages/zh-tw/common.json';

const translations = {
  en: enTranslations,
  'zh-tw': zhTWTranslations
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { language } = req.query;
  const translation = translations[language as keyof typeof translations];
  if (translation) {
    res.status(200).json(translation);
  } else {
    res.status(404).json({ error: 'Translations not found' });
  }
}