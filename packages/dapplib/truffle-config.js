require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remind method hockey clinic fresh tube'; 
let testAccounts = [
"0x979e5d87c21bd383635f13a93cf39dc5134ac5791e4540eb9a2bf9e379b0b7e0",
"0xf19ff711fe69c19852df9d9a1ab6c66f76d1b216221579a621c275b9ec85fa93",
"0xdf20cd309b9ac205b35340955738d8577884135e789488e43ccaf2a3481663b8",
"0xde8e487ce40f93d11e687b30995a990958663bd061d6e06cf27728bd133e45ef",
"0xf055388c07267494dcbe654e08b10e1676ce260e943d149ddfdad652ae51b57a",
"0xc895bd60de47befdc1a5af011c33530c9f883258bff81b6f8400befbd4792706",
"0x421d28dda4f5af572b6ebdf96d5bee0e9930573b9b21533f33fd94a6d05dff91",
"0x7af79bd10ab828226a178e8ae00229237589c6d5b80e81f0da911f14753f6c24",
"0x4f4044620b420b23ed0c2086ff65f4467d6cd7e4ce0b4888c7ba06238983ffa9",
"0xf3cb5a686e4ef22abb4438931110fa3aeffcc117bc92ac654d6d73912500ba6b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

