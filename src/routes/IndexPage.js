import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage({example,dispatch}) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      {/* <button onClick={() => {dispatch({type: 'example/fetch'})}}></button> */}
    </div>
  );
}

IndexPage.propTypes = {
};
function mapStateToProps(state){
  const { example } = state
  return {example}
}

export default connect(mapStateToProps)(IndexPage);
