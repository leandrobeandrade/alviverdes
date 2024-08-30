const path = require('path');

module.exports = {
  entry: {
    index: ['./src/app/index.ts'], // index -> nome do arquivo gerado na pasta dist/app
    news: ['./src/app/news.ts'],
    players: ['./src/app/players.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',  // pega o nome do entry
    path: path.resolve(__dirname, './src', 'dist', 'app'),
  },
  mode: 'development'
};