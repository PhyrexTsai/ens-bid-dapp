import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import './MyEnsList.css';

/**
 * TODO 
 * saga load from server
 * import from JSON
 * after import check all ENS status
 * 
 */

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
    'Owned'),
];

export class MyEnsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }
  
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const expendIcon = this.state.expanded ? 
      <i className="material-icons">expand_less</i> :
      <i className="material-icons">expand_more</i>;

    return (
      <div className="MyEnsList">
        <h1>My ENS List</h1>
        <div className="MyEnsList-Head">
          <div className="MyEnsList-Head-Button">
            <Button raised>
              <i className="material-icons">file_upload</i>
              Import
            </Button>
            <Button raised>
              <i className="material-icons">file_download</i>
              Export
            </Button>
          </div>
        </div>
        {data.map(n => {
          return (
            <Card className="MyEnsList-Card" key={n.id}>
              <div className="MyEnsList-CardHeader">
                <CardHeader title={n.name}></CardHeader>
                <div className="MyEnsList-CardContent">
                  <CardContent>
                    <Typography align="right" component="p">
                      {n.status}
                    </Typography>
                  </CardContent>
                </div>
                <CardActions disableActionSpacing>
                  <IconButton
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="More info">
                    {expendIcon}
                  </IconButton>
                </CardActions>
              </div>
              <div className="MyEnsList-Collapse">
                <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                  <Typography paragraph align="left">Winning Deed: {n.winningDeed}</Typography>
                  <Typography paragraph align="left">Highest Bid: {n.highestBid} ETH</Typography>
                  <Typography paragraph align="left">Resolver: {n.resolver}</Typography>
                  <Typography paragraph align="left">Owner: {n.address}</Typography>
                  <Typography paragraph align="left">Reveal Bids By: {n.revealBidsBy}</Typography>
                  <div className="MyEnsList-Collapse-Button">
                    <Button raised>Set Resolver</Button>
                    <Button raised>Transfer</Button>
                    <Button raised>Set Subdomain</Button>
                  </div>
                </Collapse>
              </div>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default MyEnsList;