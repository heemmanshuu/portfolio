import FeaturedArticle from '../../components/FeaturedArticle';
import { ListGroup } from '../../components/ListGroup';
import ListItem from '../../components/ListItem';
import Base from '../../layouts/Base';
import { getAllPosts, getPostBySlug } from '../../lib/blog';

export const metadata = {
  title: 'Articles',
  description:
    'Notes, summaries, and resources I wrote during coursework and self-study.',
  openGraph: {
    title: 'Articles // G Heemmanshuu Dasari',
    url: 'https://ghdasari.vercel.app/articles',
    images: ['/static/images/articles-bw.jpg']
  }
};

export default function Articles() {
  const allPosts = getAllPosts(['date', 'skip', 'slug', 'title', 'category']);

  const featuredPosts = [
    getPostBySlug('computer-networks-notes', [
      'date',
      'slug',
      'title',
      'image',
      'content',
      'description'
    ])
  ];

  /** ---------- External PDF articles ---------- */
  const pdfArticles = [
    {
      title: "Notes on Competitive Auctions",
      date: '2024-12-03',
      href: '/static/pdfs/competitive_auctions_report.pdf'
    },
    {
      title: "Notes on Myerson's Lemma",
      date: '2024-11-17',
      href: '/static/pdfs/myersons_lemma_report.pdf'
    },
  ];

  /** ---------- Paper summaries (Markdown) ---------- */
  const paperSummaries = allPosts.filter(
    (post) => post.category === 'paper-summary' && !post.skip
  );

  /** ---------- Everything else ---------- */
  const mainArticles = allPosts.filter(
    (post) => post.category !== 'paper-summary' && !post.skip
  );

  const description = `Here you can find <strong>${
    allPosts.length + pdfArticles.length
  } articles</strong> including class notes, toolkits, and paper summaries.`;

  const renderFeatured = () =>
    featuredPosts.map((post, index) => (
      <FeaturedArticle
        key={post.slug}
        index={index}
        href={`/${post.slug}/`}
        title={post.title}
        description={post.description}
        image={post.image}
        content={post.content}
      />
    ));

  return (
    <Base
      title="Articles // G Heemmanshuu Dasari"
      tagline="Notes. Proofs. Systems."
      primaryColor="yellow"
      secondaryColor="pink"
    >
      <p dangerouslySetInnerHTML={{ __html: description }} />

      {/* ---------- Featured ---------- */}
      <h2>Featured</h2>
      <div className="my-2.5 -ml-5 md:flex md:w-[calc(100%+3.375rem)] md:justify-between">
        {renderFeatured()}
      </div>

      {/* ---------- Main articles ---------- */}
      <h2>Notes & Toolkits</h2>
      <ListGroup>
        {mainArticles.map((post, index) => (
          <ListItem
            key={post.slug}
            index={index}
            href={`/${post.slug}/`}
            title={post.title}
            date={post.date}
          />
        ))}
      </ListGroup>

      {/* ---------- Paper summaries ---------- */}
      <h2>Paper Summaries</h2>
      <ListGroup>
        {paperSummaries.map((post, index) => (
          <ListItem
            key={post.slug}
            index={index}
            href={`/${post.slug}/`}
            title={post.title}
            date={post.date}
          />
        ))}
      </ListGroup>

      {/* ---------- PDF notes ---------- */}
      <h2>PDF Notes</h2>
      <ListGroup>
        {pdfArticles.map((post, index) => (
          <ListItem
            key={post.href}
            index={index}
            href={post.href}
            title={post.title}
            date={post.date}
          />
        ))}
      </ListGroup>
    </Base>
  );
}