// import logo from './logo.svg'; 
import './App.css';
import Date from './component/Date';
import Item from './component/Item';
function App() {
  const res=[
    {
      nameitem:"Aman",
      dayitem:"20",
      monthitem:"January",
      yearitem:"2008"
    },
    {
      nameitem:"ashu",
      dayitem:"18",
      monthitem:"February",
      yearitem:"2009"
    },
    {
      nameitem:"molu",
      dayitem:"02",
      monthitem:"April",
      yearitem:"2005"
    }

  ]
  return (
    // <div>
    //   <Date day="08" month="March" year="2004">Birth</Date>
    //   <Item name="Ashu"></Item>
    //   <Date day="15" month="March" year="2006"></Date>
    //   <Item name="Aman"></Item>
    //   <Date day="20" month="October" year="2005"></Date>
    //   <Item name="Golu"></Item>
    //   <h1>Hello Jee</h1>
    // </div>
    <div>
        <Item name={res[0].nameitem}>Mehta</Item>
        <Date day={res[0].dayitem} month={res[0].monthitem} year={res[0].yearitem}></Date>
        <Item name={res[1].nameitem}></Item>
        <Date day={res[1].dayitem} month={res[1].monthitem} year={res[1].yearitem}></Date>
        <Item name={res[2].nameitem}></Item>
        <Date day={res[2].dayitem} month={res[2].monthitem} year={res[2].yearitem}></Date>
    </div>
  );
}

export default App;
