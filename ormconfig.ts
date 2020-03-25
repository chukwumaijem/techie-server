import envs from './src/config';

export = {
  ...envs.database,
  entities: ['src/modules/**/*.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
  cli: {
    entitiesDir: 'src/modules',
    migrationsDir: 'src/migrations'
  },
  synchronize: true,
};
