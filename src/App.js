import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>

        {/* Navigation */}
        <header>
          <nav>
            <img src='.' alt="logo" />
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Menu</a></li>
              <li><a href='#'>Revervations</a></li>
              <li><a href='#'>Order Online</a></li>
              <li><a href='#'>Login</a></li>
            </ul>
          </nav>
        </header>

        {/* banner */}
        <div>

          <div>
            
            <h3>Little Lemon</h3>

            <h5>Chicago</h5>

            <p>Ad officia duis tempor quis in sint. Dolor Lorem quis proident commodo Lorem ad consequat eu ipsum esse esse. Est Lorem proident nulla excepteur pariatur incididunt non fugiat. Duis elit tempor exercitation cillum. Incididunt ex adipisicing non dolore nostrud mollit exercitation sit pariatur sunt nostrud. Tempor reprehenderit do aute incididunt cupidatat ut Lorem nulla eiusmod quis adipisicing.</p>
            
            <a href='#' role='button'>Reserve a Table</a>

          </div>

          <div>
            <img src='.' alt='banner'/>
          </div>

        </div>


        {/* main content */}
        <main>

          {/* header  */}
          <div>
            <h3>This weeks specials</h3>
            <a href='#' role='button'>Online Menu</a>
          </div>

          {/* cards */}

          <div>

            <article>
              <img src='.' alt="article1"/>
              <div>
                <title>
                  <h5>Greek Salad</h5>
                  <span>$12.99</span>
                </title>

                <p>
                  Proident labore mollit irure nulla amet qui laborum commodo occaecat adipisicing qui adipisicing incididunt. Elit esse labore consequat tempor incididunt id et quis amet eiusmod laboris proident ea. Id aliquip nostrud ex pariatur occaecat. Veniam ea veniam laboris enim labore consequat. Laborum dolore occaecat dolore ipsum consectetur eiusmod quis ut est voluptate est. Ex sint cupidatat magna magna culpa officia.
                </p>

                <a role='button' href='#'>Order a delivery <span>ICON</span></a>
              </div>
            </article>

          </div>

        </main>
      </>
    );
  }
}

export default App;
