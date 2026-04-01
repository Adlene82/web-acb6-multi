import { getRequestConfig } from 'next-intl/server';
import type { AbstractIntlMessages } from 'next-intl';
import frMessages from '../messages/fr.json';
import ruMessages from '../messages/ru.json';
import { locales, type Locale, defaultLocale } from './routing';

const messagesByLocale: Record<Locale, AbstractIntlMessages> = {
  fr: frMessages,
  ru: ruMessages,
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = (await requestLocale) as Locale | undefined;
  const locale = requested && locales.includes(requested) ? requested : defaultLocale;

  return {
    locale,
    messages: messagesByLocale[locale],
  };
});
