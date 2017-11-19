import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import './MyEnsList.css';

let id = 0;
function ensData(name, resolver, address, winningDeed, highestBid ,revealBidsBy, status) {
  id += 1;
  return { id, name, resolver, address, winningDeed, highestBid, revealBidsBy, status };
}

const data = [
  ensData(
    'phyrextsai.eth', 
    '0x1da022710df5002339274aadee8d58218e9d6ab5', 
    '0x0000000000000000000000000000000000000000', 
    '0xd1b8db5b985dee37bb158b1e34bd6a3e6b768ee6', 
    0.01,
    '7/15/2017 10:56:12 AM (UTC)',
    'Owned [2]'),
];

export const MyEnsList = () => (
  <div className="MyEnsList">
    <div>
      <h1>My ENS List</h1>
    </div>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ENS Name</TableCell>
            <TableCell>ENS Info</TableCell>
            <TableCell>Resolver/Address</TableCell>
            <TableCell>Expires At</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell>
                  <p>{n.winningDeed}</p>
                  <p>{n.highestBid}</p>
                  <p>{n.revealBidsBy}</p>
                </TableCell>
                <TableCell>
                  <p>{n.resolver}</p>
                  <p>{n.address}</p>
                </TableCell>
                <TableCell>{n.revealBidsBy} + 2 years</TableCell>
                <TableCell>{n.status}</TableCell>
                <TableCell className="MyEnsList-row-action">
                  <Button raised>Transfer</Button>
                  <Button raised>Set Subdomain</Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  </div>
);
