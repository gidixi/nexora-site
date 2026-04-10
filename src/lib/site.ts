/**
 * Polygon mainnet executor addresses from project ops docs (`GUIDA_COMPLETA.md`).
 * `SANDWICH_STRATEGY.md` also references an alternate SandwichExecutorYul deployment — verify on-chain for your deployment.
 */
export const POLYGON_CONTRACTS = {
  sandwichExecutorYul: '0xbDf3e34Bcdb48BB3981826b94B5Af13Bb76684cc',
  arbExecutorYul: '0x762f5dAd101F2e99b547798943fd8130F5e07444',
  flashLoanArbExecutorBalancer: '0x76c3206Ecc71BDa6f312a2FC7630e70fF8158628',
  aaveFlashLoanArbExecutor: '0xc6D31752454722e1c79CF2f2273377ab2e52d32d',
} as const

/** Alternate sandwich executor cited in `SANDWICH_STRATEGY.md` (strategy reference). */
export const POLYGON_SANDWICH_ALT_ADDRESS = '0x7E3Aa7C95299c5FDD94D1f63F5022b3F75EB76dC' as const
