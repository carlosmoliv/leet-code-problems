import { Config } from "jest";

const config: Config = {
  clearMocks: true,
  coverageDirectory: "<rootDir>/coverage",
  coverageProvider: "v8",
  roots: ['<rootDir>/src'],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  testTimeout: 60000
};

export default config;
