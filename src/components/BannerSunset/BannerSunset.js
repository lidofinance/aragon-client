import React from 'react'
import { Info } from '@aragon/ui'

export default function BannerSunset() {
  return (
    <Info mode="warning" style={{ marginBottom: '12px', marginTop: '12px' }}>
      Lido contributors&nbsp;
      <a href="https://research.lido.fi/t/discontinuation-of-aragon-ui-use/7992">
        suggest discontinuing
      </a>&nbsp;
      the use of Aragon UI. The user interface will enter a ‘no support period’&nbsp;
      until the end of the year, so please use&nbsp;
      <a href="https://vote.lido.fi">vote.lido.fi</a>&nbsp;
      and <a href="https://operators.lido.fi">operators.lido.fi</a> apps
      instead.
    </Info>
  )
}
