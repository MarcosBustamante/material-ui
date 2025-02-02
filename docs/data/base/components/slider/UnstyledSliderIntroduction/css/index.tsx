import * as React from 'react';
import { useTheme, alpha } from '@mui/system';
import { Slider, sliderClasses } from '@mui/base/Slider';

export default function UnstyledSliderIntroduction() {
  return (
    <div style={{ width: 320 }}>
      <Slider
        slotProps={{
          root: { className: 'CustomSlider' },
          rail: { className: 'CustomSlider-rail' },
          track: { className: 'CustomSlider-track' },
          thumb: { className: 'CustomSlider-thumb' },
        }}
        defaultValue={50}
      />
      <Slider
        slotProps={{
          root: { className: 'CustomSlider' },
          rail: { className: 'CustomSlider-rail' },
          track: { className: 'CustomSlider-track' },
          thumb: { className: 'CustomSlider-thumb' },
        }}
        defaultValue={10}
        disabled
      />
      <Styles />
    </div>
  );
}

const cyan = {
  50: '#E9F8FC',
  100: '#BDEBF4',
  200: '#99D8E5',
  300: '#66BACC',
  400: '#1F94AD',
  500: '#0D5463',
  600: '#094855',
  700: '#063C47',
  800: '#043039',
  900: '#022127',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === 'dark';
}

function Styles() {
  // Replace this with your app logic for determining dark mode
  const isDarkMode = useIsDarkMode();
  return (
    <style>{`
    .CustomSlider {
      color: ${isDarkMode ? cyan[300] : cyan[500]};
      height: 6px;
      width: 100%;
      padding: 16px 0;
      display: inline-block;
      position: relative;
      cursor: pointer;
      touch-action: none;
      -webkit-tap-highlight-color: transparent;
    }

    .CustomSlider:hover {
      opacity: 1;
    }

    .CustomSlider.${sliderClasses.disabled} { 
      pointer-events: none;
      cursor: default;
      color: ${isDarkMode ? grey[600] : grey[300]};
      opacity: 0.5;
    }

    .CustomSlider-rail {
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: currentColor;
      opacity: 0.4;
    }

    .CustomSlider-track {
      display: block;
      position: absolute;
      height: 4px;
      border-radius: 2px;
      background-color: currentColor;
    }

    .CustomSlider-thumb {
      position: absolute;
      width: 16px;
      height: 16px;
      margin-left: -6px;
      margin-top: -6px;
      box-sizing: border-box;
      border-radius: 50%;
      outline: 0;
      border: 3px solid currentColor;
      background-color: #fff;
    }

    .CustomSlider-thumb:hover {
      box-shadow: 0 0 0 0.25rem ${alpha(isDarkMode ? cyan[300] : cyan[400], 0.15)};
    }

    .CustomSlider-thumb:focus-visible {
      box-shadow: 0 0 0 4px ${isDarkMode ? cyan[300] : cyan[200]};
      outline: none;
    }

    .CustomSlider-thumb.${sliderClasses.active} {
      box-shadow: 0 0 0 0.25rem ${alpha(isDarkMode ? cyan[300] : cyan[200], 0.3)};
    }
    `}</style>
  );
}
