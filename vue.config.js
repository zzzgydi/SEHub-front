module.exports = {
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/api': {
        //target: 'http://localhost:8081',
        target: 'http://192.168.137.1',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
