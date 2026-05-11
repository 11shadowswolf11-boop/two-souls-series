import { Nav }               from "@/components/layout/Nav";
import { HeroSection }       from "@/components/sections/HeroSection";
import { SeriesSection }     from "@/components/sections/SeriesSection";
import { BooksSection }      from "@/components/sections/BooksSection";
import { MusicSection }      from "@/components/sections/MusicSection";
import { AudiobooksSection } from "@/components/sections/AudiobooksSection";
import { AuthorSection }     from "@/components/sections/AuthorSection";
import { CommunitySection }  from "@/components/sections/CommunitySection";
import { FilmSection }       from "@/components/sections/FilmSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Footer }            from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <SeriesSection />
      <BooksSection />
      <MusicSection />
      <AudiobooksSection />
      <AuthorSection />
      <CommunitySection />
      <FilmSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
