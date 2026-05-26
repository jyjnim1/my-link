export interface LinkItem {
  id: string;
  title: string;
  url: string;
  // PRD 3.3 참조: icon은 별도로 저장하지 않고, url을 기반으로 Google Favicon API를 통해 렌더링합니다.
}

export const dummyLinks: LinkItem[] = [
  {
    id: 'link-1',
    title: '인스타그램',
    url: 'https://instagram.com/',
  },
  {
    id: 'link-2',
    title: '유튜브',
    url: 'https://youtube.com/',
  },
  {
    id: 'link-3',
    title: '블로그',
    url: 'https://blog.naver.com/',
  },
  {
    id: 'link-4',
    title: 'Github',
    url: 'https://github.com/',
  },
  {
    id: 'link-5',
    title: '포트폴리오',
    url: 'https://notion.so/',
  },
];
