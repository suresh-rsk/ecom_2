import './Homepage.css'
import { useContext } from 'react';
import { pageContext } from '../../App';

const MainPage=()=>{
    const newPage=useContext(pageContext)
    const PageData=newPage.page
    // const pageData= useContext(mainPageData)
    
    return(<div><PageData/></div>)
}
export default MainPage;