function App() {
  return (
    <div className="container"> 
      <h1>My Journey in Tech 🚀</h1>

      <p>
        Hello! I'm Lawal Hammid, a passionate site engineer who took a bold journey into tech. From learning the basics to building React apps, it’s been amazing!
      </p>

      <div className="section">
        <h2>Technologies I've Learned</h2>
        <ol>
          <li>Python</li>
          <li>MySQL</li>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ol>
      </div>

      <div className="section">
        <h2>What Helped Me Learn</h2>
        <ul>
          <li>YouTube Tutorials</li>
          <li>Practice Projects</li>
        
          
        </ul>
      </div>

      <div className="section">
        <h2>Learning Tracker</h2>
        <table>
          <thead>
            <tr>
              <th>Technology</th>
              <th>Level</th>
              <th>In Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Python</td>
              <td>Intermediate</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>React</td>
              <td>Beginner</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Contact Me</h2>
        <form>
          <fieldset>
            <legend>Get in Touch</legend>

            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" /><br />

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" /><br />

            <label htmlFor="experience">Tell me about your journey:</label><br />
            <textarea id="experience" name="experience" rows="4" cols="50" /><br />

            <label>Favorite Language:</label><br />
            <input type="radio" id="python" name="fav_lang" value="Python" />
            <label htmlFor="python">Python</label><br />
            <input type="radio" id="js" name="fav_lang" value="JavaScript" />
            <label htmlFor="js">JavaScript</label><br />

            <label>Tools I Use:</label><br />
            <input type="checkbox" id="vs" name="tools" value="VSCode" />
            <label htmlFor="vs">VS Code</label><br />
            <input type="checkbox" id="git" name="tools" value="Git" />
            <label htmlFor="git">Git</label><br />

            <label htmlFor="track">Select Track:</label>
            <select id="track" name="track">
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Full Stack</option>
            </select><br />

            <label htmlFor="start">When did you start learning?</label>
            <input type="date" id="start" name="start" /><br />

            <input type="submit" value="Submit" />
          </fieldset>
        </form>      
      </div>
    </div>
  );
}

export default App;
