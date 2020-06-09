import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, athan, iqama) {
  return { name, athan, iqama };
}

const rows = [
  createData('Fajr', 'time', 'time'),
  createData('Dhur', 'time', 'time'),
  createData('Asr', 'time', 'time'),
  createData('Magrib', 'time', 'time'),
  createData('Isha', 'time', 'time'),
  createData('Juma Prayer', 'time', 'time')
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
      <section className="section container">
          <div className="row">
              <div className="col s12">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">Athan</TableCell>
                        <TableCell align="right">Iqama</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.athan}</TableCell>
                        <TableCell align="right">{row.iqama}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
              </div>
          </div>
    </section>
  );
}
