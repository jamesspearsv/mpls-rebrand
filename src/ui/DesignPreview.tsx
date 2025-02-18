import { ColorSetInterface } from '../App';
import styles from './DesignPreview.module.css';

export default function DesignPreview({
  colors,
}: {
  colors: ColorSetInterface;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <div className={styles.horizontal}>
          {Object.keys(colors).map((color, index) => (
            <div style={{ color: colors[color as keyof ColorSetInterface] }}>
              {/* <!-- Headings --> */}
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
            </div>
          ))}
        </div>
        {/* <!-- Body Text --> */}
        <div className={styles.horizontal}>
          {Object.keys(colors).map((color, index) => (
            <div style={{ color: colors[color as keyof ColorSetInterface] }}>
              <p>Body text - regular paragraph.</p>
              <p>
                <strong>Bold text example.</strong>
              </p>
              <p>
                <em>Italic text example.</em>
              </p>
              <p>
                <small>Small text example.</small>
              </p>
              <p>Underlined text example.</p>
              <p>Muted text example.</p>
              <p>
                Paragraph text example. Lorem ipsum odor amet, consectetuer
                adipiscing elit. Ipsum eros massa fames, lacus mauris eros nisl.
                Senectus erat nulla ut suspendisse accumsan quisque litora. Eros
                euismod nunc sem orci facilisi. Mauris felis enim elementum
                interdum nostra ex pharetra. Torquent nisl sit dapibus fames
                odio justo. Montes mollis semper molestie gravida morbi! Posuere
                platea euismod vel et ultricies ante consequat. Metus vehicula
                praesent rhoncus cursus malesuada eleifend nec. Aptent placerat
                inceptos nec, nisi nascetur molestie ligula tempus. Aenean
                placerat platea primis mollis arcu tempus elementum sociosqu.
                Sit amet facilisis nostra etiam a. At vehicula donec duis amet
                augue maximus libero. Tempor odio aptent hac; leo natoque dui.
              </p>
            </div>
          ))}
        </div>

        {/* <!-- Buttons --> */}
        <div className={styles.horizontal}>
          {Object.keys(colors).map((color) => (
            <div
              className={styles.vertical}
              style={{ color: colors[color as keyof ColorSetInterface] }}
            >
              <button>Primary Button</button>
              <button disabled>Disabled Button</button>
              <button>
                <span role="img" aria-label="icon">
                  🔥
                </span>{' '}
                Icon Button
              </button>
            </div>
          ))}
        </div>

        <div className={styles.horizontal}>
          {Object.keys(colors).map((color) => (
            <div
              className={styles.vertical}
              style={{ color: colors[color as keyof ColorSetInterface] }}
            >
              {/* <!-- Links --> */}

              <a href="#">Default Link</a>
              <a href="#">No Underline Link</a>
            </div>
          ))}
        </div>

        {/* <!-- Lists --> */}
        <ul>
          <li>Unordered List Item 1</li>
          <li>Unordered List Item 2</li>
        </ul>
        <ol>
          <li>Ordered List Item 1</li>
          <li>Ordered List Item 2</li>
        </ol>
        <dl>
          <dt>Definition Term</dt>
          <dd>Definition description.</dd>
        </dl>

        {/* <!-- Table --> */}
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1, Col 1</td>
              <td>Row 1, Col 2</td>
              <td>Row 1, Col 3</td>
            </tr>
            <tr>
              <td>Row 2, Col 1</td>
              <td>Row 2, Col 2</td>
              <td>Row 2, Col 3</td>
            </tr>
          </tbody>
        </table>

        {/* <!-- Form Elements --> */}
        <form>
          <label>
            Text Input:
            <input type="text" placeholder="Enter text" />
          </label>
          <br />
          <label>
            Checkbox:
            <input type="checkbox" />
          </label>
          <br />
          <label>
            Radio:
            <input type="radio" name="radio" /> Option 1
            <input type="radio" name="radio" /> Option 2
          </label>
          <br />
          <label>
            Select:
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </label>
          <br />
          <label>
            Textarea:
            <textarea placeholder="Enter longer text"></textarea>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {/* <!-- Accent Elements --> */}
        <hr />
        <div></div>
        <span></span>
        <svg width="50" height="50">
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="black"
            stroke-width="2"
            fill="gray"
          />
        </svg>
      </div>
    </div>
  );
}
