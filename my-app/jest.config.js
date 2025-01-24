export default {
    testEnvironment: "jsdom", // Simulates a browser-like environment for Jest
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Transforms JSX and modern JavaScript
    },
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"], // Jest setup file
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports correctly
      "\\.(svg|jpg|jpeg|png|gif|webp|avif|ico|bmp|tiff)$": "<rootDir>/src/__mocks__/fileMock.js", // Mock images & SVGs
    },
  };
  