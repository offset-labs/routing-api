import { ChainId, TradeType } from '@offsetcarbon/sdk-core'

export const PAIRS_TO_TRACK: Map<ChainId, Map<TradeType, string[]>> = new Map([
  [
    ChainId.MAINNET,
    new Map([
      [
        TradeType.EXACT_INPUT,
        ['WETH/USDC', 'USDC/WETH', 'USDT/WETH', 'WETH/USDT', 'WETH/*', 'USDC/*', 'USDT/*', 'DAI/*', 'WBTC/*'],
      ],
      [TradeType.EXACT_OUTPUT, ['USDC/WETH', '*/WETH', '*/USDC', '*/USDT', '*/DAI']],
    ]),
  ],
  [
    ChainId.ARBITRUM_ONE,
    new Map([
      [TradeType.EXACT_INPUT, ['WETH/USDC', 'USDC/WETH']],
      [TradeType.EXACT_OUTPUT, ['*/WETH']],
    ]),
  ],
])
