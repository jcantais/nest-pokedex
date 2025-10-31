export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV,
  mongodb: process.env.MONGODB,
  port: process.env.PORT,
  default_limit: process.env.DEFAULT_LIMIT,
});
