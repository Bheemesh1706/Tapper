import React from 'react';
import {
    Stat,
    StatLabel,
    StatNumber,
    StatGroup,
  } from '@chakra-ui/react';
import { StatProps } from '../../interface/interface';

function StatsCard(props:StatProps) {
  return (
      <div>
          <StatGroup>
            <Stat>
                <StatLabel>Current Price</StatLabel>
                <StatNumber>${props.data.current_price}</StatNumber>
            </Stat>
            <Stat>
                <StatLabel>Market Cap</StatLabel>
                <StatNumber>${props.data.market_cap}</StatNumber>
            </Stat>

        </StatGroup>

        <StatGroup>
                <Stat>
                    <StatLabel>24hrs high</StatLabel>
                    <StatNumber>${props.data.high_24h}</StatNumber>
                </Stat>

                <Stat>
                    <StatLabel>24hrs Low</StatLabel>
                    <StatNumber>${props.data.low_24h}</StatNumber>
                </Stat>
        </StatGroup>
        <StatGroup>
                <Stat>
                    <StatLabel>Price Change in 24h</StatLabel>
                    <StatNumber>${props.data.price_change_24h}</StatNumber>
                </Stat>

               
        </StatGroup>
      </div>
)
}

export default StatsCard