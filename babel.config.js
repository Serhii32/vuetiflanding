module.exports = {
	// configureWebpack: {
	//     output: {
	//       publicPath: './'
	//     }
	// },
  presets: [
    ['@vue/app', {
      publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'
    }]
  ]

  
  // build: {
  //   assetsPublicPath: '/landing',
  // }
}
