require("ts-node/register");

module.exports = {
  test_file_extension_regexp: /.*\.ts$/,
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
  },
  contracts_directory: "./src/contracts/",
  compilers: {
    solc: {
      version: "^0.8.10",
    },
  },
};
