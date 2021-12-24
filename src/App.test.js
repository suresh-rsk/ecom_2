import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import react from 'react'
import Navbar from './components/Navbar/Navbar'

afterEach(cleanup);

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
 
it("first test",()=>{
render(<App/>);
const testElement=screen.getByText(/App/i);
expect(testElement).toBeInTheDocument();
});
