import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import SplitHeader from '../index.jsx';

describe('SplitHeader', function () {
  it('displays a string with bolded, capitalised initial letters', function () {
    const header = ReactTestUtils.renderIntoDocument(
      <SplitHeader>just a test</SplitHeader>
    );

    const title = ReactTestUtils.scryRenderedDOMComponentsWithClass(header, 'splitheader');
    const dom = ReactDOM.findDOMNode(title);

    expect(dom.textContent).to.equal('YARSK');
  });
});
