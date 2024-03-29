import type { Config } from 'jest';
import { defaults } from 'jest-config';

export default async (): Promise<Config> => {
  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, '/dist/'],
    clearMocks: true,
  };
};
