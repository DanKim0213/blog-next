This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## git flow 

- main: 메인 브랜치, npm 배포 브랜치
- dev: 메인 개발 브랜치 각 기능 브랜치들이 하나로 병합되는 지점
- feature: 각 기능 개발 브랜치, 실제 브랜치명은 구현 기능명
- hotfix: 에러 수정 브랜치

## commit message 컨벤션 

- feat: 새로운 기능의 추가
- imp: 기존에 존재하는 기능 개선
- fix: 버그수정
- docs: 문서 수정
- refac: 코드 리팩토링
- chore: 빌드 부분 혹은 패키지 매니저 수정사항

## commit message rule 

- 커밋 메시지 마지막에 작업에대한 관련 issue 번호를 붙여줌 -> 이슈 트랙킹을 위함
- ex) feat: Button 공통 컴포넌트 작업 #1