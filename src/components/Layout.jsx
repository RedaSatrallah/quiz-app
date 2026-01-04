export function Layout({children}) {
  return <>
    <nav className="flex items-center justify-center p-5 bg-blue-600 text-white text-2xl font-bold">
      Football Quiz App
    </nav>
    <main>
      {children}
    </main> 
    <footer className="flex items-center justify-center p-5 bg-gray-200 text-gray-600 text-sm absolute bottom-0 w-full">
        @2024 Football Quiz App
    </footer>

  </>
}   