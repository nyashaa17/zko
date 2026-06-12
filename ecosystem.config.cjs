module.exports = {
  apps: [
    {
      name: 'zimkickoff-next',
      script: './node_modules/next/dist/bin/next',
      args: 'start -p 3000 -H 0.0.0.0',
      exec_mode: 'cluster',
      instances: process.env.WEB_CONCURRENCY || 'max',
      env: {
        NODE_ENV: 'production',
        PORT: '3000',
        HOSTNAME: '0.0.0.0',
      },
    },
  ],
};
