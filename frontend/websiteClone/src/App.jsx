import { useState } from 'react'
import mainLogo from './assets/unilectives.svg';
import './App.css'

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [headerColor, setHeaderColor] = useState('#1e64c7'); 
  const [showDiv, setShowDiv] = useState(false);

  const randomColour = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

 
  return (
    <div>
      <div className='left-bar'>
        <div className='align-middle-with-padding'>
          <div className='logo-div'>
            <div className='logo-div2'>
              <a>
                <img src={mainLogo} alt="logo" className='main-logo'/>
              </a>
            </div>
          </div>
          <div className='top-part'>
            <div className='top-part2'>
              <a className='book-link'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className='book-part'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="book-logo">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                  {isHovered && (
                    <div className="chat-box">
                    </div>
                  )}
                </div>
              </a>
              <a className='book-link'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className='book-part'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="book-logo">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>

                  {isHovered && (
                    <div className="chat-box">
                    </div>
                  )}
                </div>
              </a>
            </div>
          </div>
          <div className='bottom-of-bar'>
            <div className='bottom-of-bar2'>
              <div className='arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bottom-logo">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                </svg>
              </div>
              <div className='arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bottom-logo2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <div className='arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bottom-logo2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              </div>
              <div className='arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bottom-logo2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='everything-on-the-right'>
        <div>
          <div className='titles-div'>
            <div className='main-part'>
              <div className='main-part2'>
                <p className='drop-shadow-md text-base sm:text-xs'>
                  DevSoc presents
                </p>
                <h1
                  className='unilectives-title'
                  style={{ color: headerColor }}
                  onClick={() => setHeaderColor(randomColour())}
                >
                    unilectives
                </h1>
                <p className='description-of-title'>
                    Your one-stop shop for UNSW course and elective reviews.
                </p>
                <div className='search-box-wrapper'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="magnify-logo">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  <input 
                    placeholder='Search for a course e.g. COMP1511' 
                    className='input-box'
                    onFocus={() => setShowDiv(true)}></input>
                </div>
                {showDiv && (
                  <div className="centered-div">
                    <p>yo</p>
                    <button 
                      onClick={() => setShowDiv(false)} 
                      className="close-btn">
                      close
                    </button>
                    <p>hi</p>
                    <p>I'm Jackson and nice to see you here!</p>
                    <p>well anyways have a good day today !!</p>
                  </div>
                )}
                <div className="dropdown-container">
                  <button className="dropdown-button">
                    <p className='sort-by-text'>
                      Sort by
                      <span className="dropdown-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="dropdown-arrow">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </p> 
                  </button>
                </div>
                <div className='main-boxes'>
                  <a>
                    <div className='subject-containers'>
                      <div className='top-of-subject'>
                        <h2 className='titles-subjects'>COMP1511</h2>
                        <div className='text-and-stars'>
                          <div className='stars-only'>
                            <div className='stars-in-line'>
                              <span aria-label="rating">★★★★★</span>
                              <span className='filled-stars' style={{width: '96%'}}>★★★★★</span>
                            </div>
                          </div>
                          <p className='text-review'>
                            144 reviews
                          </p>
                        </div>
                      </div>
                      <p className='description-of-subject'>
                        Programming Fundamentals
                      </p>
                      <div className='term-subjects'>
                        <span className='term-subject-exact-terms'>Term 1</span>
                        <span className='term-subject-exact-terms'>Term 2</span>
                        <span className='term-subject-exact-terms'>Term 3</span>
                      </div>
                    </div>
                  </a>
                  <a>
                    <div className='subject-containers'>
                      <div className='top-of-subject'>
                        <h2 className='titles-subjects'>COMP1531</h2>
                        <div className='text-and-stars'>
                          <div className='stars-only'>
                            <div className='stars-in-line'>
                              <span aria-label="rating">★★★★★</span>
                              <span className='filled-stars' style={{width: '78%'}}>★★★★★</span>
                            </div>
                          </div>
                          <p className='text-review'>
                            47 reviews
                          </p>
                        </div>
                      </div>
                      <p className='description-of-subject'>
                        Software Engineering Fundamentals
                      </p>
                      <div className='term-subjects'>
                        <span className='term-subject-exact-terms'>Term 1</span>
                        <span className='term-subject-exact-terms'>Term 2</span>
                        <span className='term-subject-exact-terms'>Term 3</span>
                      </div>
                    </div>
                  </a>
                  <a>
                    <div className='subject-containers'>
                      <div className='top-of-subject'>
                        <h2 className='titles-subjects'>COMP1521</h2>
                        <div className='text-and-stars'>
                          <div className='stars-only'>
                            <div className='stars-in-line'>
                              <span aria-label="rating">★★★★★</span>
                              <span className='filled-stars' style={{width: '80%'}}>★★★★★</span>
                            </div>
                          </div>
                          <p className='text-review'>
                            40 reviews
                          </p>
                        </div>
                      </div>
                      <p className='description-of-subject'>
                        Computer Systems Fundamentals
                      </p>
                      <div className='term-subjects'>
                        <span className='term-subject-exact-terms'>Term 1</span>
                        <span className='term-subject-exact-terms'>Term 2</span>
                        <span className='term-subject-exact-terms'>Term 3</span>
                      </div>
                    </div>
                  </a>
                  <a>
                    <div className='subject-containers'>
                      <div className='top-of-subject'>
                        <h2 className='titles-subjects'>COMP2521</h2>
                        <div className='text-and-stars'>
                          <div className='stars-only'>
                            <div className='stars-in-line'>
                              <span aria-label="rating">★★★★★</span>
                              <span className='filled-stars' style={{width: '80%'}}>★★★★★</span>
                            </div>
                          </div>
                          <p className='text-review'>
                            36 reviews
                          </p>
                        </div>
                      </div>
                      <p className='description-of-subject'>
                        Data Structures and Algorithms
                      </p>
                      <div className='term-subjects'>
                        <span className='term-subject-exact-terms'>Summer</span>
                        <span className='term-subject-exact-terms'>Term 1</span>
                        <span className='term-subject-exact-terms'>Term 2</span>
                        <span className='term-subject-exact-terms'>Term 3</span>
                      </div>
                    </div>
                  </a>
                  <a>
                    <div className='subject-containers'>
                      <div className='top-of-subject'>
                        <h2 className='titles-subjects'>COMP2511</h2>
                        <div className='text-and-stars'>
                          <div className='stars-only'>
                            <div className='stars-in-line'>
                              <span aria-label="rating">★★★★★</span>
                              <span className='filled-stars' style={{width: '60%'}}>★★★★★</span>
                            </div>
                          </div>
                          <p className='text-review'>
                            33 reviews
                          </p>
                        </div>
                      </div>
                      <p className='description-of-subject'>
                        Object-Oriented Design & Programming
                      </p>
                      <div className='term-subjects'>
                        <span className='term-subject-exact-terms'>Term 1</span>
                        <span className='term-subject-exact-terms'>Term 2</span>
                        <span className='term-subject-exact-terms'>Term 3</span>
                      </div>
                    </div>
                  </a>
                  <a>
                    <div className='subject-containers'>
                      <div className='top-of-subject'>
                        <h2 className='titles-subjects'>COMP3311</h2>
                        <div className='text-and-stars'>
                          <div className='stars-only'>
                            <div className='stars-in-line'>
                              <span aria-label="rating">★★★★★</span>
                              <span className='filled-stars' style={{width: '80%'}}>★★★★★</span>
                            </div>
                          </div>
                          <p className='text-review'>
                            33 reviews
                          </p>
                        </div>
                      </div>
                      <p className='description-of-subject'>
                        Database Systems
                      </p>
                      <div className='term-subjects'>
                        <span className='term-subject-exact-terms'>Term 1</span>
                        <span className='term-subject-exact-terms'>Term 3</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

