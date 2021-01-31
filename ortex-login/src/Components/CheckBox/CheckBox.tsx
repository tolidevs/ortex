import React, { useState } from 'react'

import { Checkbox, CheckboxProps, FormControlLabel } from '@material-ui/core'

export interface ICheckBoxProps extends CheckboxProps {
    label: string;
}

const CheckBox: React.FC<ICheckBoxProps> = ( props ) => {
    const { label } = props

    const [checked, setChecked] = useState<boolean>(false)
    const handleChange = () => {
        setChecked(!checked);
    }

    return (
        <FormControlLabel
            control={<Checkbox checked={checked} onClick={handleChange} color="primary" />}
            label={label}
        />
    )
}

export default CheckBox