import "./CollegeSlider.css";
function CollegeSlider() {
  return (
    <>
      <body>
        <div id="header">
          <h1>Top Colleges</h1>
          <p>Their Ranking & Rating</p>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-image">
              <img src="src\images\image copy.png" />
            </div>
            <div className="card-text">
              <p className="card-meal-type">Breakfast/Eggs</p>
              <h2 className="card-title">Délicieux Bénédicte</h2>
              <p className="card-body">
                Eggs Benedict with hollandaise sauce, crispy bacon and an
                assortment of garden herbs.
              </p>
            </div>
            <div className="card-price">$56</div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="src\images\image1.png" />
            </div>
            <div className="card-text">
              <p className="card-meal-type">Lunch/Meat</p>
              <h2 className="card-title">Du bœuf Burger</h2>
              <p className="card-body">
                A beef burger with wholewheat patty, juicy lettuce and a side of
                gluten free fries
              </p>
            </div>
            <div className="card-price">$39</div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="src\images\image.png" />
            </div>
            <div className="card-text">
              <p className="card-meal-type">Soups/Meat</p>
              <h2 className="card-title">Soupe à l’oignon</h2>
              <p className="card-body">
                The traditional French soup made with onions and beef with a
                dollop of garlic and saffaron mayonise.
              </p>
            </div>
            <div className="card-price">$69</div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="src\images\image.png" />
            </div>
            <div className="card-text">
              <p className="card-meal-type">Soups/Meat</p>
              <h2 className="card-title">Soupe à l’oignon</h2>
              <p className="card-body">
                The traditional French soup made with onions and beef with a
                dollop of garlic and saffaron mayonise.
              </p>
            </div>
            <div className="card-price">$69</div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="https://images.unsplash.com/photo-1635146037526-a75e6905ad78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" />
            </div>
            <div className="card-text">
              <p className="card-meal-type">Soups/Meat</p>
              <h2 className="card-title">Soupe à l’oignon</h2>
              <p className="card-body">
                The traditional French soup made with onions and beef with a
                dollop of garlic and saffaron mayonise.
              </p>
            </div>
            <div className="card-price">$69</div>
          </div>
        </div>
      </body>
    </>
  );
}
export default CollegeSlider;
