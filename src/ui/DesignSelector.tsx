import React from 'react';
import { ColorSetInterface } from '../App';
import styles from './DesignSelector.module.css';

interface DesignSelectorProps {
  colorSet: ColorSetInterface;
  colorSets: ColorSetInterface[];
  setColorSet: React.Dispatch<React.SetStateAction<ColorSetInterface>>;
  font: string;
  fontOptions: string[];
  setFont: React.Dispatch<React.SetStateAction<string>>;
}

export default function DesignSelector({
  colorSet,
  colorSets,
  setColorSet,
  font,
  fontOptions,
  setFont,
}: DesignSelectorProps) {
  function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.currentTarget.value;
    setColorSet(JSON.parse(value));
  }

  function handleFontChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFont(e.currentTarget.value);
  }

  return (
    <section className={styles.container}>
      <div>
        <h3>Select Color Set</h3>
        <div className={styles.radios}>
          <select
            name="colors"
            value={JSON.stringify(colorSet)}
            onChange={handleColorChange}
          >
            {colorSets.map((set, index) => (
              <option value={JSON.stringify(set)} id={set.primary}>
                Set {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.radios}>
          <h3>Select Fonts</h3>
          <select
            name="fonts"
            id="fonts"
            value={font}
            onChange={handleFontChange}
          >
            {fontOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.themePreview}>
        <h3>Preview</h3>
        <div style={{ backgroundColor: colorSet.primary }}>
          {colorSet.primary}
        </div>
        <div style={{ backgroundColor: colorSet.secondary }}>
          {colorSet.secondary}
        </div>
        <div style={{ backgroundColor: colorSet.accent }}>
          {colorSet.accent}
        </div>
      </div>
    </section>
  );
}
