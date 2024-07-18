import imgHead from '@/assets/head-img.jpg';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FormattedMessage, Link, history } from 'umi';
import HeaderSearch from '../header-search';
import styles from './component.less';

interface HomeLink {
  label: string;
  url: string;
}

const Links: Array<HomeLink> = [
  {
    label: 'home_header_link_page',
    url: '/',
  },
  {
    label: 'home_header_link_essay',
    url: '/',
  },
  {
    label: 'home_header_link_blog',
    url: '/',
  },
  {
    label: 'home_header_link_other',
    url: '/',
  },
];

export default function Header() {
  const linkToCreate = () => {
    history.push('/create-blog');
  };

  return (
    <header className={styles.header}>
      <div className={styles['img-content']}>
        <img src={imgHead} />
        <p className={styles.name}>
          <FormattedMessage id="name" />
        </p>
      </div>
      <div className={styles['link-content']}>
        {Links.map((item, index) => {
          return (
            <Link key={index} to={item.url}>
              <FormattedMessage id={item.label} />
            </Link>
          );
        })}
      </div>
      <div className={styles['search-content']}>
        <HeaderSearch></HeaderSearch>
        <Button
          style={{ marginLeft: '16px' }}
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={linkToCreate}
        />
      </div>
    </header>
  );
}
