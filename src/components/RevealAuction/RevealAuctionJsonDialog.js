import React from 'react';
import Dialog from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import './RevealAuctionJsonDialog.css';

export const RevealAuctionJsonDialog = (props) => {
  const disabled = (props.revealJson !== '') ? false : true;

  return (
    <Dialog
      className="RevealAuctionJsonDialog"
      open={props.importDialogOpen}
      transition={Slide}>
      <IconButton
        color="primary"
        onClick={props.handleImportDialogClose}
        aria-label="Close">
        <CloseIcon/>
      </IconButton>
      <div className="RevealAuctionJsonDialog-wrapper">
        <Card className='RevealAuctionJsonDialog-card'>
          <TextField
            className="RevealAuctionJsonDialog-formcontrol"
            error={props.revealJsonErr}
            id="revealJson"
            name="revealJson"
            label="Reveal Auction JSON"
            value={props.revealJson}
            onChange={props.handleInputChange}
            margin="normal"
            helperText={props.revealJsonErr ? props.revealJsonErrMsg : 'Ex: {"name": "yourbid", "secret": "your secret", "value": "0.01", "address": ""}'}
          />
          <div className="RevealAuctionJsonDialog-button-container">
            <Button 
              raised 
              disabled={disabled}
              onClick={props.handleParseImportJson}>
              Import
            </Button>
          </div>
        </Card>
      </div>
    </Dialog>
  );
}