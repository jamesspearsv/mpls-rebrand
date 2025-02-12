import { ThemeInterface } from '../App';
import styles from './ThemeSelector.module.css';

export default function ThemeSelector({
  theme,
  themeOptions,
  index,
  setIndex,
  fontOptions,
  fontOption,
  setfontOption,
}: {
  theme: ThemeInterface;
  themeOptions: ThemeInterface[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  fontOptions: string[];
  font: string;
  setfontOption: React.Dispatch<React.SetStateAction<string>>;
}) {
  function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('clicked');
    const value = e.currentTarget.value;
    setIndex(Number(value));
  }

  function handleFontChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setfontOption(fontOptions[value]);
  }

  return (
    <section className={styles.container}>
      <div>
        <h3>Select Colors</h3>
        <div className={styles.radios}>
          {themeOptions.map((theme, i) => (
            <div key={i}>
              <label htmlFor={theme.primary}>Option {i + 1}</label>
              <input
                type="radio"
                name="theme"
                id={theme.primary}
                value={i}
                onChange={handleThemeChange}
                checked={i === index}
              />
            </div>
          ))}
        </div>
        <div className={styles.radios}>
          <h3>Select Fonts</h3>
          {fontOptions.map((font, i) => (
            <div key={i}>
              <label htmlFor={font}>{font}</label>
              <input
                type="radio"
                name="font"
                id={font}
                value={i}
                checked={i === fontOptions.findIndex((f) => f === fontOption)}
                onChange={handleFontChange}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.themePreview}>
        <h3>Preview</h3>
        <div style={{ backgroundColor: theme.primary }}>Primary Color</div>
        <div style={{ backgroundColor: theme.secondary }}>Secondary Color</div>
        <div style={{ backgroundColor: theme.accent }}>Accent Color</div>
      </div>
    </section>
  );
}
