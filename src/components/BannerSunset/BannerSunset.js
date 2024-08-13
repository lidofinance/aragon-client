import React from 'react'
import { Info } from '@aragon/ui'

export default function BannerSunset() {
  return (
    <Info mode="warning" style={{ marginBottom: '12px', marginTop: '12px' }}>
      The support for Aragon UI has been discontinued. The UI is proposed to be
      shut down by the end of 2024, so please use&nbsp;
      <a href="https://vote.lido.fi">vote.lido.fi</a> and&nbsp;
      <a href="https://operators.lido.fi">operators.lido.fi</a> apps instead.
      More info and discussion are on the&nbsp;
      <a href="https://research.lido.fi/t/discontinuation-of-aragon-ui-use/7992">
        Lido Research forum
      </a>
      .
    </Info>
  )
}
