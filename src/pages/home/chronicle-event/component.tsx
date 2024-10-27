import { getAnnouncementsList } from '@/services/miku/announcement';
import * as Icons from '@ant-design/icons';
import { Card } from 'antd';
import moment from 'moment';
import React, { ReactElement, useEffect, useState } from 'react';
import { FormattedMessage } from 'umi';
import styles from './component.less';

interface EventInfo {
  icon: ReactElement;
  label: string;
  date: string;
  url?: string;
  [prop: string]: any;
}

function generateChronicleIcon(icon: string, color: string) {
  // @ts-ignore
  return React.createElement(Icons[icon], {
    twoToneColor: color,
    className: styles.icon,
  });
}

// todo
// 事记中尝试加上emoji
export default function ChronicleEvent() {
  const [chronicleList, setChronicleList] = useState<Array<EventInfo>>([]);

  function getChronicleList(data: Array<API.AnnouncementData>) {
    data.sort(
      (a, b) =>
        new Date(b.announcement_time).getTime() -
        new Date(a.announcement_time).getTime(),
    );
    const chronicleEventInfos: Array<EventInfo> = [];
    for (const item of data) {
      chronicleEventInfos.push({
        icon: generateChronicleIcon(item.icon, item.color),
        label: item.content,
        date: moment(item.announcement_time).format('YYYY-MM-DD'),
      });
    }
    setChronicleList(chronicleEventInfos);
  }

  // 初始化事计
  useEffect(() => {
    async function initChronicleList() {
      try {
        const res = await getAnnouncementsList();
        if (res.code === 200) {
          getChronicleList(res.data ?? []);
        }
      } catch {}
    }
    initChronicleList();
  }, []);

  return (
    <>
      <Card
        className={styles.card}
        title={<FormattedMessage id="chronicle_event_label" />}
      >
        <span className={`${styles.line} ${styles.update}`}>
          <FormattedMessage id={'chronicle_event_update_line_label'} />
        </span>

        {chronicleList.map((item, index) => {
          return (
            <div key={index} className={styles.event}>
              {item.icon}
              <span className={styles.date}>{item.date}</span>
              <span className={styles.label}>{item.label}</span>
            </div>
          );
        })}
        <span className={`${styles.line} ${styles.end}`}>
          <FormattedMessage id={'chronicle_event_end_line_label'} />
        </span>
      </Card>
    </>
  );
}
