import {SITE_NAME, SITE_DESCRIPTION, SITE_LANGUAGE, SITE_AUTHOR } from '../variables/config';
import rss from '@astrojs/rss';
import post from '../../data/users.json';
export function GET(context) {
  return rss({
    title: `${SITE_NAME} - Blog`,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: post.map(p => ({
      title: p.title,
      link: `${context.site}blog/${p.id}`,
      description: p.description,
      pubDate: new Date(p['pub-date']).toUTCString(),
      guid: `${context.site}blog/${p.id}`,
      author: SITE_AUTHOR,
      category: p.category,
    })),
    customData: `<language>${SITE_LANGUAGE}</language>`,
  });
}
