import React, {Component} from 'react';
import {Main} from './components/Main';
import Warnings from './components/Warnings';
import Top from './components/Top/Top';
import Footer from './components/Footer/Footer';
import {getAddressBalance} from './lib/dAppService';
import 'typeface-roboto';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      balance: '',
      source: 'keystore',
      keystore: '',
      privateKey: '',
    };
    this.setAccount = this.setAccount.bind(this);
    this.setEmptyAccount = this.setEmptyAccount.bind(this);
    this.setSource = this.setSource.bind(this);
    this.setKeystore = this.setKeystore.bind(this);
    this.setEmptyKeystore = this.setEmptyKeystore.bind(this);
    this.setPrivateKey = this.setPrivateKey.bind(this);
    this.setEmptyPrivateKey = this.setEmptyPrivateKey.bind(this);
  }

  setSource(type) {
    this.setState({source: type});
  }

  setAccount(account) {
    const balance = getAddressBalance(account);
    this.setState({account, balance});
  }

  setEmptyAccount() {
    this.setState({account: '', balance: ''});
  }

  setKeystore(keystore) {
    this.setState({keystore});
  }

  setEmptyKeystore() {
    this.setState({keystore: ''});
  }

  setPrivateKey(privateKey) {
    this.setState({privateKey});
  }

  setEmptyPrivateKey() {
    this.setPrivateKey({privateKey: ''});
  }

  render() {
    return (
      <div className="App">
        <Top
          {...this.state}
          setAccount={this.setAccount}
          setEmptyAccount={this.setEmptyAccount}
          setSource={this.setSource}
          setKeystore={this.setKeystore}
          setEmptyKeystore={this.setEmptyKeystore}
          setPrivateKey={this.setPrivateKey}
          setEmptyPrivateKey={this.setEmptyPrivateKey}
        /> 
        {process.env.REACT_APP_PROVIDER
          ? <Main/>
          : <Warnings/>}
        <Footer/>
      </div>
    );
  }
}

export default App;
