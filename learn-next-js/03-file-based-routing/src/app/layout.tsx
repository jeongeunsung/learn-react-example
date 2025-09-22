import type { PropsWithChildren } from 'react'

import { NavLink } from '@/components'
import '@/styles/main.css'

export default function RootLayout({ children }: PropsWithChildren) {
  console.log('루트 레이아웃')

  return (
    <html lang="ko-KR">
      <head>
        <link
          as="font"
          rel="stylesheet"
          fetchPriority="high"
          crossOrigin="anonymous"
          href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
        />
      </head>
      <body className="overflow-y-scroll">
        <header className="container mx-auto">
          <nav aria-label="사이트 페이지 내비게이션">
            <ul className="p-5">
              <li>
                <NavLink href="/">홈</NavLink>
              </li>
              <li>
                <NavLink href="/auth/sign-in">로그인</NavLink>
              </li>
              <li>
                <NavLink href="/auth/sign-up">회원가입</NavLink>
              </li>
              <li>
                <NavLink href="/books">도서 목록</NavLink>
              </li>
              <li>
                <NavLink
                  href="/dashboard"
                  activeClassName="text-emerald-700 font-black underline"
                >
                  대시보드
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex flex-col min-h-screen">{children}</main>
      </body>
    </html>
  )
}
