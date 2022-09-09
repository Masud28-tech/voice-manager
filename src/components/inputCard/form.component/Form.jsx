import { useState, useContext } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { TransactionsContext } from '../../../context/transactionsContext';
import { v4 as uuidv4 } from 'uuid';
import useStyles from './styles';

const initialValues = {
    id: '',
    type: "",
    category: "",
    amount: "",
    date: new Date(),
}
const Form = () => {
    const classes = useStyles();
    const { addTransaction } = useContext(TransactionsContext);
    const [formData, setFormData] = useState(initialValues);
    const { type, category, amount, date, id } = formData;

    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(amount), id: uuidv4() };
        addTransaction(transaction);
        setFormData(initialValues);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expence">Expence</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Salaray">Salaray</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type='number' label="Amount" fullWidth value={amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
            </Grid>
            <Grid item xs={6}>
                <TextField type='date' label="Date" fullWidth value={date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
            </Grid>
            <Button className={classes.button} fullWidth variant='outlined' color="primary" onClick={createTransaction}>
                Create
            </Button>
        </Grid>
    )
}

export default Form;