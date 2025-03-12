import PostHeader from './components/PostHeader'
import SocialShare from './components/SocialShare'
import ContactCTA from './components/ContactCTA'

export default function BlogPostPage() {
  const post = {
    title: 'Jak przygotować mieszkanie do sprzedaży?',
    date: '15 maja 2023',
    author: 'Anna Kowalska',
    imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: `
        <article class="blog-content">
          <header>
            <h1 class="article-title">Jak przygotować mieszkanie do sprzedaży?</h1>
            <p class="article-intro">Sprzedaż mieszkania to ważny krok, który wymaga nie tylko odpowiedniej wyceny, ale także starannego przygotowania lokalu. Właściwie przygotowane mieszkanie przyciąga potencjalnych nabywców, skracając czas sprzedaży i często podnosząc cenę transakcyjną.</p>
          </header>

          <nav class="table-of-contents">
            <h2>Spis treści</h2>
            <ol>
              <li><a href="#wprowadzenie">Wprowadzenie</a></li>
              <li><a href="#porzadek">Porządek i czystość</a></li>
              <li><a href="#depersonalizacja">Depersonalizacja wnętrza</a></li>
              <li><a href="#neutralizacja">Neutralizacja zapachów</a></li>
              <li><a href="#sesja">Profesjonalna sesja zdjęciowa</a></li>
              <li><a href="#dokumentacja">Przygotowanie dokumentacji</a></li>
              <li><a href="#podsumowanie">Podsumowanie</a></li>
            </ol>
          </nav>

          <section id="wprowadzenie">
            <h2>1. Wprowadzenie</h2>
            <p>Przygotowanie mieszkania do sprzedaży zaczyna się od zrozumienia, jak ważne jest pierwsze wrażenie. Niezależnie od stanu technicznego nieruchomości, zadbana prezentacja potrafi zdziałać cuda. Warto zainwestować czas i niewielkie środki, by nieruchomość prezentowała się jak najlepiej.</p>
          </section>

          <section id="porzadek">
            <h2>2. Porządek i czystość</h2>
            <p>Podstawą jest gruntowne sprzątanie każdego pomieszczenia. Zadbaj o czystość podłóg, okien, a także o uporządkowanie przestrzeni. Uporządkowane wnętrza dają poczucie przestronności i świeżości.</p>
          </section>
        </article>
      `
  }

  return (
    <main className="min-h-screen bg-[var(--background-base)]">
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <PostHeader
            title={post.title}
            date={post.date}
            author={post.author}
            imageUrl={post.imageUrl}
          />

          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold
              prose-h1:text-4xl prose-h1:mb-8 
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-base prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:my-2
              prose-img:rounded-lg prose-img:my-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <SocialShare />
          <ContactCTA />
        </div>
      </article>
    </main>
  )
}