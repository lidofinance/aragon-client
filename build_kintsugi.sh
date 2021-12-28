#!/bin/bash


ARAGON_IPFS_GATEWAY=https://infura.io/ipfs \
ARAGON_DEFAULT_ETH_NODE=ws://kintsugi.testnet.fi:8546 \
ARAGON_WALLETCONNECT_RPC_URL=http://kintsugi.testnet.fi:8545 \
ARAGON_APP_LOCATOR=ipfs \
ARAGON_ETH_NETWORK_TYPE=kintsugi \
ARAGON_ENS_REGISTRY_ADDRESS=0x46fF67E6f5d419aB203A25e6A1AB8FaFDE137d68 \
TAG=kintsugi ./build.sh

