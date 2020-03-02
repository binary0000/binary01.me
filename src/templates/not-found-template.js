// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="NOT FOUND">
        <p>잘못된 경로에 들어오셨군요 쿠쿸..</p>
        <img src="/media/404_not_found.png" width="1000px"/>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
