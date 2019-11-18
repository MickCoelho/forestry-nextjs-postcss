import React, { Component } from 'react';

import Hero from '../../components/Title';
import content from '../../../content/home.md';
import styles from './styles.css';

export default class Home extends Component {
  render() {
    const { hero } = content.attributes;

    return (
      <section className={styles.container}>
        <Hero name={hero} />
      </section>
    );
  }
}
