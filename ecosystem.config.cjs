module.exports = {
  apps: [
    {
      name: 'arsenal',
      exec_mode: 'cluster',
      instances: 1,
      script: '.output/server/index.mjs',
      cwd: '/var/www/arsenal',
      env: {
        NITRO_PORT: 3000,
        NITRO_HOST: '0.0.0.0',
      },
    },
  ],
};
