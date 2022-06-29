import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper} from "@mui/material";
import Button from '@mui/material/Button';

export default function TaxCalculator() {
    const paperStyle = {
        padding: '50px 20px',
        width: 600,
        margin: '20px auto'
    }
    const nestedPaperStyle = {
        padding: '5px 50px 20px',
        width: 400,
        margin: '20px auto'
    }
    const[income, setIncome] = useState('')
    const[taxRate, setRate] = useState('')
    const[result, setResult] = useState(0)
    const[fixedPayment, setFixed] = useState('')
    const apiURL = `/api/v1/calc?income=${income}&taxRate=${taxRate}&fixed=${fixedPayment}`
    const handleClick = async (e) => {
        await e.preventDefault()
        await fetch(apiURL)
            .then(response => response.json())
            .then(data => setResult(data));
    }
    let prepairOutput = `${result} руб. налога`
    return (
        <Container>
            <Paper elevation = {3} style = {paperStyle}>
                <h1>Расчет налога: </h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Доход: " variant="outlined" fullWidth
                               value = {income}
                               onChange = {(e) => setIncome(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Оплаченные страховые взносы: " variant="outlined" fullWidth
                               value = {fixedPayment}
                               onChange = {(e) => setFixed(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Налоговая ставка: " variant="outlined" fullWidth
                               value = {taxRate}
                               onChange={(e) => setRate(e.target.value)}
                    />
                </Box>
                <Button variant="contained" onClick={handleClick}>Рассчитать</Button>
                <Paper elevation = {3} style = {nestedPaperStyle}>
                    <h1 style={{fontSize: '11pt' }}>Результат расчета: </h1>
                <h1>{prepairOutput}</h1>
                </Paper>
            </Paper>
        </Container>
    );
}