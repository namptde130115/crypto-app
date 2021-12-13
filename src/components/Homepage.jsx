import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '.';

const { Title } = Typography;

const Homepage = () => {
  const { data, isLoading } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(globalStats);

  if (isLoading) return 'Loading...';

  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Status
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title='Total Cryptocurrencies'
            value={globalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchanges'
            value={globalStats ? millify(globalStats?.totalExchanges) : 0}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Market Cap'
            value={globalStats ? millify(globalStats?.totalMarketCap) : 0}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24h Volume'
            value={globalStats ? millify(globalStats?.total24hVolume) : 0}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Markets'
            value={globalStats ? millify(globalStats?.totalMarkets) : 0}
          />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Latest Crypto News
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/news'>Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
