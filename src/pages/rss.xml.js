import { optionSEO } from "../variables/config";
import { API_URL } from "astro:env/client";
import rss from '@astrojs/rss';

export async function GET(context) {
  const data = await fetch(`${API_URL}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
});
const response = await data.json();
const characters = response.results;
  return rss({
    title: `${optionSEO.nameWeb} - RSS Feed`,
    description: optionSEO.description,
    site: context.site,
    items: characters.map((post) => ({
        name: post.name,
        status: post.status,
        species: post.species,
        gender: post.gender,
        image: post.image,
       pubDate: new Date(),
       guid: `${context.site}character/${post.id}`,
       author: `${optionSEO.author}`
    })),
    customData: `<language>es</language>`,
  });
}