import { render, screen } from '@testing-library/react'
import HomePage from '../HomePage'
import '@testing-library/jest-dom'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

describe('test homepage', () => {
    test('render correctly', () => {
        render(
            <Router>
                <HomePage />
            </Router>)
        const getText = screen.getAllByText('Mulai Sewa Mobil')[0]
        expect(getText).toBeVisible()
    })
})
