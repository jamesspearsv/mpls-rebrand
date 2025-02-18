import { useState } from 'react';
import DesignPreview from './ui/DesignPreview';
import DesignSelector from './ui/DesignSelector';

export interface ColorSetInterface {
  primary: string;
  secondary: string;
  accent: string;
}

const ColorSets: ColorSetInterface[] = [
  { primary: '#0b1c48', secondary: '#710117', accent: '#e55b13' },
  { primary: '#004aad', secondary: '#099b43', accent: '#ff8a01' },
  { primary: '#1a4314', secondary: '#2c5e1a', accent: '#b2d2a4' },
];
const FontOptions = ['Mulish', 'Prompt'];

export default function App() {
  const [colorSet, setColorSet] = useState(ColorSets[0]);
  const [font, setFont] = useState(FontOptions[0]);

  return (
    <main style={{ fontFamily: font }}>
      <DesignSelector
        colorSet={colorSet}
        colorSets={ColorSets}
        setColorSet={setColorSet}
        font={font}
        setFont={setFont}
        fontOptions={FontOptions}
      />
      <DesignPreview colors={colorSet} />
    </main>
  );
}
