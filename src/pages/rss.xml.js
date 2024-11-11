import {SITE_NAME, SITE_DESCRIPTION, SITE_LANGUAGE } from '../variables/config';
import rss from '@astrojs/rss';

export function GET(context) {
  return rss({
    title: `${SITE_NAME} - Blog`,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [],
    customData: `<language>${SITE_LANGUAGE}</language>`,
  });
}