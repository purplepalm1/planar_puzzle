import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { puzzleInformation as level1 } from "./model/puzzles/level1.js";
import { puzzleInformation as level2 } from "./model/puzzles/level2.js";
import { puzzleInformation as level3 } from "./model/puzzles/level3.js";
import { handleLevelChange } from './App.js';


test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});


test('Check if level is accurate', () => {
    const level = handleLevelChange(-1);
    expect(level).toBe("already at level 1")

});





