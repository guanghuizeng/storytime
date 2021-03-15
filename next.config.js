module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp3/,
      use: [
        {
          loader: 'file-uploader',
        },
      ],
    })

    return config
  },
}

