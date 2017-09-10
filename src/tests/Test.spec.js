import chai from 'chai';
import React from 'react';
import {shallow} from 'enzyme';

let expect = chai.expect;

const TestComponent = () => (
    <div>
        <h1>Test</h1>
    </div>
);

describe("<TestComponent/>", () => {
    it('renders one <h1> tag with "Test" text', ()=>{
        const wrapper = shallow(<TestComponent />);
        const h1 = wrapper.find('h1');

        expect(h1).to.have.length(1);
        expect(h1.text()).to.be.equal('Test');
    });
})
