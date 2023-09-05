import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero bg-[#2400ff]', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title text-white">Dev Friends DAO</h1>
        <p className="hero__subtitle text-white">Where product dev roles get together and build Web3 projects as a DAO.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg bg-slate-800 hover:bg-[#ff00f5]"
            to="/docs/intro">
            Go to DFD docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <div className='bg-[#ff0000] py-14'>
          <p className="text-center text-2xl text-white font-medium">
            Dev Friends DAO is a DAO that unites subDAO that bootstrap and operate a project.<br />
            We are building 10x awesome products in a 10x better organizational scheme.
          </p>
        </div>
      </main>
    </Layout>
  );
}
