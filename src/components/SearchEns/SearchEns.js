import React from 'react';
import {SearchResult} from './SearchResult';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { CircularProgress } from 'material-ui/Progress';
import './SearchEns.css';

const SearchDescription = () => (
  <div className="SearchDescription">
    <h1>Start participate blockchain technology today</h1>
  </div>
);

const SearchInput = (props) => {
  const searchInputField = 
    <Input
      placeholder="Search"
      minLength="7"
      inputProps={{
        'aria-label': 'Search',
      }}
      disableUnderline
      value={props.value}
      onChange={props.handleSearchChange}
      onKeyPress={props.handleSearchKeyPress}
      onKeyDown={props.handleSearchKeyDown}
    />;

  const ethTipName = 
    <div className="SearchEns-ethTipName">
    </div>;
  
  const searchButton = 
    <div className="SearchEns-searchButton">
      <IconButton aria-label="Search" onClick={props.handleSearchClick}>
        <i className="material-icons">search</i>
      </IconButton>
    </div>;

  const searchButtonBlock = 
    <div className="flex-row-center SearchEns-searchBlock">
      {ethTipName}
      {searchButton}
    </div>;

  return (
    <div  className="SearchEns-paper">
      <Paper className="SearchEns-input-block">
        {searchInputField}
        {searchButtonBlock}
      </Paper>
    </div>
  );
};

export const SearchEns = (props) => (
  <div className="SearchEns">
    <SearchDescription />
    <SearchInput 
      value={props.searchValue}
      handleSearchChange={props.handleSearchChange}
      handleSearchClick={props.handleSearchClick}
      handleSearchKeyPress={props.handleSearchKeyPress}
      handleSearchKeyDown={props.handleSearchKeyDown}
    />
    {props.isFetching && <div className="SearchEns-progress"><CircularProgress/></div>}
    {props.searchResult && <SearchResult {...props} recommend={false} TLD=".eth" />}
    {props.searchResult && <SearchResult {...props} recommend={false} TLD=".etc" />}
    {props.searchResult && <SearchResult {...props} recommend={false} TLD=".qtum" />}
    {props.domainSearch.length > 0 && props.domainSearch.map((data, index) => (
      <SearchResult searchResult={data} recommend={true} key={`searchResult-${index}`} />
    ))}
  </div>
);
