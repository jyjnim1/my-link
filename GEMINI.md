# MyLink (마이링크) 프로젝트 가이드

## 1. 프로젝트 개요
마이링크(MyLink)는 인스타그램, 틱톡 등 단일 링크만 지원하는 플랫폼에서 여러 링크를 한데 모아 효과적으로 공유할 수 있는 링크트리(Linktree) 클론 서비스입니다. `@docs/PRD.md`에 정의된 핵심 가치를 바탕으로, `@components/ui/`의 shadcn/ui 디자인 시스템을 활용하여 모던한 인터페이스를 구축합니다.

- **핵심 기술 스택**: Next.js 15+, React 19, Tailwind CSS v4, TypeScript, shadcn/ui
- **상세 요구사항**: `@docs/PRD.md` 참조
- **사용자 시나리오**: `@docs/USER_SCENARIO.md` 참조
- **UI/UX 설계**: `@docs/WIREFRAME.md` 참조

## 2. 프로젝트 구조
프로젝트는 루트 디렉토리를 메인으로 사용하며, `@my-link-app/` 디렉토리는 중복된 초기 템플릿일 가능성이 높으므로 개발 시 주의가 필요합니다.

- `@app/`: Next.js App Router 기반의 페이지 및 레이아웃
- `@components/`: 공통 컴포넌트 및 `@components/ui/` (shadcn/ui 컴포넌트)
- `@lib/`: 유틸리티 함수 (`@lib/utils.ts` 등)
- `@docs/`: PRD, 사용자 시나리오, 와이어프레임 등 기획 문서
- `@public/`: 정적 자산 (이미지, 아이콘 등)

## 3. 주요 명령어
루트의 `@package.json`에 정의된 주요 명령어입니다.

- **개발 서버 실행**: `npm run dev` (Turbopack 사용)
- **프로젝트 빌드**: `npm run build`
- **린트 체크**: `npm run lint`
- **코드 포맷팅**: `npm run format` (Prettier, `@.prettierrc` 설정 사용)
- **타입 체크**: `npm run typecheck`
- **shadcn 컴포넌트 추가**: `npx shadcn@latest add [component-name]`

## 4. 개발 컨벤션 및 UI 설계 가이드
`@docs/WIREFRAME.md`와 `@docs/PRD.md`에 따라 다음 원칙을 준수합니다.

- **UI 시스템**: 모든 UI 요소는 `shadcn/ui`를 기본으로 하며, `@app/globals.css` 및 `Tailwind CSS v4`를 사용하여 스타일을 확장합니다.
- **인라인 편집 (Inline Editing)**: 관리자 뷰에서 프로필 정보(이름, 소개글)와 링크 정보(URL, 제목)는 별도의 폼 없이 즉시 수정 가능해야 합니다.
- **뷰 분리**: 
    - **공개 프로필 페이지**: `/[displayName]` 경로, 읽기 전용, 모바일 퍼스트 대응.
    - **관리자 마이페이지**: 소유자 전용 편집 기능(✏️) 및 삭제(🗑) 기능 포함.
- **아이콘 및 파비콘**: 
    - `lucide-react` 라이브러리를 사용합니다.
    - 링크 아이콘은 Google Favicon API를 활용하여 URL 기반으로 자동 로드합니다.
- **컴포넌트 가져오기**: `@/components/...`와 같이 `@tsconfig.json`에 정의된 절대 경로 별칭을 사용합니다.

## 5. 핵심 구현 단계
1. **사용자 인증**: 구글 소셜 로그인 연동 및 초기 `displayName` 설정.
2. **관리자 대시보드**: 인라인 편집이 가능한 프로필 및 링크 관리 UI 구현.
3. **공개 프로필**: 사용자 고유 Slug를 통한 접근 및 반응형 뷰 구현.
4. **검증**: 빌드 및 타입 체크를 통한 최종 안정성 확인.

---
*이 문서는 Gemini CLI에 의해 자동 생성되었습니다. 상세 내용은 `@README.md` 및 `@docs/` 내 문서를 참고하세요.*
