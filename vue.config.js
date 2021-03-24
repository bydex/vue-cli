const vueConfig = {
  configureWebpack: {
    plugins: [
    ],
  },
  css: {
    requireModuleExtension: false,

    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/main.scss";`
      },
    }
  }
}

module.exports = vueConfig
