import { getArticle } from '@/services/miku/article';
import { Card, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { useParams } from 'umi';
import styles from './index.less';

export default function BlogDetailPage() {
  const { id } = useParams();
  const [article, setArticle] = useState<API.ArticleData>();

  useEffect(() => {
    async function initBlogDetail() {
      try {
        const res = await getArticle({ id: Number(id) });
        if (res.code === 200) {
          setArticle(res.data);
        }
      } catch {}
    }
    initBlogDetail();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles['main-context']}>
        <Skeleton
          className={styles.skeleton}
          active
          loading={!Boolean(article)}
          paragraph={{
            rows: 7,
          }}
        >
          <p className={styles.title}>{article?.title}</p>
          <Card>
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                code(props) {
                  /* eslint-disable */
                  const { children, node, className, ...rest } = props;
                  /* eslint-enable */
                  const match = /language-(\w+)/.exec(className || '');
                  return match ? (
                    //@ts-ignore No overload matches this call 奇怪的错误
                    <SyntaxHighlighter
                      {...rest}
                      PreTag="div"
                      language={match[1]}
                      style={prism}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...rest} className={(className ?? '') + styles.code}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {article?.content}
            </Markdown>
          </Card>
        </Skeleton>
      </div>
      <div className={styles['left-context']}></div>
      <div className={styles['right-context']}></div>
    </div>
  );
}
