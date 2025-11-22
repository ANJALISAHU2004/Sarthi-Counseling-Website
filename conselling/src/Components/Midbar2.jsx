import "./Midbar2.css";
function Midbar2(params) {
  return (
    <>
      <div class="header_m">
        <div class="sides">
          <a href="#" class="logo">
            BLOG
          </a>
        </div>
        <div class="sides">
          {" "}
          <a href="#" class="menu">
            {" "}
          </a>
        </div>
        <div class="info">
          <h4>
            <a href="#category">UI DESIGN</a>
          </h4>
          <h1>KEN BURNS HEADERS ARE THE BEST</h1>
          <div class="meta">
            <a href="https://twitter.com/nodws" target="_b" class="author"></a>
            <br />
            By{" "}
            <a href="https://twitter.com/nodws" target="_b">
              James Nodws
            </a>{" "}
            on May 30, 2019
          </div>
        </div>
      </div>
      <section class="content">
        <p>
          This free EQ quiz measures your emotional intelligence in five key
          areas so you can understand how well you manage your own emotions,
          communicate your experiences, and relate to others.
        </p>
        <p>
          {" "}
          For each item, mark according to how well the statement describes you.
          For the most accurate results, answer based on how you really are, not
          how you would like to be.
        </p>
        <p align="center">
          <a href="https://twitter.com/nodws" class="btn twtr" target="_b">
            830,682 TESTS TAKEN IN THE LAST 30 DAYS
          </a>
        </p>
      </section>
    </>
  );
}
export default Midbar2;
