import { useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels() {
    const [checked, setChecked] = useState(false);

    return (
        <FormControlLabel
            control={
                <Switch
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    name="active"
                    color="primary"
                    size='big'
                />
            }
            label={checked ? "Active Shift" : "Not-active Shift"}
        />
    );
}