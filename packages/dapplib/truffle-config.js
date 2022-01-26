require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift rice sadness assume give kiwi metal giggle'; 
let testAccounts = [
"0xc9868a6f885bf8e67712d4ff4c17d48d92a93e0f1d9ca6995270338048fb6b82",
"0x3800303abf964a676cd507c3ccb567e0992087673614715b5cabfd34fed526fc",
"0xa77429f9c15c8ee9978ebf77cf39cce2b9115f9b1948c338fb1f85836b4cba9c",
"0xeb63f4aa2a841a13ace9512be7f3952141f7b16eec0dcc9345189972ee446e4a",
"0x5d0350eda5e49fded6f086efeb0c53de6257dfc0db8ec455a1817d7ba1ece063",
"0xcce78fc5dc7cc7ed1052a423a2583141c1e9591871f1c4ec93f237b73f38ec58",
"0xf95459fd01b980ce9d1fae9eea578a214d1b45d1d2293363c6329d3ee228a9cc",
"0x16e389bb99732a072c05d9e23920fcd3b3dbfc37fa6489ba64a9a8745dc3d8c2",
"0xffe80861a5912995bca269e9a05feb358e10f559650268e420ae23dee6b305a6",
"0x782def0e38b4a1393720bc21339c31df4ca39c3c872c901d650e875c55f6013d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


