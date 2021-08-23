import React from 'react';

class HobbiesAndInterests extends React.Component {
  render() {
    return (
      <div className="HobbiesAndInterests">
        <section>
            <h2>Hobbies & Interests</h2>
            <ul>
                <li>Favorite Books
                    <ol>
                        <li>The Four Agreements</li>
                        <li>Harry Potter and the Philosopher's Stone</li>
                    </ol>
                </li>
                <li>Favorite Movies
                    <ol>
                        <li>Coming to America</li>
                        <li>Black Panther</li>
                        <li>Harry Potter and the Philosopher's Stone</li>
                        <li>The Wizard of Oz</li>
                        <li>Space Jam</li>
                        <li>Get Out</li>
                        <li>Spider Man</li>
                    </ol>
                </li>
                <li>Favorite Languages
                    <ol>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ol>
                </li>
                <li>Favorite Sports
                    <ol>
                        <li>Football</li>
                        <li>Basketball</li>
                        <li>Soccer</li>
                        <li>Baseball</li>
                        <li>Tennis</li>
                    </ol>
                </li>
            </ul>
        </section>
      </div>
    );
  }
}

export default HobbiesAndInterests;
