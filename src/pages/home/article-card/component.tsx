import { getArticleList } from '@/services/miku/article';
import { Card, Image, Popover } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { history, useIntl } from 'umi';
import styles from './component.less';

export default function ArticleCard() {
  const titleRef = useRef<Array<HTMLParagraphElement>>([]);
  const [popOverKey, setPopOverKey] = useState('');
  const [articleList, setArticleList] = useState<API.ArticleData[]>([]);
  const intl = useIntl();

  // 初始化文章列表
  useEffect(() => {
    async function initArticleList() {
      try {
        const res = await getArticleList();
        if (res.code === 200) {
          setArticleList(res.data?.data ?? []);
        }
      } catch {}
    }
    initArticleList();
  }, []);

  useEffect(() => {
    // 使用key强制更新popover组件
    setPopOverKey('popover');
  }, []);

  const isShowPopOver = (hasImg: boolean, index: number): boolean => {
    const width = titleRef.current[index]?.offsetWidth ?? 0;
    const noImgMaxWidth = 449;
    const hasImgMaxWidth = 249;
    const maxWidth = hasImg ? hasImgMaxWidth : noImgMaxWidth;
    return width > maxWidth;
  };

  const linkToDetail = (id: number) => {
    history.push(`/blog-detail/${id}`);
  };

  return (
    <div className={styles['card-content']}>
      {articleList.map((item, index) => {
        return (
          <Card
            className={styles.card}
            key={index}
            onClick={() => linkToDetail(item.id)}
            hoverable
          >
            {item.picture ? <Image src={item.picture} /> : null}
            <div
              className={`${styles['text-content']} ${
                item.picture ? '' : styles['no-img']
              }`}
            >
              <div className={styles['title-date']}>
                <Popover
                  content={
                    isShowPopOver(!!item.picture, index) ? item.title : null
                  }
                  key={`${popOverKey}_${index}`}
                >
                  <p
                    ref={(el) =>
                      (titleRef.current[index] = el as HTMLParagraphElement)
                    }
                    className={styles.title}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></p>
                </Popover>
                <p className={styles.date}>
                  {intl.formatDate(item.created_at)}
                </p>
              </div>
              <div className={styles.line}></div>
              <span
                className={styles.subtext}
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
