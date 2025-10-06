import Header from './components/Header'
import Footer from './components/Footer'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="container mx-auto p-6 flex-1">
        <h1 className="text-3xl font-bold mb-4">مرحباً بكم في ABC</h1>
        <p className="mb-6">واجهة منصة تداول جاهزة للرفع على Vercel — دعم عربي / إنجليزي.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="font-semibold">التداول السريع</h2>
            <p className="mt-2">تجربة واجهة تداول تجريبية.</p>
            <Link href="/trade" className="mt-4 inline-block underline">ابدأ التداول</Link>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="font-semibold">حسابي</h2>
            <p className="mt-2">التحقق، الأمان، والسحب.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
