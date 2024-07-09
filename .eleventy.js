module.exports = eleventyConfig => {
    const dateFilter = require('./src/filters/date-filter.js');
    const w3DateFilter = require('./src/filters/w3-date-filter.js');
    const rssPlugin = require('@11ty/eleventy-plugin-rss');

    eleventyConfig.addFilter('dateFilter', dateFilter);
    eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
    eleventyConfig.addPlugin(rssPlugin);

    eleventyConfig.addWatchTarget('./src/scss');
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/fonts');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/images');

    eleventyConfig.addCollection('notes', collection => {
        return [...collection.getFilteredByGlob('./src/notes/*.md')].reverse();
    });

    eleventyConfig.setUseGitIgnore(false);

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "public"
        }
    }
}
