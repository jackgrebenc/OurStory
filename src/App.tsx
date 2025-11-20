import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Hero Section with Background Image */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Berkeley's 25th Year Wrapped</h1>
          <p className="hero-subtitle">Happy 26th Birthday!</p>
          <div className="scroll-indicator">
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-content">
          <h2 className="stats-title">By The Numbers</h2>
          <div className="stats-table-wrapper">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Total</th>
                  <th>Favorite</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cities Visited</td>
                  <td>5</td>
                  <td>Mexico City, St. John's</td>
                  <td>⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Sports Events</td>
                  <td>6</td>
                  <td>Blue Jays by CR</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Restaurants</td>
                  <td>45</td>
                  <td>20 Victoria, Le Clan</td>
                  <td>⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Frisbee Championships</td>
                  <td>1</td>
                  <td>January Victory</td>
                  <td>⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>Proud Boyfriends</td>
                  <td>
                    1 - 6 <sup>1</sup>&frasl;<sub>2</sub> yr deal
                  </td>
                  <td>Mr. Boy</td>
                  <td>⭐⭐⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Photo Wall Section */}
      <section className="photo-wall-section">
        <div className="photo-wall-grid">
          <div className="photo-item tall">
            <div className="photo-placeholder">
              <img src="/B25/car_2.jpeg" alt="Chingo" />
            </div>
          </div>
          <div className="photo-item wide">
            <div className="photo-placeholder">
              <img src="/B25/car_7.jpeg" alt="Chingo" />
            </div>
          </div>
          <div className="photo-item">
            <div className="photo-placeholder">
              <img src="/B25/car_4.jpeg" alt="Chingo" />
            </div>
          </div>
          <div className="photo-item">
            <div className="photo-placeholder">
              <img src="/B25/car_5.jpeg" alt="Chingo" />
            </div>
          </div>
          <div className="photo-item wide">
            <div className="photo-placeholder">
              <img src="/B25/car_8.jpeg" alt="Chingo" />
            </div>
          </div>
          <div className="photo-item tall">
            <div className="photo-placeholder">
              <img src="/B25/car_3.jpeg" alt="Chingo" />
            </div>
          </div>
          <div className="photo-item">
            <div className="photo-placeholder">
              <img src="/B25/car_11.jpeg" alt="Chingo" />
            </div>
          </div>
          <div className="photo-item big">
            <div className="photo-placeholder">
              <img src="/B25/car_10.jpeg" alt="Chingo" />
            </div>
          </div>
          <div className="photo-item">
            <div className="photo-placeholder">
              <img src="/B25/car_9.jpeg" alt="Chingo" />
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Breakdown Introduction */}
      <section className="monthly-intro-section">
        <div className="monthly-intro-content">
          <h2 className="monthly-intro-title">The Monthly Breakdown</h2>
          <p className="monthly-intro-subtitle">
            A journey through Berkeley's incredible 25th year, one month at a
            time
          </p>
          <div className="scroll-indicator">
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* Section 1 - Text Left, Image Right */}
      <section className="angled-section section-1">
        <div className="section-inner">
          <div className="text-block">
            <h2>December 2024</h2>
            <h3>Dec 05 - 08: Berkeley's trip to San Francisco</h3>
            <p>
              The first trip of many as a quarter century woman. Great to catch
              up with Hannah and see the city of tech. Alcatraz seemed like a
              fascinating piece of history to explore.
            </p>
            <h3>Dec 08: Berkeley's Chingo arrives</h3>
            <p>
              With a small delay, our little superstar arrived at her forever
              home. Never missing a meal and making sure we know it, our first
              child has brought new life into our home.
            </p>
            <h3>Dec 22: Berkeley's first Bill's game</h3>
            <p>
              Wow this lady loves the states. Game was a bit cold and windy, but
              the parking was cheap ($20 USD) and the border was a breeze.
            </p>
          </div>
          <div className="image-block">
            <div className="image-wrapper">
              <span className="image-icon">
                <img src="/B25/dec.jpeg" alt="Chingo" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Image Left, Text Right */}
      <section className="angled-section section-2 reverse">
        <div className="section-inner">
          <div className="image-block">
            <div className="image-wrapper">
              <span className="image-icon">
                <img src="/B25/jan.jpeg" alt="Cladestino's" />
              </span>
            </div>
          </div>
          <div className="text-block">
            <h2>January 2025</h2>
            <h3>Jan 05: Berkeley observes Leafs vs Flyers</h3>
            <p>
              Walking back from Farmboy over the phone, a snap decision was made
              to go see the boys in blue via same day tickets. The boys held on
              to a 3-2 nail biter just for us.
            </p>
            <h3>Jan 28: Berkeley has dinner at Cladestino's</h3>
            <p>
              Many meals will be missed in this recap and this was not a
              particularly memorable one. The owner was nice and the date night
              deal was reasonable.
            </p>
            <h3>
              Jan 29: Berkeley wins her first Ultimate Frisbee Championship
            </h3>
            <p>
              After 18 months of discing, victory was finally achieved. Game
              after game of Scott yelling at anyone that would listen powered us
              to our ULTIMATE objective. Shortly after this Berkeley announced
              her retirement from the sport.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Text Left, Image Right */}
      <section className="angled-section section-3">
        <div className="section-inner">
          <div className="text-block">
            <h2>February 2025</h2>
            <h3>Feb 01: Berkeley tries a pottery class</h3>
            <p>
              The class was a bit disappointing due to limited instruction and
              logistical challenges with picking up the finished pieces. Still,
              it was an interesting experience to try something new.
            </p>
            <h3>Feb 08-09: Berkeley explores Markdale</h3>
            <p>
              Finally a chance to explore the beautiful Avalanche run and then
              subsequently visit the famed Avalanche run. Later in the
              afternoon, go for a run on Avalanche and finish up with a couple
              drinks at the Markdale farm.
            </p>
            <h3>Feb 13-17: Berkeley goes to Whistler</h3>
            <p>
              Always nice to get out to Squamish and visit the sister.
              Conditions were great, and hard to beat Whistler. That Sea to Sky
              Gondola is a true engineering marvel, thank you Peter Luger and
              Luger Cable Car Company for your hard work.
            </p>
          </div>
          <div className="image-block">
            <div className="image-wrapper">
              <span className="image-icon">
                <img src="/B25/feb.jpeg" alt="Whistler" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Image Left, Text Right */}
      <section className="angled-section section-4 reverse">
        <div className="section-inner">
          <div className="image-block">
            <div className="image-wrapper">
              <span className="image-icon">
                <img src="/B25/buff.jpeg" alt="Chingo2" />
              </span>
            </div>
          </div>
          <div className="text-block">
            <h2>March 2025</h2>
            <h3>Mar 06: Berkeley makes macarons for KG</h3>
            <p>
              These were some absolutely amazing macarons that we have yet to
              match in execution. Definitely gave the office the wrong
              impression that the boyfriend can bake.
            </p>
            <h3>Mar 10: Berkeley x McDavid</h3>
            <p>
              For the second year in a row, she makes the pilgrimage down to the
              KeyBank Center to see McDavid and the Oilers.
            </p>
          </div>
        </div>
      </section>
      {/* Section 1 - Text Left, Image Right */}
      <section className="angled-section section-1">
        <div className="section-inner">
          <div className="text-block">
            <h2>April 2025</h2>
            <h3>Apr 03: Berkeley's smut reading comes to a head</h3>
            <p>
              The length of the book does not matter, it will get gobbled up
              within days. Whether it's Rhys or the 500 year old Umbrumortus,
              she is hooked and can't put it down. Would have never expected her
              to get into adult fantasy novels, but I'm glad she has
              rediscovered her love of reading.{" "}
            </p>
          </div>
          <div className="image-block">
            <div className="image-wrapper">
              <span className="image-icon">
                <img src="/B25/apr.jpeg" alt="flowers" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Image Left, Text Right */}
      <section className="angled-section section-2 reverse">
        <div className="section-inner">
          <div className="image-block">
            <div className="image-wrapper">
              <span className="image-icon">
                <img src="/B25/may.jpeg" alt="Central Cee" />
              </span>
            </div>
          </div>
          <div className="text-block">
            <h2>May 2025</h2>
            <h3>May 03: Berkeley learns about Mark Carney's Values</h3>
            <p>
              Caught up in Carney fever, she picks up a copy of the manifesto of
              the man who saved Canada from financial collapse.
            </p>
            <h3>May 03: Berkeley continues to vacation</h3>
            <p>
              She used some well-earned time off to attend the first annual MMF
              (Michael Merrick Foundation) trip to St John's. Many great
              memories were made on this trip. The whale watching and George
              street bender were defintely the highlights. Notably not a
              highlight was the Leafs loosing Game 7.
            </p>
            <h3>May 25: Berkeley's first grime show of the year </h3>
            <p>
              Catching a show at History is always fun and even better when it's
              Central Cee. Singing along to every lyric at the top of her lungs,
              she was fully immersed in the performance and had an amazing time.
              The boyfriend was impressed by her enthusiasm.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Text Left, Image Right */}
      <section className="angled-section section-3">
        <div className="section-inner">
          <div className="text-block">
            <h2>June 2025</h2>
            <h3>Jun 04-09: Berkeley takes on CDMX</h3>
            <p>
              Another year, another girls trip. This time to Mexico City. From
              visiting Dua's favourite spot to going on excursions outside of
              the city - the trip was an overwhelming success with unforgettable
              memories of which the boyfriend does not possess any photos of.
            </p>
            <h3>Jun 14: Berkeley meets the mayor of Toronto</h3>
            <p>
              Although not yet given the key to the city, she was able to
              capture a quick photo and give her thanks to one of the quirkier
              mayors in the history of the city.
            </p>
            <h3>Jun 22: Berkeley learns to cook</h3>
            <p>
              Touched by the hand of Cirillo, she was guided through a culinary
              journey that would change her entire approach to how she orders
              french cut lamb from the butcher and cooks muscles in the kitchen.
            </p>
          </div>
          <div className="image-block">
            <div className="image-wrapper">
              <span className="image-icon">
                <img src="/B25/june.jpeg" alt="Chow" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Image Left, Text Right */}
      <section className="angled-section section-4 reverse">
        <div className="section-inner">
          <div className="image-block">
            <div className="image-wrapper">
              <span className="image-icon">
                <img src="/B25/july.jpeg" alt="Simpl Things" />
              </span>
            </div>
          </div>
          <div className="text-block">
            <h2>July 2025</h2>
            <h3>Jul 22: Berkeley tries for the Olympics</h3>
            <p>
              After taking a hiatus from the sport, she is back and doing double
              round off back handsprings without missing a beat. The boyfriend
              is very proud and comes to watch the progress, keeping close tabs
              on coach Anatoly.
            </p>
          </div>
        </div>
      </section>
      {/* Section 1 - Text Left, Image Right */}
      <section className="angled-section section-1">
        <div className="section-inner">
          <div className="text-block">
            <h2>August 2025</h2>
            <h3>Aug 02-04: Berkeley leads her first group expedition</h3>
            <p>
              Tasked with several first-timers and concern over their
              willingness to participate, she orchestrates a successful
              cross-friend group trip to Canoe Lake over the August long
              weekend.
            </p>
            <h3>Aug 16: Berkeley goes to her second body building show</h3>
            <p>
              Always a supportive and high quality friend, she attended her
              second show in as many years to support Erin on her journey to the
              IFBB pro card.
            </p>
            <h3>Aug 20-25: Berkeley returns to the west coast</h3>
            <p>
              Her ability to manage connections is top tier. Don't know too many
              people that get invited to weddings by people they met for 3 days
              travelling abroad.
            </p>
          </div>
          <div className="image-block">
            <div className="image-wrapper">
              <span className="image-icon">
                <img src="/B25/aug.jpeg" alt="Canoe Lake" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Image Left, Text Right */}
      <section className="angled-section section-2 reverse">
        <div className="section-inner">
          <div className="image-block">
            <div className="image-wrapper">
              <span className="image-icon">
                <img src="/B25/sept.jpeg" alt="Rep.Textiles" />
              </span>
            </div>
          </div>
          <div className="text-block">
            <h2>September 2025</h2>
            <h3>Sep 05: Berkeley solos Giggs</h3>
            <p>
              Her dedication to all things grime is unmatched. She has been a
              fan of Giggs for years and was able to catch him up close and
              personal. Got a beautiful free t-shirt of an up and coming artist
              as well.
            </p>
            <h3>Sep 12: Berkeley gets ready to launch</h3>
            <p>
              After months of pouring her heart and soul into the business, she
              is ready to launch Rep.Textiles. Many lessons along the way, but
              the business continues to grow and improve day by day. The
              boyfriend, at times grumpy, holds strong on his promise of
              producing a useable website for prospective customers.
              <p>Well done babe. I am proud of you.</p>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Text Left, Image Right */}
      <section className="angled-section section-3">
        <div className="section-inner">
          <div className="text-block">
            <h2>October 2025</h2>
            <h3>Oct 04: Berkeley hosts another banger</h3>
            <p>
              With a wonderful theme of "Toronto mans", she is once again able
              to bring together all of her favourite people in one place.
              Shoutout to the people that really bought in, including Max and
              Meatball.
            </p>
            <h3>Oct 19: Berkeley visits the Pacific Mall</h3>
            <p>
              It's been our dream to visit the Pacific Mall and it did not
              disappoint. Just footsteps away from the Miliken Go, as well as
              the UP train which takes you to the airport. We must return to
              pick up some pirated movies in the near future.
            </p>
            <h3>Oct 23-27: Berkeley falls in love with Quebec City</h3>
            <p>
              A somewhat spontaneous getaway that turned into a beautiful
              weekend of re-acquainting ourselves with the walled city and
              eating our way around town. We also enjoyed visiting a couple of
              museums along the way, especially the Niki de Saint Phalle
              exhibit.
            </p>
          </div>
          <div className="image-block">
            <div className="image-wrapper">
              <span className="image-icon">
                <img src="/B25/oct.jpeg" alt="Quebec City" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="monthly-intro-section">
        <div className="monthly-intro-content">
          <h2 className="monthly-intro-title">The Suprise</h2>
          <p className="monthly-intro-subtitle">(One of them)</p>
          <div className="scroll-indicator">
            <span>↓</span>
          </div>
        </div>
      </section>
      <div className="gift-container">
        <p className="rect two-tickets">Dec 4th @ The Phoenix</p>
        <p className="rect skai">SKAI</p>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px", borderColor: "transparent" }}
          src="https://open.spotify.com/embed/track/0hEWvzkgbI301JZj947gFz?utm_source=generator"
          width="25%"
          height="fit-content"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rect track"
        ></iframe>
        <p className="rect isyourgod">ISYOURGOD</p>
      </div>
    </div>
  );
}

export default App;
