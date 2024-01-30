import { GasPrice, IGasPriceProvider } from '@offsetcarbon/smart-order-router'
import { BigNumber } from 'ethers'

export class StaticGasPriceProvider implements IGasPriceProvider {
  constructor(private gasPriceWei: BigNumber) {}
  async getGasPrice(): Promise<GasPrice> {
    return { gasPriceWei: this.gasPriceWei }
  }
}
