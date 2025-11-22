import "./Midbar.css";

function Midbar(params) {
  return (
    <>
      <header class="header_m">
        <div class="brand-box">
          {/* <span class="brand">Example Brand</span> */}
        </div>

        <div class="text-box">
          <h1 class="heading-primary">
            <span class="heading-primary-main">Find your people</span>
            <span class="heading-primary-sub">in the Sarthi community</span>
          </h1>
          <a href="#" class="btn btn-white btn-animated">
            Discord community
          </a>
        </div>
      </header>
    </>
  );
}
export default Midbar;
