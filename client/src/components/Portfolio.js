import React from 'react';
import { Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const pieData = [
  { name: "Equities (Stocks)", value: 170.08, percentage: "70.52%", color: "#00C49F" },
  { name: "Fixed Income (Bonds)", value: 71.08, percentage: "29.47%", color: "#FFBB28" },
  { name: "Cash and Cash Equivalents", value: 0.02, percentage: "0.01%", color: "#FF8042" },
  { name: "Cryptocurrencies", value: 0.02, percentage: "0.01%", color: "#FF8042" }
];

const stocksData = [
  { name: "Apple", symbol: "AAPL", shares: 0.069, price: "$226.33", avgCost: "$217.24", return: 0.63, equity: "$15.63" },
  { name: "NVIDIA", symbol: "NVDA", shares: 0.115, price: "$126.75", avgCost: "$130.63", return: -0.45, equity: "$14.55" },
  { name: "Meta Platforms", symbol: "META", shares: 0.019, price: "$520.53", avgCost: "$522.93", return: -0.05, equity: "$9.95" }
];

const Portfolio = () => {
  const totalValue = pieData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Box sx={{ p: 10, bgcolor: 'background.paper', boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom component="div">
        Total Market Value: ${totalValue.toFixed(2)}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <TableContainer component={Paper} sx={{ maxWidth: '60%', mr: 2 }}>
          <Table sx={{ minWidth: 300 }} aria-label="portfolio summary table">
            <TableHead>
              <TableRow>
                <TableCell>Asset Type</TableCell>
                <TableCell align="right">Market Value ($)</TableCell>
                <TableCell align="right">Portfolio Allocation Percentage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pieData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="right">{`$${item.value.toFixed(2)}`}</TableCell>
                  <TableCell align="right">{item.percentage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <PieChart width={300} height={300}>
          <Pie dataKey="value" data={pieData} cx={150} cy={100} outerRadius={100} fill="#8884d8">
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={50}/>
        </PieChart>
      </Box>

      <TableContainer component={Paper} sx={{ maxWidth: '100%' }}>
        <Table sx={{ minWidth: 650 }} aria-label="detailed stocks table">
          <TableHead>
            <TableRow>
              <TableCell>Asset Name</TableCell>
              <TableCell align="right">Ticker Symbol</TableCell>
              <TableCell align="right">Quantity Held</TableCell>
              <TableCell align="right">Current Market Price</TableCell>
              <TableCell align="right">Market Value</TableCell>
              <TableCell align="right">Average Purchase Cost</TableCell>
              <TableCell align="right">Unrealized Gain/Loss</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stocksData.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.symbol}</TableCell>
                <TableCell align="right">{row.shares}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.avgCost}</TableCell>
                <TableCell align="right">{row.return >= 0 ? `↑ $${row.return.toFixed(2)}` : `↓ $${-row.return.toFixed(2)}`}</TableCell>
                <TableCell align="right">{row.equity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Portfolio;
