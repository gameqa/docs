import { globbySync } from 'globby';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';


const links = [
    { url: '/', changefreq: 'daily' },
    ...globbySync(['./**/[!_]?*.md', '!node_modules', '!README.md']).map(
        (path) => ({
            url: `/${path.replace('.md', '')}`,
            changefreq: 'daily',
        })
    ),
];

const main = async () => {
    console.log('Sitemap entries:');
    console.log(links);
    
    const stream = new SitemapStream({ hostname: "https://gameqa.app" });
    const content = (
        await streamToPromise(Readable.from(links).pipe(stream))
    ).toString('utf-8');
    
    fs.writeFileSync('./sitemap.xml', content);
}

main().then(console.log).catch(console.log)
