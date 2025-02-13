import { useEffect, useState } from 'react';
import ThemeSelector from './ui/ThemeSelector';
import DesignPreview from './ui/DesignPreview';

export interface ThemeInterface {
  primary: string;
  secondary: string;
  accent: string;
}

const ThemeOptions: ThemeInterface[] = [
  { primary: '#0b1c48', secondary: '#710117', accent: '#e55b13' },
  { primary: '#004aad', secondary: '#099b43', accent: '#ff8a01' },
  { primary: '#1a4314', secondary: '#2c5e1a', accent: '#b2d2a4' },
];

const FontOptions = ['Mulish', 'Prompt'];

export default function App() {
  const [index, setIndex] = useState(0);
  const [themeOption, setThemeOption] = useState(ThemeOptions[index]);
  const [fontOption, setFontOption] = useState(FontOptions[0]);

  useEffect(() => {
    setThemeOption(ThemeOptions[index]);
  }, [index]);

  return (
    <main style={{ fontFamily: fontOption }}>
      <ThemeSelector
        theme={themeOption}
        themeOptions={ThemeOptions}
        index={index}
        setIndex={setIndex}
        fontOptions={FontOptions}
        fontOption={fontOption}
        setfontOption={setFontOption}
      />
      <DesignPreview />
    </main>
  );
}
