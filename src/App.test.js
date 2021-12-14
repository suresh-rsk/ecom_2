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
 
it('should have classname',()=>{
  const{getByTestId}=render(<Navbar/>);
  expect(getByTestId("nav"))
});
