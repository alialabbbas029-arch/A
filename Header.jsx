import Link from 'next/link'
export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-xl font-bold">ABC</div>
          <div className="text-sm text-gray-500">منصة تداول</div>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/">الرئيسية</Link>
          <Link href="/trade">تداول</Link>
          <a href="#" onClick={(e)=>{e.preventDefault(); alert('تسجيل دخول تجريبي')}}>تسجيل دخول</a>
        </nav>
      </div>
    </header>
  )
}
