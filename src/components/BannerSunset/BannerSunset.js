import React from 'react'
import { Info } from '@aragon/ui'

export default function BannerSunset() {
  return (
    <Info mode="warning" style={{ marginBottom: '12px', marginTop: '12px' }}>
      Lido DAO is sunsetting Aragon. The UI would be shutting down by the end of
      the year, please, refer to <a href="https://vote.lido.fi">vote.lido.fi</a>
      and <a href="https://operators.lido.fi">operators.lido.fi</a> apps
      instead.
    </Info>
  )
}
