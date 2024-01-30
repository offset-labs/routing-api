import { Protocol } from '@uniswap/router-sdk'
import { V2SubgraphProvider, V3SubgraphProvider } from '@offsetcarbon/smart-order-router'
import { ChainId } from '@offsetcarbon/sdk-core'

export const chainProtocols = [
  // V3.
  {
    protocol: Protocol.V3,
    chainId: ChainId.MAINNET,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.MAINNET, 3, 90000),
  },
  {
    protocol: Protocol.V3,
    chainId: ChainId.ARBITRUM_ONE,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.ARBITRUM_ONE, 3, 90000),
  },
  // V2.
  {
    protocol: Protocol.V2,
    chainId: ChainId.MAINNET,
    timeout: 840000,
    provider: new V2SubgraphProvider(ChainId.MAINNET, 3, 900000, true, 1000), // 1000 is the largest page size supported by thegraph
  },
]
