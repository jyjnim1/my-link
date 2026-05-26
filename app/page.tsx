import { dummyLinks } from "@/data/links"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md flex flex-col gap-4 text-center text-sm">
        
        {/* 임시 프로필 영역 */}
        <div className="mb-6">
          <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 border border-border shadow-sm flex items-center justify-center text-muted-foreground">
            Profile
          </div>
          <h1 className="text-xl font-bold">@my-link</h1>
          <p className="text-muted-foreground mt-2">나만의 링크 모음 공간입니다.</p>
        </div>

        {/* 링크 목록 */}
        <div className="flex flex-col gap-4 w-full">
          {dummyLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Card className="flex items-center w-full min-h-[60px] cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="p-4 flex items-center justify-center w-full relative">
                  {/* Google Favicon 파비콘 자동 연동 */}
                  <div className="absolute left-4 flex items-center justify-center w-8 h-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${link.url}&sz=64`}
                      alt={`${link.title} icon`}
                      width={24}
                      height={24}
                      className="rounded-[4px] object-contain"
                    />
                  </div>
                  {/* 링크 타이틀 */}
                  <span className="font-medium text-base">{link.title}</span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}
