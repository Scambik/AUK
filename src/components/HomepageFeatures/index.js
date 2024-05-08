import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hlas a tón značky',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Táto príručka má za cieľ pomôcť všetkým členom tímu porozumieť a používať hlas a tón značky, aby sme vytvorili jednotnú komunikáciu so zákazníkmi a partnermi.
      </>
    ),
  },
  {
    title: 'Usmernenia pre obsah',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Obsahová stratégia určuje, ako bude značka komunikovať so svojím publikom. Dodržiavaním usmernení dosiahnete konzistentný a efektívny obsah naprieč všetkými kanálmi.
      </>
    ),
  },
  {
    title: 'Ukážky implementácie',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
