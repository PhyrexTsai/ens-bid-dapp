import React from 'react';
import Paper from 'material-ui/Paper';
import './Disclaimer.css';

export const Disclaimer = () => (
  <div className="Disclaimer">
    <Paper >
      <h1>Disclaimer</h1>
      <p>Portal Network is not a "web wallet". You do not create an account or give us your funds 
        to hold onto. No data leaves your computer / your browser. We make it easy for you 
        to save and access your information and interact with the blockchain.</p>
      <p>We are not responsible for any loss: Ethereum, Portal Network, and some of the underlying 
        Javascript libraries we use are under active development. While we have thoroughly 
        tested & tens of thousands of wallets have been successfully created by people all 
        over the globe, there is always the possibility something unexpected happens that 
        causes your funds to be lost. Please do not invest more than you are willing to lose, 
        and please be careful.</p>
      <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this 
        software and associated documentation files (the "Software"), to deal in the Software 
        without restriction, including without limitation the rights to use, copy, modify, 
        merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
        permit persons to whom the Software is furnished to do so, subject to the following 
        conditions:
      </p>
      <p>The above copyright notice and this permission notice shall be included in all copies 
        or substantial portions of the Software.
      </p>
      <p><span>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
        INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
        PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
        FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
        OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
        DEALINGS IN THE SOFTWARE.
      </span></p>
    </Paper>
  </div>
);