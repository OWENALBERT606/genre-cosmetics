'use client';

const articles = [
  {
    id: 1,
    title: 'Transform Your Home Atmosphere',
    excerpt: 'Discover how beauty products can elevate your daily routine and create moments of luxury at home.',
    date: '24 Jan 2026',
    readTime: '5 min read',
    image: '🏡',
  },
  {
    id: 2,
    title: 'The Art of Choosing the Perfect',
    excerpt: 'Learn the subtle differences between our medicated formulas and how to find your signature product.',
    date: '22 Jan 2026',
    readTime: '4 min read',
    image: '✨',
  },
  {
    id: 3,
    title: 'Wellness Rituals for Better Skin',
    excerpt: 'Explore how combining skincare with supplements creates the ultimate beauty wellness regimen.',
    date: '20 Jan 2026',
    readTime: '6 min read',
    image: '💆',
  },
];

export function Blog() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Insights
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-6 text-balance">
            News & Updates Blogs
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6 bg-muted h-48 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {article.image}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>

                <div className="pt-2">
                  <span className="text-primary font-medium text-sm inline-flex items-center gap-2">
                    Read More <span>→</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
