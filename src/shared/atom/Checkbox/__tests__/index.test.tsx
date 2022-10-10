import { render, screen } from '@testing-library/react'
import { CheckboxProps } from 'antd'
import Checkbox from '..'


export const accordinTests = describe('According Tests', () => {

    it('it shoud render CheckBox', async () => {
        render(<Checkbox
            checked={true}
        />)
        const checkbox = screen.getByTestId('checkbox') as CheckboxProps
        expect(checkbox.checked).toBe(true)

    })


})