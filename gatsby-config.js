/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
		{
		  resolve: `gatsby-source-notion-database`,
		  options: {
			sourceConfig: [
			  {
				name: 'projects',
				table: 'https://www.notion.so/d50369a028c7482a820b1008fe8f7867?v=23ef814ae8d149dbb2e1e708d4747eee',
				cacheType: 'html'
			  },
			]
		  }
		}
	]
}
